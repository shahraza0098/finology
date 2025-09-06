"use client"
import { useSearchParams } from "next/navigation"

function CompleteRegistration() {

    const searchParams = useSearchParams()
  const businessId = searchParams.get("businessId")
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <h1>hello :{businessId}</h1>
      <div>hello</div>
      <div>hello</div>
    </div>
  )
}

export default CompleteRegistration
