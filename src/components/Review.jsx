'use client'

import React, { useState } from 'react'
import axios from 'axios'
import { useUser } from '@clerk/nextjs'
import { Star } from 'lucide-react'

export default function ReviewForm({ businessId, onSubmitted }) {
  const { user, isLoaded } = useUser()
  const [content, setContent] = useState('')
  const [rating, setRating] = useState(0)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!isLoaded || !user) {
      setError('User not loaded')
      return
    }

    console.log("Hey! user", user.id);
    
    if (rating < 1 || rating > 5) {
      setError('Rating must be 1 to 5')
      return
    }
    if (!content.trim()) {
      setError('Review content cannot be empty')
      return
    }
    setSubmitting(true)
    setError(null)
    try {
      const payload = {
        businessId,
        clerkId: user.id, // redundant if investorId maps to clerkId, but included per schema
        content: content.trim(),
        rating,
      }
      const res = await axios.post('/api/reviews', payload)
      if (res.status === 201) {
        setSuccess(true)
        setContent('')
        setRating(0)
        onSubmitted && onSubmitted(res.data)
      } else {
        setError('Failed to submit review')
      }
    } catch (err) {
      console.error(err)
      setError('Submission error')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="max-w-lg bg-white rounded-xl shadow p-6 space-y-4">
      <h3 className="text-lg font-semibold">Write a Review</h3>

      <div className="flex items-center gap-2">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => setRating(n)}
            aria-label={`${n} star`}
            className="p-1"
          >
            <Star
              size={24}
              className={`transition-colors ${
                n <= rating ? 'text-yellow-400' : 'text-gray-300'
              }`}
              fill={n <= rating ? 'currentColor' : 'none'}
              strokeWidth={1.5}
            />
          </button>
        ))}
        <div className="ml-2 text-sm text-gray-600">{rating} / 5</div>
      </div>

      <textarea
        className="w-full border rounded-md p-3 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
        rows={4}
        placeholder="Share your experience..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        disabled={submitting}
      />

      {error && <div className="text-sm text-red-600">{error}</div>}
      {success && (
        <div className="text-sm text-green-600">Review submitted!</div>
      )}

      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          disabled={submitting}
          className="bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 disabled:opacity-50"
        >
          {submitting ? 'Submitting...' : 'Submit Review'}
        </button>
      </div>
    </div>
  )
}
