// 'use client'

// import { useUser } from '@clerk/nextjs'
// import React from 'react'

// function ReviewList({ reviews, loading, error }) {
//   const { user, isLoaded } = useUser() // ✅ Fix: call the hook
//   console.log("inspect user object ", user);
  

//   if (!isLoaded || !user) {
//     return <div className="text-center py-6 text-gray-500">Loading user...</div>
//   }

//   if (loading) {
//     return <div className="text-center py-6 text-blue-500">Loading reviews...</div>
//   }

//   if (error) {
//     return <div className="text-center py-6 text-red-500">{error}</div>
//   }

//   if (!reviews || reviews.length === 0) {
//     return <div className="text-center py-6 text-gray-400">No reviews yet.</div>
//   }

//   return (
//     <div className="w-full max-w-3xl mx-auto">
//       <h2 className="text-2xl font-semibold text-primary mb-4">Investor Reviews</h2>
//       {/* {user.} */}
      // <div className="space-y-4">
      //   {reviews.map((review) => (
      //     <div
      //       key={review.id}
      //       className="rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
      //     >
      //       <div className="flex items-center justify-between mb-2">
      //         <p className="text-sm font-medium text-gray-700">
      //           Reviewer: <span className="font-semibold">{user.fullName || 'shahid'}</span>
      //         </p>
      //         <div className="flex gap-1 text-yellow-400">
      //           {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
      //         </div>
      //       </div>
      //       <p className="text-gray-600">{review.content}</p>
      //       <p className="text-xs text-gray-400 mt-2">
      //         {new Date(review.createdAt).toLocaleDateString()}
      //       </p>
      //     </div>
      //   ))}
      // </div>
//     </div>
//   )
// }

// export default ReviewList


//new trial code

// 'use client'

// import { useUser } from '@clerk/nextjs'
// import React from 'react'

// function ReviewList({ reviews, loading, error }) {
//   const { user, isLoaded } = useUser() // ✅ Fix: call the hook
//   console.log("inspect user object ", user);

//   const role=user.publicMetadata.role
  

//   if (!isLoaded || !user) {
//     return <div className="text-center py-6 text-gray-500">Loading user...</div>
//   }

//   if (loading) {
//     return <div className="text-center py-6 text-blue-500">Loading reviews...</div>
//   }

//   if (error) {
//     return <div className="text-center py-6 text-red-500">{error}</div>
//   }

//   if (!reviews || reviews.length === 0) {
//     return <div className="text-center py-6 text-gray-400">No reviews yet.</div>
//   }

//   return (
//     <div className="w-full max-w-3xl mx-auto">
//       <h2 className="text-2xl font-semibold text-primary mb-4">Investor Reviews</h2>
//       {role==='admin' && !reviews?.approved?(<div>
//          <div className="space-y-4">
//         {reviews.map((review) => (
//           <div
//             key={review.id}
//             className="rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
//           >
//             <div className="flex items-center justify-between mb-2">
//               <p className="text-sm font-medium text-gray-700">
//                 Reviewer: <span className="font-semibold">{user.fullName || 'shahid'}</span>
//               </p>
//               <div className="flex gap-1 text-yellow-400">
//                 {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
//               </div>
//             </div>
//             <p className="text-gray-600">{review.content}</p>
//             <p className="text-xs text-gray-400 mt-2">
//               {new Date(review.createdAt).toLocaleDateString()}
//             </p>
//           </div>
//         ))}
//       </div>
//       </div>):(<div>customer review VIEW:
//          <div className="space-y-4">
//         {reviews.approved && reviews.map((review) => (
//           <div
//             key={review.id}
//             className="rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
//           >
//             <div className="flex items-center justify-between mb-2">
//               <p className="text-sm font-medium text-gray-700">
//                 Reviewer: <span className="font-semibold">{user.fullName || 'shahid'}</span>
//               </p>
//               <div className="flex gap-1 text-yellow-400">
//                 {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
//               </div>
//             </div>
//             <p className="text-gray-600">{review.content}</p>
//             <p className="text-xs text-gray-400 mt-2">
//               {new Date(review.createdAt).toLocaleDateString()}
//             </p>
//           </div>
//         ))}
//       </div>
//       </div>)}
//       {/* <div className="space-y-4">
//         {reviews.map((review) => (
//           <div
//             key={review.id}
//             className="rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
//           >
//             <div className="flex items-center justify-between mb-2">
//               <p className="text-sm font-medium text-gray-700">
//                 Reviewer: <span className="font-semibold">{user.fullName || 'shahid'}</span>
//               </p>
//               <div className="flex gap-1 text-yellow-400">
//                 {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
//               </div>
//             </div>
//             <p className="text-gray-600">{review.content}</p>
//             <p className="text-xs text-gray-400 mt-2">
//               {new Date(review.createdAt).toLocaleDateString()}
//             </p>
//           </div>
//         ))}
//       </div> */}
//     </div>
//   )
// }

