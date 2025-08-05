// "use client";

// import { useUser } from '@clerk/nextjs';
// import React, { useEffect, useState, useRef } from 'react'
// import axios from 'axios';


// function Onboarding() {

//     const [loading, setLoading] = useState(true);
//       const hasSubmittedRef = useRef(false) 

//     const {user, isLoaded} = useUser();





   

//     useEffect(()=>{

//          if (!isLoaded || !user) return
//          if (hasSubmittedRef.current) return
//         const data = {
//       clerkId: user.id,
//       name: user.fullName || '',
//       email: user.emailAddresses?.[0]?.emailAddress || '',
//     }

//         const onboardingComplete=async ()=>{
//            try {
//              const response= await axios.post('/api/onboarding', data)
//              if(response.status===201){
//                 hasSubmittedRef.current = true
//                 console.log('Onboarding completed successfully:', response.data);
//                 setLoading(false)
//              }

//            } catch (error) {
//              console.error('Error completing onboarding:', error);
//             setLoading(false)
//            }

//         }

//         onboardingComplete()

//     },[isLoaded ,user])

//       if (!isLoaded) return <div>Loading user...</div>
//   if (!user) return <div>No user found.</div>




//   return (
//     <div>
//       {loading ? (<div>
//         <div>Your account is setting up</div>
//         <div><span className="loading loading-ring loading-xl"></span></div>
//         </div>):(<div>successful account setup</div>) }
//     </div>
//   )
// }

// export default Onboarding



//new code

'use client'

import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import ProgressBar from '@/components/ProgressBar'

import { useRouter } from 'next/navigation'



export default function Onboarding() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState('')
  const hasSubmittedRef = useRef(false)
  const { user, isLoaded } = useUser()

  const router = useRouter()

  useEffect(() => {
    if (!isLoaded || !user) return
    if (hasSubmittedRef.current) return

    const data = {
      clerkId: user.id,
      name: user.fullName || '',
      email: user.emailAddresses?.[0]?.emailAddress || '',
    }

    const onboardingComplete = async () => {
      try {
        // simulate staged progress
        setProgress(20)
        const response = await axios.post('/api/onboarding', data)
        setProgress(60)
        if (response.status === 201) {
          hasSubmittedRef.current = true
          setProgress(100)
          setTimeout(() => {
            setLoading(false)
          }, 400)
          router.push('/')

        } else {
          throw new Error('Unexpected status')
        }
      } catch (err) {
        console.error('Error completing onboarding:', err)
        setError('Something went wrong during setup.')
        setProgress(100)
        setLoading(false)
      }
    }

    onboardingComplete()
  }, [isLoaded, user])

  if (!isLoaded)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="text-center">
          <div className="loader mb-4" />
          <p className="text-gray-700">Loading user...</p>
        </div>
      </div>
    )
  if (!user)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="bg-white p-8 rounded-2xl shadow-md max-w-sm text-center">
          <p className="text-red-600 font-semibold">No user found.</p>
        </div>
      </div>
    )

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-100 px-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="p-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#6366F1] to-[#A78BFA] rounded-full mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-1">You're almost there!</h2>
            <p className="text-sm text-gray-500">
              Setting up your account. Please wait a moment.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between mb-1">
              <div className="text-sm font-medium">Progress</div>
              <div className="text-sm font-semibold">{progress}%</div>
            </div>
            <ProgressBar progress={progress} />

            {error && (
              <div className="mt-4 bg-red-50 border border-red-200 text-red-700 p-3 rounded-md text-sm">
                {error}
              </div>
            )}

            {!loading && !error && (
              <div className="mt-6 bg-green-100 border border-green-200 text-green-800 p-3 rounded-md flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <div className="font-semibold">Setup Complete</div>
                  <div className="text-xs">Redirecting shortly...</div>
                </div>
              </div>
            )}

            {loading && (
              <div className="mt-6 flex justify-center">
                <div className="animate-pulse flex flex-col items-center gap-2">
                  <div className="h-2 w-32 bg-gray-200 rounded-full" />
                  <div className="h-2 w-20 bg-gray-200 rounded-full" />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="bg-gray-50 px-8 py-4 text-center text-xs text-gray-500">
          This might take a few seconds. Do not refresh the page.
        </div>
      </div>
    </div>
  )
}

