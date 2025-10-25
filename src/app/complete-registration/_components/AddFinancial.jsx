// "use client"

// import { useForm } from "react-hook-form"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { z } from "zod"
// import axios from "axios"
// import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { useSearchParams } from "next/navigation"

// // ✅ Zod schema
// const formSchema = z.object({
//   year: z.string().regex(/^\d{4}$/, "Enter a valid year"),
//   quarter: z.enum(["Q1", "Q2", "Q3", "Q4"]).optional(),
//   revenue: z.string().min(1, "Revenue is required"),
//   netProfit: z.string().min(1, "Net Profit is required"),
//   profitMargin: z.string().optional(),
//   operatingExpenses: z.string().optional(),
//   ebitda: z.string().optional(),
//   assets: z.string().optional(),
//   liabilities: z.string().optional(),
//   equity: z.string().optional(),
//   cashFlow: z.string().optional(),
// })

// export default function FinancialRecordForm({businessId}) {
    
    
//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       year: "",
//       quarter: undefined,
//       revenue: "",
//       netProfit: "",
//       profitMargin: "",
//       operatingExpenses: "",
//       ebitda: "",
//       assets: "",
//       liabilities: "",
//       equity: "",
//       cashFlow: "",
//     },
//   })

//   // ✅ Submit handler
//   const onSubmit = async (data) => {
//     try {
//       const formattedData = {
//         ...data,
//         year: parseInt(data.year, 10),
//         revenue: parseFloat(data.revenue),
//         netProfit: parseFloat(data.netProfit),
//         profitMargin: data.profitMargin ? parseFloat(data.profitMargin) : null,
//         operatingExpenses: data.operatingExpenses ? parseFloat(data.operatingExpenses) : null,
//         ebitda: data.ebitda ? parseFloat(data.ebitda) : null,
//         assets: data.assets ? parseFloat(data.assets) : null,
//         liabilities: data.liabilities ? parseFloat(data.liabilities) : null,
//         equity: data.equity ? parseFloat(data.equity) : null,
//         cashFlow: data.cashFlow ? parseFloat(data.cashFlow) : null,
//       }

//       const res = await axios.post(`/api/admin/business/${businessId}/complete-registration/add-financials`, formattedData)

//       if (res.status === 201) {
//         alert("✅ Financial record saved successfully")
//         form.reset()
//       }
//     } catch (error) {
//       console.error("❌ Error saving record:", error)
//       alert("Failed to save record")
//     }
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 grid-cols-1 md:grid-cols-2">

//         {/* Year Dropdown */}
//         <FormField
//           control={form.control}
//           name="year"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Year</FormLabel>
//               <FormControl>
//                 <Select onValueChange={field.onChange} value={field.value}>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select year" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {Array.from({ length: 20 }, (_, i) => {
//                       const y = new Date().getFullYear() - i
//                       return <SelectItem key={y} value={String(y)}>{y}</SelectItem>
//                     })}
//                   </SelectContent>
//                 </Select>
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* Quarter Dropdown */}
//         <FormField
//           control={form.control}
//           name="quarter"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Quarter (optional)</FormLabel>
//               <FormControl>
//                 <Select onValueChange={field.onChange} value={field.value}>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select quarter" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="Q1">Q1 (Jan–Mar)</SelectItem>
//                     <SelectItem value="Q2">Q2 (Apr–Jun)</SelectItem>
//                     <SelectItem value="Q3">Q3 (Jul–Sep)</SelectItem>
//                     <SelectItem value="Q4">Q4 (Oct–Dec)</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* Revenue */}
//         <FormField
//           control={form.control}
//           name="revenue"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Revenue</FormLabel>
//               <FormControl>
//                 <Input type="number" step="0.01" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* Net Profit */}
//         <FormField
//           control={form.control}
//           name="netProfit"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Net Profit</FormLabel>
//               <FormControl>
//                 <Input type="number" step="0.01" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* Optional Fields */}
//         {["profitMargin", "operatingExpenses", "ebitda", "assets", "liabilities", "equity", "cashFlow"].map((fieldName) => (
//           <FormField
//             key={fieldName}
//             control={form.control}
//             name={fieldName}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>{fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}</FormLabel>
//                 <FormControl>
//                   <Input type="number" step="0.01" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         ))}

//         <div className="col-span-2">
//           <Button type="submit" className="w-full">Save Financial Record</Button>
//         </div>
//       </form>
//     </Form>
//   )
// }


// "use client"

// import { useForm } from "react-hook-form"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { z } from "zod"
// import axios from "axios"
// import {
//   Form,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormControl,
//   FormMessage,
// } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

