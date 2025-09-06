
import React from 'react'
import ContactInfoPage from '../_components/StepContact'
// import {  useSearchParams } from "next/navigation"

async function ContactDetails({searchParams}) {

     const params = await searchParams   
    const businessId = params.businessId
    if (!businessId) {
    return <div>Loading.......for contact details</div>
  }
  return (
    
    <div>
      <ContactInfoPage businessId={businessId}/>
    </div>
    
  )
}

export default ContactDetails
