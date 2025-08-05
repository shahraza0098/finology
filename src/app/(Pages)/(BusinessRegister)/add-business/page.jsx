import React from 'react'
import Link from 'next/link'

function AddBusiness() {
  return (
    <div >
      <div>
        <h3>Start Listing Businesses</h3>
        <Link href="/add-business/business-info">Get Started</Link>
      </div>
    </div>
  )
}

export default AddBusiness