// // ✅ Zod schema
// const formSchema = z.object({
//   year: z.string().regex(/^\d{4}$/, "Enter a valid year"),
//   quarter: z.enum(["Q1", "Q2", "Q3", "Q4"]).optional(),
//   revenue: z.string().min(1, "Revenue is required"),
//   netProfit: z.string().min(1, "Net Profit is required"),
//   profitMargin: z.string().optional(),
//   operatingExpenses: z.string().optional(),
//   ebitda: z.string().optional(),
//   assets: z.string().optional(),
//   liabilities: z.string().optional(),
//   equity: z.string().optional(),
//   cashFlow: z.string().optional(),
//   shareReturnPercent: z.string().optional(), // ✅ New field added
// })

// export default function FinancialRecordForm({ businessId }) {
//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       year: "",
//       quarter: undefined,
//       revenue: "",
//       netProfit: "",
//       profitMargin: "",
//       operatingExpenses: "",
//       ebitda: "",
//       assets: "",
//       liabilities: "",
//       equity: "",
//       cashFlow: "",
//       shareReturnPercent: "",
//     },
//   })

//   // ✅ Submit handler
//   const onSubmit = async (data) => {
//     try {
//       const formattedData = {
//         ...data,
//         year: parseInt(data.year, 10),
//         revenue: parseFloat(data.revenue),
//         netProfit: parseFloat(data.netProfit),
//         profitMargin: data.profitMargin ? parseFloat(data.profitMargin) : null,
//         operatingExpenses: data.operatingExpenses ? parseFloat(data.operatingExpenses) : null,
//         ebitda: data.ebitda ? parseFloat(data.ebitda) : null,
//         assets: data.assets ? parseFloat(data.assets) : null,
//         liabilities: data.liabilities ? parseFloat(data.liabilities) : null,
//         equity: data.equity ? parseFloat(data.equity) : null,
//         cashFlow: data.cashFlow ? parseFloat(data.cashFlow) : null,
//         shareReturnPercent: data.shareReturnPercent ? parseFloat(data.shareReturnPercent) : null,
//       }

//       const res = await axios.post(
//         `/api/admin/business/${businessId}/complete-registration/add-financials`,
//         formattedData
//       )

//       if (res.status === 201) {
//         alert("✅ Financial record saved successfully")
//         form.reset()
//       }
//     } catch (error) {
//       console.error("❌ Error saving record:", error)
//       alert("Failed to save record")
//     }
//   }

//   return (
//     <Form {...form}>
//       <form
//         onSubmit={form.handleSubmit(onSubmit)}
//         className="grid gap-6 grid-cols-1 md:grid-cols-2 bg-white shadow-xl rounded-2xl p-6 md:p-10"
//       >
//         {/* Year Dropdown */}
//         <FormField
//           control={form.control}
//           name="year"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Year</FormLabel>
//               <FormControl>
//                 <Select onValueChange={field.onChange} value={field.value}>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select year" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {Array.from({ length: 20 }, (_, i) => {
//                       const y = new Date().getFullYear() - i
//                       return (
//                         <SelectItem key={y} value={String(y)}>
//                           {y}
//                         </SelectItem>
//                       )
//                     })}
//                   </SelectContent>
//                 </Select>
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* Quarter Dropdown */}
//         <FormField
//           control={form.control}
//           name="quarter"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Quarter (optional)</FormLabel>
//               <FormControl>
//                 <Select onValueChange={field.onChange} value={field.value}>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select quarter" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="Q1">Q1 (Jan–Mar)</SelectItem>
//                     <SelectItem value="Q2">Q2 (Apr–Jun)</SelectItem>
//                     <SelectItem value="Q3">Q3 (Jul–Sep)</SelectItem>
//                     <SelectItem value="Q4">Q4 (Oct–Dec)</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* Financial Fields */}
//         {[
//           "revenue",
//           "netProfit",
//           "profitMargin",
//           "operatingExpenses",
//           "ebitda",
//           "assets",
//           "liabilities",
//           "equity",
//           "cashFlow",
//           "shareReturnPercent", // ✅ New field added
//         ].map((fieldName) => (
//           <FormField
//             key={fieldName}
//             control={form.control}
//             name={fieldName}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>
//                   {fieldName === "shareReturnPercent"
//                     ? "Share Return (%)"
//                     : fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
//                 </FormLabel>
//                 <FormControl>
//                   <Input
//                     type="number"
//                     step="0.01"
//                     placeholder={
//                       fieldName === "shareReturnPercent"
//                         ? "Enter % return on shares"
//                         : `Enter ${fieldName}`
//                     }
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         ))}

//         <div className="col-span-2">
//           <Button
//             type="submit"
//             className="w-full py-3 text-lg font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition-all"
//           >
//             Save Financial Record
//           </Button>
//         </div>
//       </form>
//     </Form>
//   )
// }


