// "use client"

// import React, { useState, useEffect } from 'react'
// import BusinessInfo from './_components/BusinessInfo';
// import ReviewForm from '@/components/Review';
// import ReviewList from '@/components/ReviewList';
// import { useUser } from '@clerk/nextjs'
// import axios from 'axios'
// import NewShareIssue from './_components/NewShareIssue';



//  function BusinessListing({params}) {


//     const { id } = React.use(params)

//     const [business, setBusiness] = useState(null)
//     const [review, setReview]= useState(null)
//     const [loading, setLoading] = useState(true)
//     const [error, setError] = useState(null)
    
//         const { user, isLoaded } = useUser();

        
      
//        // const userRole=user?.publicMetadata?.role
      
    
//       useEffect(() => {
//         if (!id) return
          
    
//         const fetchBusiness = async () => {
//           setLoading(true)
//           setError(null)
//           try {
//             const response = await axios.get(`/api/admin/business/${id}`)
//             console.log(response);
            
//             if (response.status === 200) {

//               setBusiness(response.data.soloBusiness)
//               setReview(response.data.reviews)
//             } else {
//               setError('Failed to load business.')
//             }
//           } catch (err) {
//             console.error('Error fetching business:', err)
//             setError('Error fetching business data.')
//           } finally {
//             setLoading(false)
//           }
//         }
    
//         fetchBusiness()
//       }, [id])
//     // console.log("params",params.id);

//     if (!user || !isLoaded) {
//           return <div>Loading so Hard........</div>
          
//         }
     
//   return (
//      <div className='flex flex-col gap-4'>
//       <div >
//         <div>
//           <BusinessInfo 
//           business={business} 
//           loading={loading}
//           error={error}
//           />
//         </div>
//         <div>
//           {/* issue new share component */}
//           <NewShareIssue/>
//         </div>
//       </div>
//       <div>
//         <div>
//           <ReviewList
//           reviews={review}
//           loading={loading}
//           error={error}
//           />
//         </div>
//         <div>
//           <ReviewForm 
//           businessId={id}
          
//         />
//         </div>
        
//       </div>
//     </div>
//   )
// }

// export default BusinessListing


// //new code



// "use client"

// import React, { useState, useEffect } from "react"
// import BusinessInfo from "./_components/BusinessInfo"
// import ReviewForm from "@/components/Review"
// import ReviewList from "@/components/ReviewList"
// import { useUser } from "@clerk/nextjs"
// import axios from "axios"
// import NewShareIssue from "./_components/NewShareIssue"
// import { Button } from "@/components/ui/button"
// import Link  from "next/link"

// function BusinessListing({ params }) {
//   const { id } = React.use(params)
//   const [business, setBusiness] = useState(null)
//   const [review, setReview] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)

//   const { user, isLoaded } = useUser()

//   useEffect(() => {
//     if (!id) return

//     const fetchBusiness = async () => {
//       setLoading(true)
//       setError(null)
//       try {
//         const response = await axios.get(`/api/admin/business/${id}`)
//         if (response.status === 200) {
//           console.log("complete respond checking",response);
          
//           setBusiness(response.data.soloBusiness)
//           setReview(response.data.reviews)
//         } else {
//           setError("Failed to load business.")
//         }
//       } catch (err) {
//         console.error("Error fetching business:", err)
//         setError("Error fetching business data.")
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchBusiness()
//   }, [id])

//   if (!user || !isLoaded) {
//     return <div>Loading so Hard........</div>
//   }

//   // return (
//   //   <div className="p-6 m-6 space-y-6">
//   //     {/* Top section: Business Info + Share Issue */}
//   //     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//   //       <div className="bg-white rounded-2xl shadow p-6">
//   //         <BusinessInfo business={business} loading={loading} error={error} />
//   //       </div>

//   //       <div className="bg-white rounded-2xl shadow p-6">
//   //         <NewShareIssue businessId={id} />
//   //       </div>
//   //     </div>

