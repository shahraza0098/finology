import React, { Suspense } from 'react'
import FinancialRecordForm from '../_components/AddFinancial'

function Finacials() {
  return (
    <Suspense fallback={<div>Loading staff...</div>}>
    <div>
      <FinancialRecordForm/>
    </div>
    </Suspense>
  )
}

export default Finacials
