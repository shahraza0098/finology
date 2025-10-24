// // 'use client'

// // import { useForm } from 'react-hook-form'
// // import { nonnegative, z } from 'zod'
// // import { zodResolver } from '@hookform/resolvers/zod'
// // import { useBusinessForm } from '@/context/BusinessFormContext'
// // import { useRouter } from 'next/navigation'
// // import { useState } from 'react'
// // import { Input } from '@/components/UI/input'
// // import { Button } from '@/components/UI/button'
// // import { Label } from '@/components/UI/label'
// // import {
// //   Form,
// //   FormField,
// //   FormItem,
// //   FormLabel,
// //   FormMessage,
// //   FormControl
// // } from '@/components/UI/form'
// // import Link from 'next/link'

// // const schema = z.object({
// //   location: z.string().optional(),
// // })

// // export default function Page() {
// //   const router = useRouter()
// //   const { form, updateForm } = useBusinessForm()
// //   const [showSuccess, setShowSuccess] = useState(false)
// //   const [isLoading, setIsLoading] = useState(false)

// //   const methods = useForm({
// //     resolver: zodResolver(schema),
// //     defaultValues: {
// //       location: form.location || '',
// //     },
// //   })

// //   const onSubmit = async (data) => {
// //     updateForm(data)
// //     const completeData = { ...form, ...data }
// //     setIsLoading(true)

// //     try {
// //       const res = await fetch('/api/registerbusinesses', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify(completeData),

// //       })

// //       setIsLoading(false)
      

// //       if (!res.ok) throw new Error('Failed to submit data')

// //       // Show popup
// //       setShowSuccess(true)

// //       // Redirect after 2 seconds
// //       // setTimeout(() => {
// //       //   setShowSuccess(false)
// //       //   router.push('/')
// //       // }, 2000)
// //     } catch (err) {
// //       console.error('Error:', err)
// //       alert('Submission failed. Please try again.')
// //     }
// //   }

// //   const goBack = () => {
// //     router.back()
// //   }

// //   return (
// //     <>
// //       {/* Form UI */}
// //       <Form {...methods}>
// //         <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6 relative">
// //           <FormField
// //             name="location"
// //             control={methods.control}
// //             render={({ field }) => (
// //               <FormItem>
// //                 <FormLabel>Location (optional)</FormLabel>
// //                 <FormControl><Input {...field} /></FormControl>
// //                 <FormMessage />
// //               </FormItem>
// //             )}
// //           />
// //           {/* //image selection input field */}

// //         <div className="grid w-full max-w-sm items-center gap-3">
// //       <Label htmlFor="picture">Picture</Label>
// //       <Input id="picture" type="file" />
// //     </div>

// //           <div className="flex gap-4">
// //             <Button type="button" onClick={goBack}>Back</Button>
// //             <Button type="submit" >{isLoading?<div className='flex flex-row gap-1.5'><span className="loading loading-spinner"></span>Submitting...</div>:"submit"}</Button>
// //           </div>
// //         </form>
// //       </Form>

// //       {/* ✅ Success Popup */}
// //       {showSuccess && (
// //         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
// //           <div className="bg-white text-black rounded-xl p-8 shadow-xl w-80 text-center space-y-4 animate-in fade-in zoom-in">
// //             <h2 className="text-2xl font-semibold text-green-600">Success!</h2>
// //             <button onClick={()=>setShowSuccess(false) }>close</button>
// //             <p>Your business was listed successfully.</p>
// //             <Link href="/add-business/business-info" className="text-blue-600 hover:underline">
// //               add more
// //             </Link>
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   )
// // }


// //without file upload fucntionality

// 'use client'

// import { useForm } from 'react-hook-form'
// import { z } from 'zod'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { useBusinessForm } from '@/context/BusinessFormContext'
// import { useRouter } from 'next/navigation'
// import { useState } from 'react'
// import { Input } from '@/components/UI/input'
// import { Button } from '@/components/UI/button'
// import {
//   Form,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
//   FormControl
// } from '@/components/UI/form'
// import Link from 'next/link'

// // ✅ Zod validation schema
// const schema = z.object({
//   streetLine1: z.string().optional(),
//   streetLine2: z.string().optional(),
//   city: z.string().optional(),
//   state: z.string().optional(),
//   pincode: z.string().optional(),
//   country: z.string().optional(),
// })