// export default ReviewList


//new code with toogle button to approve reviews


// 'use client';

// import { useUser } from '@clerk/nextjs';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function ReviewList({ reviews = [], loading, error }) {
//   const { user, isLoaded } = useUser();
//   const [filteredReviews, setFilteredReviews] = useState(reviews);
//   const [filter, setFilter] = useState('All');
//   const [selectedReview, setSelectedReview] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   const role = user?.publicMetadata?.role;

//   useEffect(() => {
//     if (filter === 'All') {
//       setFilteredReviews(reviews);
//     } else if (filter === 'Approved') {
//       setFilteredReviews(reviews.filter(r => r.approved === true));
//     } else if (filter === 'Rejected') {
//       setFilteredReviews(reviews.filter(r => r.approved === false));
//     }
//   }, [filter, reviews]);

//   const confirmToggle = (review) => {
//     setSelectedReview(review);
//     setShowModal(true);
//   };

//   const handleConfirm = async () => {
//     try {
//       const updated = await axios.patch(`/api/reviews/${selectedReview.id}`, {
//         approved: !selectedReview.approved,
//       });

//       // Refresh the filtered list
//       const updatedReviews = reviews.map(r =>
//         r.id === selectedReview.id
//           ? { ...r, approved: !selectedReview.approved }
//           : r
//       );
//       setFilteredReviews(updatedReviews);
//       setShowModal(false);
//     } catch (err) {
//       console.error('Approval update failed:', err);
//     }
//   };

//   if (!isLoaded || !user) return <div>Loading user...</div>;
//   if (loading) return <div>Loading reviews...</div>;
//   if (error) return <div className="text-red-500">{error}</div>;
//   if (!reviews || reviews.length === 0) return <div>No reviews found.</div>;

//   return (
//     <div className="w-full max-w-3xl mx-auto p-4">
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-xl font-semibold">Investor Reviews</h2>
//         <div className="space-x-2">
//           {['All', 'Approved', 'Rejected'].map((status) => (
//             <button
//               key={status}
//               onClick={() => setFilter(status)}
//               className={`px-3 py-1 text-sm rounded-md border ${
//                 filter === status
//                   ? 'bg-indigo-600 text-white'
//                   : 'bg-white text-gray-600 hover:bg-gray-100'
//               }`}
//             >
//               {status}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="space-y-4">
//         {filteredReviews.map((review) => (
//           <div
//             key={review.id}
//             className="bg-white rounded-xl shadow border p-4 flex justify-between items-start"
//           >
//             <div>
//               <div className="text-sm text-gray-800 font-semibold">
//                 {user.fullName || 'User'} —{' '}
//                 <span className="text-xs text-gray-400">
//                   {new Date(review.createdAt).toLocaleDateString()}
//                 </span>
//               </div>
//               <div className="text-yellow-400 mt-1">
//                 {'★'.repeat(review.rating)}
//                 {'☆'.repeat(5 - review.rating)}
//               </div>
//               <p className="text-gray-700 mt-2">{review.content}</p>
//               <p className="text-xs text-gray-500 mt-1">
//                 Status:{' '}
//                 <span
//                   className={`font-semibold ${
//                     review.approved ? 'text-green-600' : 'text-red-500'
//                   }`}
//                 >
//                   {review.approved ? 'Approved' : 'Rejected'}
//                 </span>
//               </p>
//             </div>

//             {role === 'admin' && (
//               <button
//                 onClick={() => confirmToggle(review)}
//                 className={`px-3 py-1 text-sm rounded-md ${
//                   review.approved
//                     ? 'bg-red-100 text-red-600 hover:bg-red-200'
//                     : 'bg-green-100 text-green-700 hover:bg-green-200'
//                 }`}
//               >
//                 {review.approved ? 'Reject' : 'Approve'}
//               </button>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Confirmation Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-xl max-w-sm shadow-xl text-center">
//             <h3 className="text-lg font-semibold mb-2">Are you sure?</h3>
//             <p className="text-sm text-gray-600 mb-4">
//               {selectedReview?.approved
//                 ? 'Reject this review?'
//                 : 'Approve this review?'}
//             </p>
//             <div className="flex justify-center gap-4">
//               <button
//                 onClick={handleConfirm}
//                 className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//               >
//                 Confirm
//               </button>
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="px-4 py-2 border rounded hover:bg-gray-100"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ReviewList;

