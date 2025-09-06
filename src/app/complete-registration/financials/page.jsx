import React from 'react'
import FinancialRecordForm from '../_components/AddFinancial'

async function Finacials() {
      const params = await searchParams   
    const businessId = params.businessId
    if (!businessId) {
    return <div>Loading.......for business</div>
  }
  return (
    
    <div>
      <FinancialRecordForm businessId={businessId}/>
    </div>
   
  )
}

export default Finacials
