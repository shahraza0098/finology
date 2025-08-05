"use client"

import ProgressBar from '@/components/ProgressBar'
import { useState, useEffect } from 'react'

export default function OnboardingProgressExample() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval)
          return 100
        }
        return p + 5
      })
    }, 300)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="max-w-md mx-auto p-6 space-y-3">
      <div className="text-sm font-medium">Setting up your account...</div>
      <ProgressBar progress={progress} striped animated showLabel />
    </div>
  )
}