//   //     {/* Bottom section: Review List + Review Form */}
//   //     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//   //       <div className="bg-white rounded-2xl shadow p-6">
//   //         <ReviewList reviews={review} loading={loading} error={error} />
//   //       </div>

//   //       <div className="bg-white rounded-2xl shadow p-6">
//   //         <ReviewForm businessId={id} />
//   //       </div>
//   //     </div>
//   //   </div>
//   // )
//   return (
//   <div className="space-y-6  ">
//     {/* Top section: Business Info + Share Issue */}
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//       <div className="bg-white rounded-2xl shadow p-6">
//         <BusinessInfo business={business} loading={loading} error={error} />
//       </div>

//       <div className="bg-white rounded-2xl shadow p-6">
//         <NewShareIssue businessId={id} />
//       </div>
//     </div>

//     {/* Bottom section: Review List + Review Form */}
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//       <div className="bg-white rounded-2xl shadow p-6">
//         <ReviewList reviews={review} loading={loading} error={error} />
//       </div>

//       <div className="bg-white rounded-2xl shadow p-6">
//         <ReviewForm businessId={id} />
//       </div>
//     </div>
    
      
// {!business?.isFormCompleted && (
//   <div className="sticky bottom-0 left-0 w-full bg-red-500 text-white py-2 overflow-hidden cursor-pointer">
//     <Link 
//       href={`/complete-registration?businessId=${id}`} 
//       className="block whitespace-nowrap animate-marquee"
//     >
//       Profile is incomplete. Please complete registration →
//     </Link>
//   </div>
// )}
    
    
//   </div>
// )

// }

// export default BusinessListing




"use client";

import React, { useState, useEffect } from "react";
import BusinessInfo from "./_components/BusinessInfo";
import ReviewForm from "@/components/Review";
import ReviewList from "@/components/ReviewList";
import NewShareIssue from "./_components/NewShareIssue";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import Link from "next/link";
import { Loader2 } from "lucide-react";

export default function BusinessListing({ params }) {
  const { id } = React.use(params);
  const [business, setBusiness] = useState(null);
  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (!id) return;

    const fetchBusiness = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`/api/admin/business/${id}`);
        if (response.status === 200) {
          setBusiness(response.data.soloBusiness);
          setReview(response.data.reviews);
        } else {
          setError("Failed to load business.");
        }
      } catch (err) {
        console.error("Error fetching business:", err);
        setError("Error fetching business data.");
      } finally {
        setLoading(false);
      }
    };

    fetchBusiness();
  }, [id]);

  if (!user || !isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-600">
        <Loader2 className="h-6 w-6 animate-spin text-blue-500 mr-2" />
        Loading user...
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-600">
        <Loader2 className="h-6 w-6 animate-spin text-blue-500 mr-2" />
        Loading business details...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-10 px-4 md:px-10 space-y-8">
      {/* Business Info */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
        <BusinessInfo business={business} loading={loading} error={error} />
      </div>

      {/* New Share Issue */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
          New Share Issue
        </h2>
        <NewShareIssue businessId={id} />
      </div>

      {/* Reviews Section */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
          Customer Reviews
        </h2>
        <ReviewList reviews={review} loading={loading} error={error} />
      </div>

      {/* Add Review Form */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
          Leave a Review
        </h2>
        <ReviewForm businessId={id} />
      </div>

      {/* Incomplete Profile Banner */}
      {!business?.isFormCompleted && (
        <div className="sticky bottom-0 left-0 w-full bg-gradient-to-r from-red-500 to-rose-600 text-white py-3 text-center shadow-md animate-pulse">
          <Link
            href={`/complete-registration?businessId=${id}`}
            className="font-medium hover:underline"
          >
            ⚠️ Your profile is incomplete. Click here to complete registration →
          </Link>
        </div>
      )}
    </div>
  );
}
