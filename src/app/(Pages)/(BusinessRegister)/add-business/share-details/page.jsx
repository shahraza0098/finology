// // 'use client'

// // import { useForm } from 'react-hook-form'
// // import { z } from 'zod'
// // import { zodResolver } from '@hookform/resolvers/zod'
// // import { useBusinessForm } from '@/context/BusinessFormContext'
// // import { useRouter } from 'next/navigation'
// // import { Input } from '@/components/UI/input'
// // import { Button } from '@/components/UI/button'
// // import { Form, FormField, FormItem, FormLabel, FormMessage, FormControl } from '@/components/UI/form'

// // const schema = z.object({
// //   totalShares: z.coerce.number().min(1, 'Must be at least 1'),
// //   sharePrice: z.coerce.number().min(0.01, 'Must be at least 0.01'),
// // })

// // export default function Page() {
// //   const router = useRouter()
// //   const { form, updateForm } = useBusinessForm()

// //   const methods = useForm({
// //     resolver: zodResolver(schema),
// //     defaultValues: {
// //       totalShares: form.totalShares || '',
// //       sharePrice: form.sharePrice || '',
// //     }
// //   })

// //   const onSubmit = (data) => {
// //     updateForm(data)
// //     router.push('/add-business/add-location')
// //   }

// //   const goBack = () => {
// //     router.back()
// //   }

// //   return (
// //     <Form {...methods}>
// //       <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
// //         <FormField name="totalShares" control={methods.control} render={({ field }) => (
// //           <FormItem>
// //             <FormLabel>Total Shares</FormLabel>
// //             <FormControl><Input type="number" {...field} /></FormControl>
// //             <FormMessage />
// //           </FormItem>
// //         )} />
// //         <FormField name="sharePrice" control={methods.control} render={({ field }) => (
// //           <FormItem>
// //             <FormLabel>Share Price</FormLabel>
// //             <FormControl><Input type="number" step="0.01" {...field} /></FormControl>
// //             <FormMessage />
// //           </FormItem>
// //         )} />
// //         <div className="flex gap-4">
// //           <Button type="button" onClick={goBack}>Back</Button>
// //           <Button type="submit">Next</Button>
// //         </div>
// //       </form>
// //     </Form>
// //   )
// // }


// 'use client'

// import { useForm } from 'react-hook-form'
// import { z } from 'zod'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { useBusinessForm } from '@/context/BusinessFormContext'
// import { useRouter } from 'next/navigation'
// import { Input } from '@/components/UI/input'
// import { Button } from '@/components/UI/button'
// import { Form, FormField, FormItem, FormLabel, FormMessage, FormControl } from '@/components/UI/form'

// // ✅ Schema mapped to DB fields
// const schema = z.object({
//   registrationNumber: z.string().min(5, 'Registration number is required'),
//   taxId: z
//     .string()
//     .regex(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/, 'Invalid GST number')
//     .optional(),
// })

// export default function Page() {
//   const router = useRouter()
//   const { form, updateForm } = useBusinessForm()

//   const methods = useForm({
//     resolver: zodResolver(schema),
//     defaultValues: {
//       registrationNumber: form.registrationNumber || '',
//       taxId: form.taxId || '',
//     },
//   })

//   const onSubmit = (data) => {
//     updateForm(data)
//     router.push('/add-business/add-location')
//   }

//   const goBack = () => {
//     router.back()
//   }

//   return (
//     <Form {...methods}>
//       <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
//         {/* Registration Number */}
//         <FormField
//           name="registrationNumber"
//           control={methods.control}
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Registration Number</FormLabel>
//               <FormControl>
//                 <Input {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* GST Number (mapped to taxId) */}
//         <FormField
//           name="taxId"
//           control={methods.control}
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>GST Number</FormLabel>
//               <FormControl>
//                 <Input {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <div className="flex gap-4">
//           <Button type="button" onClick={goBack}>
//             Back
//           </Button>
//           <Button type="submit">Next</Button>
//         </div>
//       </form>
//     </Form>
//   )
// }



'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useBusinessForm } from '@/context/BusinessFormContext'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Form, FormField, FormItem, FormLabel, FormMessage, FormControl } from '@/components/ui/form'

// ✅ Schema mapped to DB fields
const schema = z.object({
  registrationNumber: z.string().min(5, 'Registration number is required'),
  taxId: z
    .string()
    .regex(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/, 'Invalid GST number')
    .optional(),
})

export default function Page() {
  const router = useRouter()
  const { form, updateForm } = useBusinessForm()

  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      registrationNumber: form.registrationNumber || '',
      taxId: form.taxId || '',
    },
  })

  const onSubmit = (data) => {
    updateForm(data)
    router.push('/add-business/add-location')
  }

  const goBack = () => {
    router.back()
  }

  return (
    <Form {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
        {/* Registration Number */}
        <FormField
          name="registrationNumber"
          control={methods.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Registration Number</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* GST Number (mapped to taxId) */}
        <FormField
          name="taxId"
          control={methods.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>GST Number</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-4">
          <Button type="button" onClick={goBack}>
            Back
          </Button>
          <Button type="submit">Next</Button>
        </div>
      </form>
    </Form>
  )
}

