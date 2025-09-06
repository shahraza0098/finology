// 'use client'

// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import { useUser } from "@clerk/nextjs";

// export default function BusinessInfo({ business, loading, error }) {
//   //const [business, setBusiness] = useState(null)
//   // const [loading, setLoading] = useState(true)
//   // const [error, setError] = useState(null)

//   console.log("business prop:", business);
  
//     const { user } = useUser();
  
//     const userRole=user?.publicMetadata?.role
  

//   // useEffect(() => {
//   //   if (!business_id) return

//   //   const fetchBusiness = async () => {
//   //     setLoading(true)
//   //     setError(null)
//   //     try {
//   //       const response = await axios.get(`/api/admin/business/${business_id}`)
//   //       if (response.status === 200) {
//   //         setBusiness(response.data)
//   //       } else {
//   //         setError('Failed to load business.')
//   //       }
//   //     } catch (err) {
//   //       console.error('Error fetching business:', err)
//   //       setError('Error fetching business data.')
//   //     } finally {
//   //       setLoading(false)
//   //     }
//   //   }

//   //   fetchBusiness()
//   // }, [business_id])

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       {loading ? (
//         <div className="flex items-center justify-center py-20">
//           <div className="animate-spin rounded-full h-12 w-12 border-4 border-t-[#5e548e] border-gray-300"></div>
//           <span className="ml-4 text-gray-600">Loading business...</span>
//         </div>
//       ) : error ? (
//         <div className="bg-red-100 text-red-800 p-4 rounded-md">
//           <p className="font-medium">Error:</p>
//           <p>{error}</p>
//         </div>
//       ) : !business ? (
//         <div className="bg-yellow-100 text-yellow-800 p-4 rounded-md">
//           <p>Business not found.</p>
//         </div>
//       ) : (
//         <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
//           <div className="bg-gradient-to-r from-[#5e548e] to-[#9f86c0] text-white px-6 py-5 flex justify-between items-center">
//             <div>
//               <h1 className="text-2xl font-bold">{business.name}</h1>
//               {business.sector && (
//                 <p className="text-sm mt-1">{business.sector}</p>
//               )}
//             </div>
//             <div className="text-right">
//               <p className="text-xs uppercase tracking-wide">Created</p>
//               <p className="font-medium">
//                 {new Date(business.createdAt).toLocaleDateString()}
//               </p>
//             </div>
//           </div>
//           {/* middle div */}
//           <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Left column */}
//             <div className="space-y-6">
//               <section className="bg-gray-50 rounded-lg p-4">
//                 <h2 className="text-lg font-semibold mb-2">Overview</h2>
//                 <p className="text-sm text-gray-700">
//                   {business.description || 'No description provided.'}
//                 </p>
//               </section>

//               <section className="bg-gray-50 rounded-lg p-4">
//                 <h2 className="text-lg font-semibold mb-2">
//                   Key Details
//                 </h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div>
//                     <p className="text-xs uppercase text-gray-500">
//                       Total Shares
//                     </p>
//                     <p className="font-medium">{business.totalShares}</p>
//                   </div>
//                   <div>
//                     <p className="text-xs uppercase text-gray-500">
//                       Share Price
//                     </p>
//                     <p className="font-medium">
//                       ${business.sharePrice?.toFixed(2)}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-xs uppercase text-gray-500">
//                       Location
//                     </p>
//                     <p className="font-medium">
//                       {business.location || '—'}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-xs uppercase text-gray-500">
//                       Image URL
//                     </p>
//                     <p className="font-medium break-all">
//                       {business.imageUrl || '—'}
//                     </p>
//                   </div>
//                 </div>
//               </section>
//             </div>

//             {/* Right column */}
//             <div className="space-y-6">
//               <section className="bg-gray-50 rounded-lg p-4">
//                 <h2 className="text-lg font-semibold mb-2">Contact & Registration</h2>
//                 <div className="grid grid-cols-1 gap-4">
//                   <div>
//                     <p className="text-xs uppercase text-gray-500">Business Name</p>
//                     <p className="font-medium">{business.name}</p>
//                   </div>
//                   <div>
//                     <p className="text-xs uppercase text-gray-500">Registration No</p>
//                     <p className="font-medium">TRN-7050ER</p>
//                   </div>
//                   <div>
//                     <p className="text-xs uppercase text-gray-500">Contact Email</p>
//                     <p className="font-medium">{business.ownerEmail || 'shahraza7867@gmail.com'}</p>
//                   </div>
//                 </div>
//               </section>

//               {/* button section */}
//               { userRole === 'admin' && (<section className="bg-gray-50 rounded-lg p-4">
//                 <h2 className="text-lg font-semibold mb-2">Actions</h2>
//                 <div className="flex flex-col sm:flex-row gap-3">
//                   <button className="flex-1 bg-[#5e548e] text-white py-2 rounded-lg hover:opacity-90">
//                     Edit Business
//                   </button>
//                   <button className="flex-1 border border-[#9f86c0] text-[#9f86c0] py-2 rounded-lg hover:bg-[#f3f0fa]">
//                     View Transactions
//                   </button>
//                 </div>
//               </section>)}
//             </div>
//           </div>

//           {/* Footer info */}
//           <div className="border-t px-6 py-4 bg-gray-100 flex flex-col md:flex-row gap-6">
//             <div className="flex-1">
//               <p className="text-xs uppercase text-gray-500">Share Price History</p>
//               {/* placeholder */}
//               <div className="mt-2 h-20 bg-white rounded shadow-inner flex items-center justify-center text-sm text-gray-400">
//                 Chart placeholder
//               </div>
//             </div>
//             <div className="flex-1">
//               <p className="text-xs uppercase text-gray-500">Ownership Snapshot</p>
//               <div className="mt-2 h-20 bg-white rounded shadow-inner flex items-center justify-center text-sm text-gray-400">
//                 Ownership breakdown
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }



//new component code for new business model

'use client'

import { useUser } from "@clerk/nextjs";

export default function BusinessInfo({ business, loading, error }) {
  const { user } = useUser();
  const userRole = user?.publicMetadata?.role;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-t-[#5e548e] border-gray-300"></div>
          <span className="ml-4 text-gray-600">Loading business...</span>
        </div>
      ) : error ? (
        <div className="bg-red-100 text-red-800 p-4 rounded-md">
          <p className="font-medium">Error:</p>
          <p>{error}</p>
        </div>
      ) : !business ? (
        <div className="bg-yellow-100 text-yellow-800 p-4 rounded-md">
          <p>Business not found.</p>
        </div>
      ) : (
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#5e548e] to-[#9f86c0] text-white px-6 py-5 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">{business.name}</h1>
              {business.sector && <p className="text-sm mt-1">{business.sector}</p>}
            </div>
            <div className="text-right">
              <p className="text-xs uppercase tracking-wide">Created</p>
              <p className="font-medium">
                {new Date(business.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left column */}
            <div className="space-y-6">
              {/* Overview */}
              <section className="bg-gray-50 rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-2">Overview</h2>
                <p className="text-sm text-gray-700">
                  {business.description || 'No description provided.'}
                </p>
              </section>

              {/* Mission / Vision / Values */}
              <section className="bg-gray-50 rounded-lg p-4 space-y-3">
                {business.mission && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-600">Mission</h3>
                    <p className="text-sm text-gray-700">{business.mission}</p>
                  </div>
                )}
                {business.vision && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-600">Vision</h3>
                    <p className="text-sm text-gray-700">{business.vision}</p>
                  </div>
                )}
                {business.coreValues && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-600">Core Values</h3>
                    <p className="text-sm text-gray-700">{business.coreValues}</p>
                  </div>
                )}
                {business.achievements && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-600">Achievements</h3>
                    <p className="text-sm text-gray-700">{business.achievements}</p>
                  </div>
                )}
              </section>

              {/* Shares Info */}
              <section className="bg-gray-50 rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-2">Shares</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs uppercase text-gray-500">Total Shares</p>
                    <p className="font-medium">{business.totalShares}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase text-gray-500">Share Price</p>
                    <p className="font-medium">${business.sharePrice?.toFixed(2)}</p>
                  </div>
                </div>
              </section>
            </div>

            {/* Right column */}
            <div className="space-y-6">
              {/* Contact & Registration */}
              <section className="bg-gray-50 rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-2">Contact & Registration</h2>
                <div className="grid gap-3">
                  <div>
                    <p className="text-xs uppercase text-gray-500">Registration No</p>
                    <p className="font-medium">{business.registrationNumber || '—'}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase text-gray-500">Tax ID</p>
                    <p className="font-medium">{business.taxId || '—'}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase text-gray-500">Email</p>
                    <p className="font-medium">{business.email || '—'}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase text-gray-500">Phone</p>
                    <p className="font-medium">{business.phone || '—'}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase text-gray-500">Website</p>
                    <p className="font-medium break-all">{business.website || '—'}</p>
                  </div>
                </div>
              </section>

              {/* Address */}
              <section className="bg-gray-50 rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-2">Address</h2>
                <p className="text-sm text-gray-700">
                  {[business.streetLine1, business.streetLine2, business.city, business.state, business.country, business.pincode]
                    .filter(Boolean)
                    .join(', ')}
                </p>
              </section>

              {/* Admin Actions */}
              {userRole === 'admin' && (
                <section className="bg-gray-50 rounded-lg p-4">
                  <h2 className="text-lg font-semibold mb-2">Actions</h2>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 bg-[#5e548e] text-white py-2 rounded-lg hover:opacity-90">
                      Edit Business
                    </button>
                    <button className="flex-1 border border-[#9f86c0] text-[#9f86c0] py-2 rounded-lg hover:bg-[#f3f0fa]">
                      View Transactions
                    </button>
                  </div>
                </section>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t px-6 py-4 bg-gray-100 flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <p className="text-xs uppercase text-gray-500">Share Price History</p>
              <div className="mt-2 h-20 bg-white rounded shadow-inner flex items-center justify-center text-sm text-gray-400">
                Chart placeholder
              </div>
            </div>
            <div className="flex-1">
              <p className="text-xs uppercase text-gray-500">Ownership Snapshot</p>
              <div className="mt-2 h-20 bg-white rounded shadow-inner flex items-center justify-center text-sm text-gray-400">
                Ownership breakdown
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