// "use client"

// import { useForm } from "react-hook-form"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { z } from "zod"
// import axios from "axios"
// import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// const formSchema = z.object({
//   year: z.string().regex(/^\d{4}$/, "Enter a valid year"),
//   quarter: z.enum(["Q1", "Q2", "Q3", "Q4"]).optional(),
//   revenue: z.string().min(1, "Revenue is required"),
//   netProfit: z.string().min(1, "Net Profit is required"),
//   profitMargin: z.string().optional(),
//   operatingExpenses: z.string().optional(),
//   ebitda: z.string().optional(),
//   assets: z.string().optional(),
//   liabilities: z.string().optional(),
//   equity: z.string().optional(),
//   cashFlow: z.string().optional(),
//   shareReturnPercent: z.string().optional(),
// })

// export default function FinancialRecordForm({ businessId }) {
//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       year: "",
//       quarter: undefined,
//       revenue: "",
//       netProfit: "",
//       profitMargin: "",
//       operatingExpenses: "",
//       ebitda: "",
//       assets: "",
//       liabilities: "",
//       equity: "",
//       cashFlow: "",
//       shareReturnPercent: "",
//     },
//   })

//   const onSubmit = async (data) => {
//     try {
//       const formattedData = {
//         ...data,
//         year: parseInt(data.year, 10),
//         revenue: parseFloat(data.revenue),
//         netProfit: parseFloat(data.netProfit),
//         profitMargin: data.profitMargin ? parseFloat(data.profitMargin) : null,
//         operatingExpenses: data.operatingExpenses ? parseFloat(data.operatingExpenses) : null,
//         ebitda: data.ebitda ? parseFloat(data.ebitda) : null,
//         assets: data.assets ? parseFloat(data.assets) : null,
//         liabilities: data.liabilities ? parseFloat(data.liabilities) : null,
//         equity: data.equity ? parseFloat(data.equity) : null,
//         cashFlow: data.cashFlow ? parseFloat(data.cashFlow) : null,
//         shareReturnPercent: data.shareReturnPercent ? parseFloat(data.shareReturnPercent) : null,
//       }

//       const res = await axios.post(
//         `/api/admin/business/${businessId}/complete-registration/add-financials`,
//         formattedData
//       )

//       if (res.status === 201) {
//         alert("✅ Financial record saved successfully")
//         form.reset()
//       }
//     } catch (error) {
//       console.error("❌ Error saving record:", error)
//       alert("Failed to save record")
//     }
//   }

//   return (
//     <Form {...form}>
//       <form
//         onSubmit={form.handleSubmit(onSubmit)}
//         className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-white rounded-xl border border-gray-200 shadow-sm"
//       >
//         {/* Year Dropdown */}
//         <FormField
//           control={form.control}
//           name="year"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel className="font-semibold text-gray-700">Year</FormLabel>
//               <FormControl>
//                 <Select onValueChange={field.onChange} value={field.value}>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select year" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {Array.from({ length: 20 }, (_, i) => {
//                       const y = new Date().getFullYear() - i
//                       return (
//                         <SelectItem key={y} value={String(y)}>
//                           {y}
//                         </SelectItem>
//                       )
//                     })}
//                   </SelectContent>
//                 </Select>
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* Quarter Dropdown */}
//         <FormField
//           control={form.control}
//           name="quarter"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel className="font-semibold text-gray-700">Quarter (optional)</FormLabel>
//               <FormControl>
//                 <Select onValueChange={field.onChange} value={field.value}>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select quarter" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="Q1">Q1 (Jan–Mar)</SelectItem>
//                     <SelectItem value="Q2">Q2 (Apr–Jun)</SelectItem>
//                     <SelectItem value="Q3">Q3 (Jul–Sep)</SelectItem>
//                     <SelectItem value="Q4">Q4 (Oct–Dec)</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* Revenue */}
//         <FormField
//           control={form.control}
//           name="revenue"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel className="font-semibold text-gray-700">Revenue</FormLabel>
//               <FormControl>
//                 <Input type="number" step="0.01" placeholder="Enter revenue" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* Net Profit */}
//         <FormField
//           control={form.control}
//           name="netProfit"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel className="font-semibold text-gray-700">Net Profit</FormLabel>
//               <FormControl>
//                 <Input type="number" step="0.01" placeholder="Enter net profit" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* Optional Fields */}
//         {[
//           "profitMargin",
//           "operatingExpenses",
//           "ebitda",
//           "assets",
//           "liabilities",
//           "equity",
//           "cashFlow",
//           "shareReturnPercent",
//         ].map((fieldName) => (
//           <FormField
//             key={fieldName}
//             control={form.control}
//             name={fieldName}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel className="font-semibold text-gray-700">
//                   {fieldName
//                     .replace(/([A-Z])/g, " $1")
//                     .replace(/^./, (s) => s.toUpperCase())}
//                 </FormLabel>
//                 <FormControl>
//                   <Input type="number" step="0.01" placeholder={`Enter ${fieldName}`} {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         ))}

