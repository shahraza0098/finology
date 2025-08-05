import React from 'react'

function Loading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="animate-pulse bg-gray-200 rounded-lg p-4 mb-4">
            
            <div className="skeleton bg-gray-500 h-40 w-40"></div>
        </div>
        ))}

    </div>

  )
}

export default Loading
