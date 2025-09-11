// "use client"

// import { useState } from "react"
// import { useForm } from "react-hook-form"
// import { z } from "zod"
// import { zodResolver } from "@hookform/resolvers/zod"
// import axios from "axios"
// import { Button } from "@/components/UI/button"
// import { Input } from "@/components/UI/input"
// import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/UI/form"

// // ✅ Validation Schema
// const schema = z.object({
//   shares: z
//     .number({ invalid_type_error: "Shares must be a number" })
//     .min(1, "At least 1 share required"),
//   prices: z
//     .number({ invalid_type_error: "Price must be a number" })
//     .positive("Price must be greater than 0"),
// })

// export default function NewShareIssue({ businessId }) {
//   const [message, setMessage] = useState("")

//   const form = useForm({
//     resolver: zodResolver(schema),
//     defaultValues: {
//       shares: "",
//       prices: "",
//     },
//   })

//   const onSubmit = async (values) => {
//     setMessage("")
//     try {
//       const res = await axios.post(`/api/admin/business/${businessId}/issue-shares`, values)
//       setMessage("✅ Shares issued successfully!")
//       form.reset()
//       console.log("Shares issued successfully", res.data)
//     } catch (error) {
//       console.error("Error issuing shares", error)
//       setMessage("❌ Failed to issue shares. Please try again.")
//     }
//   }

//   return (
//     <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-2xl p-6">
//       <h2 className="text-xl font-semibold mb-2">Issue Shares</h2>
//       <p className="text-gray-500 mb-6">Input details to issue new company shares.</p>

//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//           {/* Shares */}
//           <FormField
//             control={form.control}
//             name="shares"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Number of Shares</FormLabel>
//                 <FormControl>
//                   <Input type="number" placeholder="Enter shares" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           {/* Price per share */}
//           <FormField
//             control={form.control}
//             name="prices"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Price per Share</FormLabel>
//                 <FormControl>
//                   <Input type="number" step="0.01" placeholder="Enter price" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <Button type="submit" className="w-full">
//             Issue Shares
//           </Button>
//         </form>
//       </Form>

//       {message && <p className="mt-4 text-center text-sm">{message}</p>}
//     </div>
//   )
// }



"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"

// ✅ Validation Schema (transform string → number)
const schema = z.object({
  shares: z
    .string()
    .min(1, "Shares are required")
    .transform((val) => Number(val))
    .refine((val) => val > 0, { message: "At least 1 share required" }),

  prices: z
    .string()
    .min(1, "Price is required")
    .transform((val) => Number(val))
    .refine((val) => val > 0, { message: "Price must be greater than 0" }),
})

export default function NewShareIssue({ businessId }) {
  const [message, setMessage] = useState("")

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      shares: "",
      prices: "",
    },
  })

  const onSubmit = async (values) => {
    setMessage("")
    try {
      const res = await axios.post(
        `/api/admin/business/${businessId}/issue-shares`,
        values
      )
      setMessage("✅ Shares issued successfully!")
      form.reset()
      console.log("Shares issued successfully", res.data)
    } catch (error) {
      console.error("Error issuing shares", error)
      setMessage("❌ Failed to issue shares. Please try again.")
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-xl font-semibold mb-2">Issue Shares</h2>
      <p className="text-gray-500 mb-6">
        Input details to issue new company shares.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Shares */}
          <FormField
            control={form.control}
            name="shares"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Shares</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter shares"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Price per share */}
          <FormField
            control={form.control}
            name="prices"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price per Share</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    step="0.01"
                    placeholder="Enter price"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Issue Shares
          </Button>
        </form>
      </Form>

      {message && (
        <p className="mt-4 text-center text-sm">{message}</p>
      )}
    </div>
  )
}

