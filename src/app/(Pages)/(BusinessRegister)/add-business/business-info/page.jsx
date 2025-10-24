// 'use client'

// import { useForm } from 'react-hook-form'
// import { z } from 'zod'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { useBusinessForm } from '@/context/BusinessFormContext'
// import { useRouter } from 'next/navigation'
// import { Input } from '@/components/UI/input'
// import { Button } from '@/components/UI/button'
// import { Form, FormField, FormItem, FormLabel, FormMessage, FormControl } from '@/components/UI/form'

// const schema = z.object({
//   name: z.string().min(3, 'Minimum 3 characters'),
//   description: z.string().min(10, 'Minimum 10 characters'),
//   sector: z.string().min(3, 'Minimum 3 characters')
// })

// export default function Page() {
//   const router = useRouter()
//   const { form, updateForm } = useBusinessForm()

//   const methods = useForm({
//     resolver: zodResolver(schema),
//     defaultValues: {
//       name: form.name || '',
//       description: form.description || '',
//       sector: form.sector || '',
//     }
//   })

//   const onSubmit = (data) => {
//     updateForm(data)
//     router.push('/add-business/share-details')
//   }

//   return (
//     <Form {...methods}>
//       <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
//         <FormField name="name" control={methods.control} render={({ field }) => (
//           <FormItem>
//             <FormLabel>Name</FormLabel>
//             <FormControl><Input {...field} /></FormControl>
//             <FormMessage />
//           </FormItem>
//         )} />
//         <FormField name="description" control={methods.control} render={({ field }) => (
//           <FormItem>
//             <FormLabel>Description</FormLabel>
//             <FormControl><Input {...field} /></FormControl>
//             <FormMessage />
//           </FormItem>
//         )} />
//         <FormField name="sector" control={methods.control} render={({ field }) => (
//           <FormItem>
//             <FormLabel>Sector</FormLabel>
//             <FormControl><Input {...field} /></FormControl>
//             <FormMessage />
//           </FormItem>
//         )} />
//         <Button type="submit">Next</Button>
//       </form>
//     </Form>
//   )
// }


// "use client"

// import { useForm } from "react-hook-form"
// import { z } from "zod"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useBusinessForm } from "@/context/BusinessFormContext"
// import { useRouter } from "next/navigation"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import {
//   Form,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
//   FormControl,
// } from "@/components/ui/form"

// // ✅ Sector enum options (mirror Prisma enum)
// const sectorOptions = ["FMCG", "Transport", "Pharma", "RealEstate", "Gadgets"]

// // ✅ Updated schema
// const schema = z.object({
//   name: z.string().min(3, "Minimum 3 characters"),
//   description: z.string().min(10, "Minimum 10 characters"),
//   sector: z.enum(["FMCG", "Transport", "Pharma", "RealEstate", "Gadgets"], {
//     errorMap: () => ({ message: "Please select a sector" }),
//   }),
// })

// export default function Page() {
//   const router = useRouter()
//   const { form, updateForm } = useBusinessForm()

//   const methods = useForm({
//     resolver: zodResolver(schema),
//     defaultValues: {
//       name: form.name || "",
//       description: form.description || "",
//       sector: form.sector || "",
//     },
//   })

//   const onSubmit = (data) => {
//     updateForm(data)
//     router.push("/add-business/share-details")
//   }

//   return (
//     <Form {...methods}>
//       <form
//         onSubmit={methods.handleSubmit(onSubmit)}
//         className="space-y-6"
//       >
//         <FormField
//           name="name"
//           control={methods.control}
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Name</FormLabel>
//               <FormControl>
//                 <Input {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           name="description"
//           control={methods.control}
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Description</FormLabel>
//               <FormControl>
//                 <Input {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* ✅ Sector dropdown instead of free text input */}
//         <FormField
//           name="sector"
//           control={methods.control}
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Sector</FormLabel>
//               <FormControl>
//                 <select
//                   {...field}
//                   className="border border-gray-300 rounded-md p-2 w-full"
//                 >
//                   <option value="">Select a sector</option>
//                   {sectorOptions.map((sector) => (
//                     <option key={sector} value={sector}>
//                       {sector}
//                     </option>
//                   ))}
//                 </select>
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <Button type="submit">Next</Button>
//       </form>
//     </Form>
//   )
// }

"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useBusinessForm } from "@/context/BusinessFormContext"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form"
import { motion } from "framer-motion"
import { Briefcase, ArrowRight } from "lucide-react"

const sectorOptions = ["FMCG", "Transport", "Pharma", "RealEstate", "Gadgets"]

const schema = z.object({
  name: z.string().min(3, "Minimum 3 characters"),
  description: z.string().min(10, "Minimum 10 characters"),
  sector: z.enum(["FMCG", "Transport", "Pharma", "RealEstate", "Gadgets"], {
    errorMap: () => ({ message: "Please select a sector" }),
  }),
})

export default function BusinessInfoForm() {
  const router = useRouter()
  const { form, updateForm } = useBusinessForm()

  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: form.name || "",
      description: form.description || "",
      sector: form.sector || "",
    },
  })

  const onSubmit = (data) => {
    updateForm(data)
    router.push("/add-business/share-details")
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full max-w-2xl mx-auto px-4 sm:px-6 md:px-0"
    >
      {/* Header */}
      <div className="mb-10 text-center">
        <div className="flex justify-center mb-3">
          <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 p-3 rounded-full shadow-sm">
            <Briefcase className="w-7 h-7 text-indigo-700" />
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight mb-2">
          Add Business Information
        </h1>
        <p className="text-gray-500 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
          Enter your business details below to begin the setup process.
        </p>
      </div>

      {/* Form Container */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 sm:p-8">
        <Form {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="space-y-8"
          >
            {/* Business Name */}
            <FormField
              name="name"
              control={methods.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-800 font-medium text-sm">
                    Business Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="e.g. Aurora Tech Labs"
                      className="mt-1 border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 text-gray-900 placeholder-gray-400 rounded-lg transition-all"
                    />
                  </FormControl>
                  <FormMessage className="text-sm text-red-500 mt-1" />
                </FormItem>
              )}
            />

            {/* Description */}
            <FormField
              name="description"
              control={methods.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-800 font-medium text-sm">
                    Description
                  </FormLabel>
                  <FormControl>
                    <textarea
                      {...field}
                      rows={4}
                      placeholder="Briefly describe your business..."
                      className="mt-1 w-full border border-gray-300 rounded-lg p-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 transition-all"
                    />
                  </FormControl>
                  <FormMessage className="text-sm text-red-500 mt-1" />
                </FormItem>
              )}
            />

            {/* Sector */}
            <FormField
              name="sector"
              control={methods.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-800 font-medium text-sm">
                    Sector
                  </FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="mt-1 w-full border border-gray-300 rounded-lg p-3 text-gray-900 focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 transition-all bg-white"
                    >
                      <option value="">Select a sector</option>
                      {sectorOptions.map((sector) => (
                        <option key={sector} value={sector}>
                          {sector}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage className="text-sm text-red-500 mt-1" />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <div className="pt-4 flex justify-end">
              <Button
                type="submit"
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg px-6 py-2.5 transition-all shadow-sm hover:shadow-md"
              >
                Next
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </motion.div>
  )
}
