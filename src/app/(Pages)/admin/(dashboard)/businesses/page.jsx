// 'use client'

// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import { Button } from '@/components/UI/button'
// import { Card, CardContent } from '@/components/UI/card'
// // import { Badge } from '@/components/ui/badge'
// import { useRouter } from 'next/navigation'
// import Loading from './_components/loading'

// export default function AdminBusinessesPage() {
//   const [businesses, setBusinesses] = useState([])
//   const [loading, setLoading] = useState(true)

//   const router = useRouter()

//   useEffect(() => {
//     const fetchBusinesses = async () => {
//       try {
//         const res = await axios.get('/api/admin/business/listbusiness',{
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         })
//         if(res.status === 200) {
//           setLoading(false)
//         }
//         setBusinesses(res.data)
//       } catch (error) {
//         console.error('Error fetching businesses:', error)
//       }
//     }

//     fetchBusinesses()
//   }, [])

//   if (loading) {
//     return <Loading/>
//   }

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6">All Businesses</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {businesses.map((biz) => (
//           <Card key={biz.id} className="shadow-lg">
//             <CardContent className="p-4 space-y-3">
//               <div className="flex justify-between items-center">
//                 <h2 className="text-lg font-semibold">{biz.name}</h2>
//                 {/* <Badge variant={biz.status === 'active' ? 'success' : 'secondary'}>
//                   {biz.status.charAt(0).toUpperCase() + biz.status.slice(1)}
//                 </Badge> */}
//               </div>
//               <p className="text-sm text-muted-foreground">{biz.category}</p>
//               <p className="text-sm text-muted-foreground">📅 {new Date(biz.createdAt).toLocaleDateString()}</p>
//               <p className="text-sm text-muted-foreground">📧 {biz.email}</p>
//               <div className="flex gap-2 mt-4">
//                 <Button size="sm" variant="outline" onClick={() => router.push(`/admin/businesses/${biz.id}`)}>
//                   View
//                 </Button>
//                 <Button size="sm">Edit</Button>
//                 <Button size="sm" variant="destructive">Delete</Button>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   )
// }




// 'use client'

// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import { Button } from '@/components/ui/button'
// import {
//   Card,
//   CardBody,
//   CardFooter,
//   Typography,
// } from "@material-tailwind/react"
// import { useRouter } from 'next/navigation'
// import Loading from './_components/loading'

// export default function AdminBusinessesPage() {
//   const [businesses, setBusinesses] = useState([])
//   const [loading, setLoading] = useState(true)

//   const router = useRouter()

//   useEffect(() => {
//     const fetchBusinesses = async () => {
//       try {
//         const res = await axios.get('/api/admin/business/listbusiness', {
//           headers: { 'Content-Type': 'application/json' },
//         })
//         if (res.status === 200) {
//           setBusinesses(res.data)
//           setLoading(false)
//         }
//       } catch (error) {
//         console.error('Error fetching businesses:', error)
//       }
//     }

//     fetchBusinesses()
//   }, [])

//   if (loading) return <Loading />

//   return (
//     <div className="p-6" >
//       <h1 className="text-2xl font-bold mb-6">All Businesses</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
//         {businesses.map((biz) => (
//           <Card key={biz.id} className="mt-6 w-96 shadow-lg bg-[#8DD8FF]">
//             <CardBody>
//               {/* Logo or fallback icon */}
//               {biz.logo ? (
//                 <img
//                   src={biz.logo}
//                   alt={`${biz.name} Logo`}
//                   className="mb-4 h-16 w-16 object-cover rounded-full shadow"
//                 />
//               ) : (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className="mb-4 h-12 w-12 text-gray-900"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               )}

//               <Typography variant="h5" color="blue-gray" className="mb-2">
//                 {biz.name}
//               </Typography>
//               <Typography className="text-sm text-gray-600">
//                 {biz.category}
//               </Typography>
//               <Typography className="text-sm text-gray-600">
//                 📅 {new Date(biz.createdAt).toLocaleDateString()}
//               </Typography>
//               <Typography className="text-sm text-gray-600">
//                 📧 {biz.email}
//               </Typography>
//             </CardBody>

//             <CardFooter className="pt-0 flex gap-2">
//               <Button
//                 size="sm"
//                 variant="outline"
//                 onClick={() => router.push(`/admin/businesses/${biz.id}`)}
//               >
//                 View
//               </Button>
//               <Button size="sm">Edit</Button>
//               <Button size="sm" variant="destructive">
//                 Delete
//               </Button>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//     </div>
//   )
// }




'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Loading from './_components/loading';
import Image from 'next/image';
import { Loader2 } from 'lucide-react';

export default function AdminBusinessesPage() {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const res = await axios.get('/api/admin/business/listbusiness');
        if (res.status === 200) {
          setBusinesses(res.data);
        }
      } catch (error) {
        console.error('Error fetching businesses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBusinesses();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <Loader2 className="h-6 w-6 animate-spin text-indigo-600" />
      </div>
    );

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-10 tracking-tight">
          All Registered Businesses
        </h1>

        {businesses.length === 0 ? (
          <p className="text-gray-500 text-center text-lg">
            No businesses available right now.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {businesses.map((biz) => (
              <div
                key={biz.id}
                className="group relative bg-white/70 backdrop-blur-md border border-gray-100 
                  rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 
                  transition-all duration-300"
              >
                {/* Decorative gradient glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200/40 to-indigo-100/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="h-14 w-14 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
                      {biz.logo ? (
                        <Image
                          src={biz.logo}
                          alt={biz.name}
                          width={56}
                          height={56}
                          className="object-contain"
                        />
                      ) : (
                        <span className="text-lg font-semibold text-gray-500">
                          {biz.name.charAt(0)}
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {biz.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {biz.category || 'General'}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1 text-sm text-gray-600">
                    <p>📅 {new Date(biz.createdAt).toLocaleDateString()}</p>
                    {biz.email && <p>📧 {biz.email}</p>}
                  </div>

                  <button
                    onClick={() => router.push(`/admin/businesses/${biz.id}`)}
                    className="mt-6 w-full bg-gradient-to-r from-indigo-500 to-blue-500 
                      text-white font-medium py-2.5 rounded-lg hover:from-indigo-600 hover:to-blue-600 
                      transition-all duration-300"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

