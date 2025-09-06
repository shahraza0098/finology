import React from 'react'
import { Suspense } from 'react'
function AddProducts() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div>
      <h1>add products</h1>
    </div>
    </Suspense>
  )
}

export default AddProducts