//         <div className="col-span-2 mt-4">
//           <Button type="submit" className="w-full font-semibold text-base py-5">
//             Save Financial Record
//           </Button>
//         </div>
//       </form>
//     </Form>
//   )
// }


"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import axios from "axios"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const formSchema = z.object({
  year: z.string().regex(/^\d{4}$/, "Enter a valid year"),
  quarter: z.enum(["Q1", "Q2", "Q3", "Q4"]).optional(),
  revenue: z.string().min(1, "Revenue is required"),
  netProfit: z.string().min(1, "Net Profit is required"),
  profitMargin: z.string().optional(),
  operatingExpenses: z.string().optional(),
  ebitda: z.string().optional(),
  assets: z.string().optional(),
  liabilities: z.string().optional(),
  equity: z.string().optional(),
  cashFlow: z.string().optional(),
  shareReturnPercent: z.string().optional(),
})

export default function FinancialRecordForm({ businessId }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      year: "",
      quarter: undefined,
      revenue: "",
      netProfit: "",
      profitMargin: "",
      operatingExpenses: "",
      ebitda: "",
      assets: "",
      liabilities: "",
      equity: "",
      cashFlow: "",
      shareReturnPercent: "",
    },
  })

  const onSubmit = async (data) => {
    try {
      const formattedData = {
        ...data,
        year: parseInt(data.year, 10),
        revenue: parseFloat(data.revenue),
        netProfit: parseFloat(data.netProfit),
      }

      const res = await axios.post(
        `/api/admin/business/${businessId}/complete-registration/add-financials`,
        formattedData
      )

      if (res.status === 201) {
        alert("✅ Financial record saved successfully")
        form.reset()
      }
    } catch (error) {
      console.error("❌ Error saving record:", error)
      alert("Failed to save record")
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="
          bg-white 
          shadow-lg 
          rounded-2xl 
          p-6 
          sm:p-8 
          grid 
          grid-cols-1 
          md:grid-cols-2 
          gap-6 
          border 
          border-gray-100
        "
      >
        <h2 className="col-span-1 md:col-span-2 text-2xl font-semibold text-gray-800">
          Financial Information
        </h2>
        <p className="col-span-1 md:col-span-2 text-gray-500 text-[15px]">
          Enter your company’s latest financial performance details.
        </p>

        {/* Year */}
        <FormField
          control={form.control}
          name="year"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700 font-medium text-[15px]">Year</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="bg-gray-50 border border-gray-300 text-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-400 text-[15px]">
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 15 }, (_, i) => {
                      const y = new Date().getFullYear() - i
                      return (
                        <SelectItem key={y} value={String(y)}>
                          {y}
                        </SelectItem>
                      )
                    })}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Quarter */}
        <FormField
          control={form.control}
          name="quarter"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700 font-medium text-[15px]">
                Quarter (optional)
              </FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="bg-gray-50 border border-gray-300 text-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-400 text-[15px]">
                    <SelectValue placeholder="Select quarter" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Q1">Q1 (Jan–Mar)</SelectItem>
                    <SelectItem value="Q2">Q2 (Apr–Jun)</SelectItem>
                    <SelectItem value="Q3">Q3 (Jul–Sep)</SelectItem>
                    <SelectItem value="Q4">Q4 (Oct–Dec)</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Financial Fields */}
        {[
          "revenue",
          "netProfit",
          "profitMargin",
          "operatingExpenses",
          "ebitda",
          "assets",
          "liabilities",
          "equity",
          "cashFlow",
          "shareReturnPercent",
        ].map((fieldName) => (
          <FormField
            key={fieldName}
            control={form.control}
            name={fieldName}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium text-[15px]">
                  {fieldName
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (s) => s.toUpperCase())}
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    step="0.01"
                    placeholder={`Enter ${fieldName}`}
                    {...field}
                    className="
                      bg-gray-50 
                      border 
                      border-gray-300 
                      text-gray-800 
                      placeholder:text-gray-400 
                      text-[15px] 
                      focus:ring-2 
                      focus:ring-indigo-400 
                      focus:border-indigo-500 
                      rounded-md 
                      shadow-sm
                    "
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <div className="col-span-1 md:col-span-2 mt-4">
          <Button
            type="submit"
            className="w-full py-4 text-[16px] font-semibold bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg shadow transition-all"
          >
            Save Financial Record
          </Button>
        </div>
      </form>
    </Form>
  )
}
