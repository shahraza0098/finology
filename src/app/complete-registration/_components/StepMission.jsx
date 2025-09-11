"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Form, FormField, FormItem, FormLabel, FormMessage, FormControl } from "@/components/ui/form"

const schema = z.object({
  mission: z.string().min(5, "Mission is required"),
  vision: z.string().min(5, "Vision is required"),
  coreValues: z.string().optional().or(z.literal("")),
  achievements: z.string().optional().or(z.literal("")),
})

export default function CompanyMissions({businessId}) {
  const router = useRouter()


  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: { mission: "", vision: "", coreValues: "", achievements: "" },
  })

  const onSubmit = async (data) => {
    await fetch(`/api/admin/business/${businessId}/complete-registration`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    router.push(`/complete-registration/add-staffs?businessId=${businessId}`)
  }

  return (
    <Form {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
        <FormField name="mission" control={methods.control} render={({ field }) => (
          <FormItem>
            <FormLabel>Mission</FormLabel>
            <FormControl><Input {...field} /></FormControl>
            <FormMessage />
          </FormItem>
        )} />

        <FormField name="vision" control={methods.control} render={({ field }) => (
          <FormItem>
            <FormLabel>Vision</FormLabel>
            <FormControl><Input {...field} /></FormControl>
            <FormMessage />
          </FormItem>
        )} />

        <FormField name="coreValues" control={methods.control} render={({ field }) => (
          <FormItem>
            <FormLabel>Core Values</FormLabel>
            <FormControl><Input {...field} /></FormControl>
            <FormMessage />
          </FormItem>
        )} />

        <FormField name="achievements" control={methods.control} render={({ field }) => (
          <FormItem>
            <FormLabel>Achievements</FormLabel>
            <FormControl><Input {...field} /></FormControl>
            <FormMessage />
          </FormItem>
        )} />

        <Button type="submit">Next</Button>
      </form>
    </Form>
  )
}
