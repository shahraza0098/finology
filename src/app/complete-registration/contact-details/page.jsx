'use client'
import React,{ Suspense }  from 'react'
import ContactInfoPage from '../_components/StepContact'
// import {  useSearchParams } from "next/navigation"

function ContactDetails() {

  // const searchParams = useSearchParams()
  // const businessId = searchParams.get("businessId")
  return (
    <Suspense fallback={<div>Loading staff...</div>}>
    <div>
      <ContactInfoPage/>
    </div>
    </Suspense>
  )
}

export default ContactDetails