///new code added approve and reject button

// 'use client'

// import { useUser } from '@clerk/nextjs'
// import { useState, useEffect } from 'react'
// import { Button } from '@/components/ui/button'
// import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle } from '@/components/ui/dialog'
// import { toast } from 'sonner'

// function ReviewList({ reviews = [], loading, error }) {
//   const { user, isLoaded } = useUser()
//   const [filteredReviews, setFilteredReviews] = useState([])
//   const [filter, setFilter] = useState('All')
//   const [selectedReview, setSelectedReview] = useState(null)
//   const [actionType, setActionType] = useState('')
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   const role = user?.publicMetadata?.role || 'user'

//   useEffect(() => {
//     if (!Array.isArray(reviews)) return

//     if (filter === 'All') {
//       setFilteredReviews(reviews)
//     } else if (filter === 'Approved') {
//       setFilteredReviews(reviews.filter(r => r.approved === true))
//     } else if (filter === 'Rejected') {
//       setFilteredReviews(reviews.filter(r => r.approved === false))
//     }
//   }, [filter, reviews])

//   const openConfirmation = (review, type) => {
//     setSelectedReview(review)
//     setActionType(type)
//     setIsModalOpen(true)
//   }

//   const handleConfirm = async () => {
//     if (!selectedReview) return

//     setIsSubmitting(true)
//     try {
//       const res = await fetch(`/api/reviews/${selectedReview.id}`, {
//         method: 'PATCH',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           approved: actionType === 'approve',
//         }),
//       })

//       if (!res.ok) throw new Error('Failed to update review.')

//       toast.success(`Review ${actionType === 'approve' ? 'approved' : 'rejected'} successfully`)
//     } catch (err) {
//       toast.error('Error updating review')
//     } finally {
//       setIsSubmitting(false)
//       setIsModalOpen(false)
//     }
//   }

//   if (!isLoaded || !user) return <div className="text-center py-6 text-gray-500">Loading user...</div>
//   if (loading) return <div className="text-center py-6 text-blue-500">Loading reviews...</div>
//   if (error) return <div className="text-center py-6 text-red-500">{error}</div>
//   if (!Array.isArray(filteredReviews)) return <div>No reviews found.</div>

//   return (
//     <div className="w-full max-w-3xl mx-auto">
//       <h2 className="text-2xl font-semibold text-primary mb-4">Investor Reviews</h2>

//       {role === 'admin' && (
//         <div className="mb-4 flex gap-2">
//           <Button variant={filter === 'All' ? 'default' : 'outline'} onClick={() => setFilter('All')}>
//             All
//           </Button>
//           <Button variant={filter === 'Approved' ? 'default' : 'outline'} onClick={() => setFilter('Approved')}>
//             Approved
//           </Button>
//           <Button variant={filter === 'Rejected' ? 'default' : 'outline'} onClick={() => setFilter('Rejected')}>
//             Rejected
//           </Button>
//         </div>
//       )}

//       {filteredReviews.length === 0 ? (
//         <div className="text-gray-400 text-center py-4">No reviews match this filter.</div>
//       ) : (
//         <div className="space-y-4">
//           {filteredReviews.map((review) => (
//             <div
//               key={review.id}
//               className="bg-white rounded-xl shadow border p-4 flex justify-between items-start"
//             >
//               <div>
//                 <div className="flex justify-between items-center mb-2">
//                   <p className="text-sm text-gray-700 font-medium">
//                     Reviewer: <span className="font-semibold">{user.fullName || 'Anonymous'}</span>
//                   </p>
//                   <div className="flex gap-1 text-yellow-400 text-sm">
//                     {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
//                   </div>
//                 </div>
//                 <p className="text-gray-600">{review.content}</p>
//                 <p className="text-xs text-gray-400 mt-2">
//                   {new Date(review.createdAt).toLocaleDateString()}
//                 </p>
//               </div>

