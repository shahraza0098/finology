"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import axios from "axios"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useSearchParams } from "next/navigation"

// ✅ Zod schema
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
})

export default function FinancialRecordForm({businessId}) {
    
    
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
    },
  })

  // ✅ Submit handler
  const onSubmit = async (data) => {
    try {
      const formattedData = {
        ...data,
        year: parseInt(data.year, 10),
        revenue: parseFloat(data.revenue),
        netProfit: parseFloat(data.netProfit),
        profitMargin: data.profitMargin ? parseFloat(data.profitMargin) : null,
        operatingExpenses: data.operatingExpenses ? parseFloat(data.operatingExpenses) : null,
        ebitda: data.ebitda ? parseFloat(data.ebitda) : null,
        assets: data.assets ? parseFloat(data.assets) : null,
        liabilities: data.liabilities ? parseFloat(data.liabilities) : null,
        equity: data.equity ? parseFloat(data.equity) : null,
        cashFlow: data.cashFlow ? parseFloat(data.cashFlow) : null,
      }

      const res = await axios.post(`/api/admin/business/${businessId}/complete-registration/add-financials`, formattedData)

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
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 grid-cols-1 md:grid-cols-2">

        {/* Year Dropdown */}
        <FormField
          control={form.control}
          name="year"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Year</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 20 }, (_, i) => {
                      const y = new Date().getFullYear() - i
                      return <SelectItem key={y} value={String(y)}>{y}</SelectItem>
                    })}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Quarter Dropdown */}
        <FormField
          control={form.control}
          name="quarter"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quarter (optional)</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
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

        {/* Revenue */}
        <FormField
          control={form.control}
          name="revenue"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Revenue</FormLabel>
              <FormControl>
                <Input type="number" step="0.01" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Net Profit */}
        <FormField
          control={form.control}
          name="netProfit"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Net Profit</FormLabel>
              <FormControl>
                <Input type="number" step="0.01" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Optional Fields */}
        {["profitMargin", "operatingExpenses", "ebitda", "assets", "liabilities", "equity", "cashFlow"].map((fieldName) => (
          <FormField
            key={fieldName}
            control={form.control}
            name={fieldName}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}</FormLabel>
                <FormControl>
                  <Input type="number" step="0.01" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <div className="col-span-2">
          <Button type="submit" className="w-full">Save Financial Record</Button>
        </div>
      </form>
    </Form>
  )
}