// export default function Page() {
//   const router = useRouter()
//   const { form, updateForm } = useBusinessForm()
//   const [showSuccess, setShowSuccess] = useState(false)
//   const [isLoading, setIsLoading] = useState(false)

//   const methods = useForm({
//     resolver: zodResolver(schema),
//     defaultValues: {
//       streetLine1: form.streetLine1 || '',
//       streetLine2: form.streetLine2 || '',
//       city: form.city || '',
//       state: form.state || '',
//       pincode: form.pincode || '',
//       country: form.country || '',

//     },
//   })

//   const onSubmit = async (data) => {
//     updateForm(data)
//     const completeData = { ...form, ...data }
//     setIsLoading(true)

//     try {
//       const res = await fetch('/api/registerbusinesses', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(completeData),
//       })

//       setIsLoading(false)
//       if (!res.ok) throw new Error('Failed to submit data')

//       setShowSuccess(true)
//     } catch (err) {
//       console.error('Error:', err)
//       alert('Submission failed. Please try again.')
//     }
//   }

//   const goBack = () => {
//     router.back()
//   }

//   return (
//     <>
//       {/* Form UI */}
//       <Form {...methods}>
//         <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6 relative">

//           <FormField name="streetLine1" control={methods.control} render={({ field }) => (
//             <FormItem>
//               <FormLabel>Street Line 1</FormLabel>
//               <FormControl><Input {...field} /></FormControl>
//               <FormMessage />
//             </FormItem>
//           )} />

//           <FormField name="streetLine2" control={methods.control} render={({ field }) => (
//             <FormItem>
//               <FormLabel>Street Line 2</FormLabel>
//               <FormControl><Input {...field} /></FormControl>
//               <FormMessage />
//             </FormItem>
//           )} />

//           <FormField name="city" control={methods.control} render={({ field }) => (
//             <FormItem>
//               <FormLabel>City</FormLabel>
//               <FormControl><Input {...field} /></FormControl>
//               <FormMessage />
//             </FormItem>
//           )} />

//           <FormField name="state" control={methods.control} render={({ field }) => (
//             <FormItem>
//               <FormLabel>State</FormLabel>
//               <FormControl><Input {...field} /></FormControl>
//               <FormMessage />
//             </FormItem>
//           )} />

//           <FormField name="pincode" control={methods.control} render={({ field }) => (
//             <FormItem>
//               <FormLabel>Pincode</FormLabel>
//               <FormControl><Input {...field} /></FormControl>
//               <FormMessage />
//             </FormItem>
//           )} />

//           <FormField name="country" control={methods.control} render={({ field }) => (
//             <FormItem>
//               <FormLabel>Country</FormLabel>
//               <FormControl><Input {...field} /></FormControl>
//               <FormMessage />
//             </FormItem>
//           )} />

//           {/* File upload (optional logo or pic) */}
//           <div className="grid w-full max-w-sm items-center gap-3">
//             <FormLabel htmlFor="picture">Logo Upload</FormLabel>
//             <Input id="picture" type="file" />
//           </div>

//           <div className="flex gap-4">
//             <Button type="button" onClick={goBack}>Back</Button>
//             <Button type="submit">{isLoading ? <div className='flex flex-row gap-1.5'><span className="loading loading-spinner"></span>Submitting...</div> : "Submit"}</Button>
//           </div>
//         </form>
//       </Form>

//       {/* ✅ Success Popup */}
//       {showSuccess && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//           <div className="bg-white text-black rounded-xl p-8 shadow-xl w-80 text-center space-y-4 animate-in fade-in zoom-in">
//             <h2 className="text-2xl font-semibold text-green-600">Success!</h2>
//             <button onClick={() => setShowSuccess(false)}>close</button>
//             <p>Your business was listed successfully.</p>
//             <Link href="/add-business/business-info" className="text-blue-600 hover:underline">
//               Add More
//             </Link>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }


// 'use client'

// import { useForm } from 'react-hook-form'
// import { z } from 'zod'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { useBusinessForm } from '@/context/BusinessFormContext'
// import { useRouter } from 'next/navigation'
// import { useState } from 'react'
// import { Input } from '@/components/ui/input'
// import { Button } from '@/components/ui/button'
// import {
//   Form,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
//   FormControl
// } from '@/components/ui/form'
// import Link from 'next/link'