//               {role === 'admin' && (
//                 <div className="flex flex-col gap-2 ml-4">
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     onClick={() => openConfirmation(review, 'approve')}
//                     disabled={review.approved === true}
//                   >
//                     Approve
//                   </Button>
//                   <Button
//                     variant="destructive"
//                     size="sm"
//                     onClick={() => openConfirmation(review, 'reject')}
//                     disabled={review.approved === false}
//                   >
//                     Reject
//                   </Button>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Confirmation Modal */}
//       <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>
//               {actionType === 'approve' ? 'Approve this review?' : 'Reject this review?'}
//             </DialogTitle>
//           </DialogHeader>
//           <p className="text-gray-600 my-4">This action will immediately change the visibility of the review.</p>
//           <DialogFooter>
//             <Button variant="outline" onClick={() => setIsModalOpen(false)} disabled={isSubmitting}>
//               Cancel
//             </Button>
//             <Button onClick={handleConfirm} disabled={isSubmitting}>
//               {isSubmitting ? 'Processing...' : 'Confirm'}
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   )
// }

// export default ReviewList



//improved Ux of button and also conditional  redering on the investor side


'use client'

import { useUser } from '@clerk/nextjs'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from '@/components/ui/dialog'
import { toast } from 'sonner'
import { Check, X } from 'lucide-react'
import { Loader2 } from 'lucide-react'

function ReviewList({ reviews = [], loading, error }) {
  const { user, isLoaded } = useUser()
  const [filteredReviews, setFilteredReviews] = useState([])
  const [filter, setFilter] = useState('All')
  const [selectedReview, setSelectedReview] = useState(null)
  const [actionType, setActionType] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const role = user?.publicMetadata?.role || 'user'

  // Auto-filter for investors
  useEffect(() => {
    if (!Array.isArray(reviews)) return

    if (role !== 'admin') {
      setFilteredReviews(reviews.filter((r) => r.approved === true))
    } else {
      if (filter === 'All') {
        setFilteredReviews(reviews)
      } else if (filter === 'Approved') {
        setFilteredReviews(reviews.filter((r) => r.approved === true))
      } else if (filter === 'Rejected') {
        setFilteredReviews(reviews.filter((r) => r.approved === false))
      }
    }
  }, [filter, reviews, role])

  const openConfirmation = (review, type) => {
    setSelectedReview(review)
    setActionType(type)
    setIsModalOpen(true)
  }

  const handleConfirm = async () => {
    if (!selectedReview) return

    setIsSubmitting(true)
    try {
      const res = await fetch(`/api/reviews/${selectedReview.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          approved: actionType === 'approve',
        }),
      })

      if (!res.ok) throw new Error('Failed to update review.')

      toast.success(`Review ${actionType === 'approve' ? 'approved' : 'rejected'} successfully`)
    } catch (err) {
      toast.error('Error updating review')
    } finally {
      setIsSubmitting(false)
      setIsModalOpen(false)
    }
  }

  if (!isLoaded || !user) return <div className="text-center py-6 text-gray-500">Loading user...</div>
  if (loading) return <div className="text-center py-6 text-blue-500">Loading reviews...</div>
  if (error) return <div className="text-center py-6 text-red-500">{error}</div>
  if (!Array.isArray(filteredReviews)) return <div>No reviews found.</div>

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-primary mb-4">Investor Reviews</h2>

      {role === 'admin' && (
        <div className="mb-4 flex gap-2">
          {['All', 'Approved', 'Rejected'].map((f) => (
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
        <div className="space-y-4">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl shadow border p-4 flex justify-between items-start"
            >
              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm text-gray-700 font-medium">
                    Reviewer:{' '}
                    <span className="font-semibold">
                      {review?.userName || 'Anonymous'}
                    </span>
                  </p>
                  <div className="flex gap-1 text-yellow-400 text-sm">
                    {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                  </div>
                </div>
                <p className="text-gray-600">{review.content}</p>
                <p className="text-xs text-gray-400 mt-2">
                  {new Date(review.createdAt).toLocaleDateString()}
                </p>
              </div>

              {role === 'admin' && (
                <div className="flex flex-col gap-2 ml-4">
                  <Button
                    variant="success"
                    size="icon"
                    title="Approve"
                    className="bg-green-100 hover:bg-green-200 text-green-700"
                    onClick={() => openConfirmation(review, 'approve')}
                    disabled={review.approved === true}
                  >
                    <Check className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="icon"
                    title="Reject"
                    onClick={() => openConfirmation(review, 'reject')}
                    disabled={review.approved === false}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Confirmation Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-lg">
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




