import React from 'react'
import FinancialRecordForm from '../_components/AddFinancial'

async function Finacials() {
      const params = await searchParams   
    const businessId = params.businessId
  return (
    
    <div>
      <FinancialRecordForm businessId={businessId}/>
    </div>
   
  )
}

export default Finacials
