"use client"

import React, { useState, useEffect } from 'react'
import BusinessInfo from './_components/BusinessInfo';
import ReviewForm from '@/components/Review';
import ReviewList from '@/components/ReviewList';
import { useUser } from '@clerk/nextjs'
import axios from 'axios'



 function BusinessListing({params}) {


    const { id } = React.use(params)

    const [business, setBusiness] = useState(null)
    const [review, setReview]= useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
        const { user, isLoaded } = useUser();

        
      
       // const userRole=user?.publicMetadata?.role
      
    
      useEffect(() => {
        if (!id) return
          
    
        const fetchBusiness = async () => {
          setLoading(true)
          setError(null)
          try {
            const response = await axios.get(`/api/admin/business/${id}`)
            console.log(response);
            
            if (response.status === 200) {

              setBusiness(response.data.soloBusiness)
              setReview(response.data.reviews)
            } else {
              setError('Failed to load business.')
            }
          } catch (err) {
            console.error('Error fetching business:', err)
            setError('Error fetching business data.')
          } finally {
            setLoading(false)
          }
        }
    
        fetchBusiness()
      }, [id])
    // console.log("params",params.id);

    if (!user || !isLoaded) {
          return <div>Loading so Hard........</div>
          
        }
     
  return (
     <div className='flex flex-col gap-4'>
      <div >
        <div>
          <BusinessInfo 
          business={business} 
          loading={loading}
          error={error}
          />
        </div>
        <div>
          {/* issue new share component */}
          <p>new share issue</p>
        </div>
      </div>
      <div>
        <div>
          <ReviewList
          reviews={review}
          loading={loading}
          error={error}
          />
        </div>
        <div>
          <ReviewForm 
          businessId={id}
          
        />
        </div>
        
      </div>
    </div>
  )
}

export default BusinessListing


//new code