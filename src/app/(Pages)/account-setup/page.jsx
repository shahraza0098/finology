// src/app/onboarding/page.tsx

'use client'

import { useUser } from '@clerk/nextjs'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

export default function OnboardingPage() {
  const { user, isLoaded } = useUser()
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (isLoaded && user) {
      const assignRole = async () => {
        try {
            console.log('user object hahah', user);
            
          await axios.post('/api/set-role', { userId: user.id })
          
          
          const role = user.publicMetadata?.role || 'customer'

          if (role === 'admin') {
            router.push('/admin/dashboard')
          } else {
            router.push('user/dashboard')
          }
        } catch (err) {
          console.error('Error setting role:', err)
        } finally {
          setLoading(false)
        }
      }

      assignRole()
    }
  }, [isLoaded, user, router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg">Setting up your account...</p>
    </div>
  )
}
