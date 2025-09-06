
'use client'

import { useUser } from '@clerk/nextjs'
import { useState, useEffect } from 'react'
import { Button } from '@/components/UI/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from '@/components/UI/dialog'
import { toast } from 'sonner'
import { Check, X, Loader2 } from 'lucide-react'

function ReviewList({ reviews = [], loading, error }) {
  const { user, isLoaded } = useUser()

  const [allReviews, setAllReviews] = useState([]) // <-- master state
  const [filteredReviews, setFilteredReviews] = useState([])
  const [filter, setFilter] = useState('All')
  const [selectedReview, setSelectedReview] = useState(null)
  const [actionType, setActionType] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [lastAction, setLastAction] = useState(null)

  const role = user?.publicMetadata?.role || 'user'

  // Sync incoming props once
  useEffect(() => {
    if (Array.isArray(reviews)) {
      setAllReviews(reviews)
    }
  }, [reviews])

  // Filtering happens whenever allReviews/filter/role changes
  useEffect(() => {
    if (!Array.isArray(allReviews)) return

    if (role !== 'admin') {
      setFilteredReviews(allReviews.filter((r) => r.status === 'APPROVED'))
    } else {
      if (filter === 'All') {
        setFilteredReviews(allReviews)
      } else if (filter === 'Approved') {
        setFilteredReviews(allReviews.filter((r) => r.status === 'APPROVED'))
      }
    }
  }, [filter, allReviews, role])

  const openConfirmation = (review, type) => {
    setSelectedReview(review)
    setActionType(type)
    setIsModalOpen(true)
  }

  const handleConfirm = async () => {
    if (!selectedReview) return
    setIsSubmitting(true)

    const newStatus = actionType === 'approve' ? 'APPROVED' : 'REJECTED'

    // Update in allReviews (not just filtered)
    const updatedAll = allReviews.map(r =>
      r.id === selectedReview.id ? { ...r, status: newStatus } : r
    )
    setAllReviews(updatedAll)

    // Save undo info
    setLastAction({
      review: selectedReview,
      actionType,
      prevReviews: allReviews,
    })

    setIsModalOpen(false)
    setIsSubmitting(false)

    // Toast with Undo
    toast.success(`Review ${newStatus.toLowerCase()}`, {
      action: {
        label: "Undo",
        onClick: () => {
          setAllReviews(lastAction?.prevReviews || allReviews)
          setLastAction(null)
        },
      },
      duration: 5000,
    })

    // API call
    try {
      const res = await fetch(`/api/reviews/${selectedReview.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      })
      if (!res.ok) throw new Error()
    } catch (err) {
      toast.error("Failed to update review")
      setAllReviews(lastAction?.prevReviews || allReviews)
    }
  }

  if (!isLoaded || !user) return <div className="text-center py-6 text-gray-500">Loading user...</div>
  if (loading) return <div className="text-center py-6 text-blue-500">Loading reviews...</div>
  if (error) return <div className="text-center py-6 text-red-500">{error}</div>
  if (!Array.isArray(filteredReviews)) return <div>No reviews found.</div>

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <span className="text-primary">📋</span> Review Approvals
      </h2>
      <p className="text-sm text-gray-500 mb-4">Manage pending requests requiring your review.</p>

      {role === 'admin' && (
        <div className="mb-4 flex gap-2">
          {['All', 'Approved'].map((f) => (
            <Button
              key={f}
              variant={filter === f ? 'default' : 'outline'}
              onClick={() => setFilter(f)}
            >
              {f}
            </Button>
          ))}
        </div>
      )}

      {filteredReviews.length === 0 ? (
        <div className="text-gray-400 text-center py-4">No reviews match this filter.</div>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="bg-gray-50 text-gray-500">
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Requester</th>
                <th className="px-4 py-2">Review</th>
                <th className="px-4 py-2">Submission Date</th>
                <th className="px-4 py-2">Status</th>
                {role === 'admin' && <th className="px-4 py-2">Actions</th>}
              </tr>
            </thead>
            <tbody>
              {filteredReviews.map((review, idx) => (
                <tr key={review.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2 font-medium">{String(idx + 1).padStart(3, '0')}</td>
                  <td className="px-4 py-2">{review?.userName || "Anonymous"}</td>
                  <td className="px-4 py-2">{review.content}</td>
                  <td className="px-4 py-2">{new Date(review.createdAt).toLocaleDateString()}</td>
                  <td className="px-4 py-2">
                    {review.status === 'APPROVED' ? (
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">Approved</span>
                    ) : review.status === 'REJECTED' ? (
                      <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs">Rejected</span>
                    ) : (
                      <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs">Pending</span>
                    )}
                  </td>
                  {role === 'admin' && (
                    <td className="px-4 py-2 flex gap-2">
                      <Button
                        size="icon"
                        className="bg-green-100 hover:bg-green-200 text-green-700"
                        disabled={review.status === 'APPROVED'}
                        onClick={() => openConfirmation(review, 'approve')}
                      >
                        <Check className="w-4 h-4" />
                      </Button>
                      <Button
                        size="icon"
                        className="bg-red-100 hover:bg-red-200 text-red-700"
                        disabled={review.status === 'REJECTED'}
                        onClick={() => openConfirmation(review, 'reject')}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Confirmation Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {actionType === 'approve' ? 'Approve this review?' : 'Reject this review?'}
            </DialogTitle>
          </DialogHeader>
          <p className="text-gray-600 my-4">
            This action will change the review’s visibility to others. Are you sure?
          </p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsModalOpen(false)} disabled={isSubmitting}>
              Cancel
            </Button>
            <Button onClick={handleConfirm} disabled={isSubmitting}>
              {isSubmitting ? <Loader2 className="animate-spin h-4 w-4" /> : 'Confirm'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ReviewList