// // ✅ Zod validation schema
// // const schema = z.object({
// //   streetLine1: z.string().optional(),
// //   streetLine2: z.string().optional(),
// //   city: z.string().optional(),
// //   state: z.string().optional(),
// //   pincode: z.string().optional(),
// //   country: z.string().optional(),
// // })
// const schema = z.object({
//   streetLine1: z.string().optional(),
//   streetLine2: z.string().optional(),
//   city: z.string().optional(),
//   state: z.string().optional(),
//   pincode: z.string().optional(),
//   country: z.string().optional(),
//   logo: z
//     .instanceof(File)
//     .refine((file) => file.size <= 2 * 1024 * 1024, "File size must be <= 2MB")
//     .refine(
//       (file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type),
//       "Only JPG, PNG, or WEBP allowed"
//     )
//     .optional(),
// })


// export default function Page() {
//   const router = useRouter()
//   const { form, updateForm } = useBusinessForm()
//   const [showSuccess, setShowSuccess] = useState(false)
//   const [isLoading, setIsLoading] = useState(false)
//   const [file, setFile] = useState(null) // 👈 track file

//   const methods = useForm({
//     resolver: zodResolver(schema),
//     defaultValues: {
//       streetLine1: form.streetLine1 || '',
//       streetLine2: form.streetLine2 || '',
//       city: form.city || '',
//       state: form.state || '',
//       pincode: form.pincode || '',
//       country: form.country || '',
//     },
//   })

//   const onSubmit = async (data) => {
//     updateForm(data)
//     const completeData = { ...form, ...data }
//     setIsLoading(true)

//     try {
//       const formData = new FormData()

//       // ✅ Append text fields
//       Object.entries(completeData).forEach(([key, value]) => {
//         if (value !== undefined && value !== null) {
//           formData.append(key, value)
//         }
//       })

//       // ✅ Append file if selected
//       if (file) {
//         formData.append('logo', file)
//       }

//       const res = await fetch('/api/registerbusinesses', {
//         method: 'POST',
//         body: formData, // 👈 no JSON, send FormData
//       })

//       setIsLoading(false)
//       if (!res.ok) throw new Error('Failed to submit data')

//       setShowSuccess(true)
//     } catch (err) {
//       console.error('Error:', err)
//       alert('Submission failed. Please try again.')
//       setIsLoading(false)
//     }
//   }

//   const goBack = () => {
//     router.back()
//   }

//   return (
//     <>
//       {/* Form UI */}
//       <Form {...methods}>
//         <form
//           onSubmit={methods.handleSubmit(onSubmit)}
//           className="space-y-6 relative"
//         >
//           <FormField
//             name="streetLine1"
//             control={methods.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Street Line 1</FormLabel>
//                 <FormControl><Input {...field} /></FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             name="streetLine2"
//             control={methods.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Street Line 2</FormLabel>
//                 <FormControl><Input {...field} /></FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             name="city"
//             control={methods.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>City</FormLabel>
//                 <FormControl><Input {...field} /></FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             name="state"
//             control={methods.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>State</FormLabel>
//                 <FormControl><Input {...field} /></FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             name="pincode"
//             control={methods.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Pincode</FormLabel>
//                 <FormControl><Input {...field} /></FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             name="country"
//             control={methods.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Country</FormLabel>
//                 <FormControl><Input {...field} /></FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           {/* File upload (optional logo or pic) */}
//           <div className="grid w-full max-w-sm items-center gap-3">
//             <FormLabel htmlFor="picture">Logo Upload</FormLabel>
//             <Input
//               id="picture"
//               type="file"
//               accept="image/*"
//               onChange={(e) => setFile(e.target.files[0])} // 👈 update state
//             />
//           </div>

//           <div className="flex gap-4">
//             <Button type="button" onClick={goBack}>
//               Back
//             </Button>
//             <Button type="submit">
//               {isLoading ? (
//                 <div className="flex flex-row gap-1.5">
//                   <span className="loading loading-spinner"></span>
//                   Submitting...
//                 </div>
//               ) : (
//                 'Submit'
//               )}
//             </Button>
//           </div>
//         </form>
//       </Form>

