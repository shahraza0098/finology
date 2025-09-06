"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { Input } from "@/components/UI/input"
import { Button } from "@/components/UI/button"
import { Form, FormField, FormItem, FormLabel, FormMessage, FormControl } from "@/components/UI/form"

const schema = z.object({
  website: z.string().url().optional().or(z.literal("")),
  email: z.string().email("Invalid email").optional().or(z.literal("")),
  phone: z.string().min(10, "Phone must be at least 10 digits").optional().or(z.literal("")),
})

export default function ContactInfoPage({businessId}) {
  const router = useRouter()
 

  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: { website: "", email: "", phone: "" },
  })

  const onSubmit = async (data) => {
    await fetch(`/api/admin/business/${businessId}/complete-registration`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    router.push(`/complete-registration/company-mission?businessId=${businessId}`)
  }

  return (
    <Form {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
        <FormField name="website" control={methods.control} render={({ field }) => (
          <FormItem>
            <FormLabel>Website</FormLabel>
            <FormControl><Input {...field} /></FormControl>
            <FormMessage />
          </FormItem>
        )} />

        <FormField name="email" control={methods.control} render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl><Input {...field} /></FormControl>
            <FormMessage />
          </FormItem>
        )} />

        <FormField name="phone" control={methods.control} render={({ field }) => (
          <FormItem>
            <FormLabel>Phone</FormLabel>
            <FormControl><Input {...field} /></FormControl>
            <FormMessage />
          </FormItem>
        )} />

        <Button type="submit">Next</Button>
      </form>
    </Form>
  )
}