//       {/* ✅ Success Popup */}
//       {showSuccess && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//           <div className="bg-white text-black rounded-xl p-8 shadow-xl w-80 text-center space-y-4 animate-in fade-in zoom-in">
//             <h2 className="text-2xl font-semibold text-green-600">Success!</h2>
//             <button onClick={() => setShowSuccess(false)}>close</button>
//             <p>Your business was listed successfully.</p>
//             <Link
//               href="/add-business/business-info"
//               className="text-blue-600 hover:underline"
//             >
//               Add More
//             </Link>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }



'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useBusinessForm } from '@/context/BusinessFormContext'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from '@/components/ui/form'
import Link from 'next/link'
import { motion } from 'framer-motion'

const schema = z.object({
  streetLine1: z.string().optional(),
  streetLine2: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  pincode: z.string().optional(),
  country: z.string().optional(),
  logo: z
    .instanceof(File)
    .refine((file) => file.size <= 2 * 1024 * 1024, 'File size must be ≤ 2MB')
    .refine(
      (file) => ['image/jpeg', 'image/png', 'image/webp'].includes(file.type),
      'Only JPG, PNG, or WEBP allowed'
    )
    .optional(),
})

export default function Page() {
  const router = useRouter()
  const { form, updateForm } = useBusinessForm()
  const [showSuccess, setShowSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [file, setFile] = useState(null)

  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      streetLine1: form.streetLine1 || '',
      streetLine2: form.streetLine2 || '',
      city: form.city || '',
      state: form.state || '',
      pincode: form.pincode || '',
      country: form.country || '',
    },
  })

  const onSubmit = async (data) => {
    updateForm(data)
    const completeData = { ...form, ...data }
    setIsLoading(true)

    try {
      const formData = new FormData()
      Object.entries(completeData).forEach(([key, value]) => {
        if (value) formData.append(key, value)
      })
      if (file) formData.append('logo', file)

      const res = await fetch('/api/registerbusinesses', {
        method: 'POST',
        body: formData,
      })

      if (!res.ok) throw new Error('Failed to submit data')
      setShowSuccess(true)
    } catch (err) {
      console.error(err)
      alert('Submission failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const goBack = () => router.back()

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xl bg-white border border-gray-200 shadow-md rounded-2xl p-10"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">
            Business Address & Logo
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Provide your business location and upload your logo
          </p>
        </div>

        {/* Form */}
        <Form {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-5">
            {['streetLine1', 'streetLine2', 'city', 'state', 'pincode', 'country'].map((field) => (
              <FormField
                key={field}
                name={field}
                control={methods.control}
                render={({ field: formField }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium text-sm capitalize">
                      {field.replace(/([A-Z])/g, ' $1')}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...formField}
                        placeholder={`Enter ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
                        className="h-11 rounded-xl border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition bg-white"
                      />
                    </FormControl>
                    <FormMessage className="text-sm text-red-500" />
                  </FormItem>
                )}
              />
            ))}

            {/* Logo Upload */}
            <div className="mt-6">
              <FormLabel className="text-gray-700 font-medium text-sm">
                Business Logo
              </FormLabel>
              <div className="mt-2 flex items-center justify-between rounded-xl border border-dashed border-gray-300 p-4 hover:border-indigo-400 transition">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="text-sm text-gray-600 cursor-pointer"
                />
                {file && (
                  <span className="text-sm text-green-600 truncate max-w-[150px]">
                    {file.name}
                  </span>
                )}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between pt-6">
              <Button
                type="button"
                variant="outline"
                onClick={goBack}
                className="w-[48%] rounded-xl border-gray-300 text-gray-700 hover:bg-gray-100 transition"
              >
                Back
              </Button>
              <Button
                type="submit"
                className="w-[48%] rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition"
              >
                {isLoading ? 'Submitting...' : 'Submit'}
              </Button>
            </div>
          </form>
        </Form>
      </motion.div>

      {/* ✅ Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8 w-[90%] max-w-sm text-center space-y-4"
          >
            <h2 className="text-xl font-semibold text-green-600">
              ✅ Business Registered
            </h2>
            <p className="text-gray-600 text-sm">
              Your business has been listed successfully.
            </p>
            <div className="flex justify-center gap-4 pt-3">
              <Button
                variant="outline"
                onClick={() => setShowSuccess(false)}
                className="rounded-xl text-gray-700 border-gray-300"
              >
                Close
              </Button>
              <Link href="/add-business/business-info">
                <Button className="rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white">
                  Add More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}
