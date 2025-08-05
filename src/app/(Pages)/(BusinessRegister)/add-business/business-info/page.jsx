'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useBusinessForm } from '@/context/BusinessFormContext'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/UI/input'
import { Button } from '@/components/UI/button'
import { Form, FormField, FormItem, FormLabel, FormMessage, FormControl } from '@/components/UI/form'

const schema = z.object({
  name: z.string().min(3, 'Minimum 3 characters'),
  description: z.string().min(10, 'Minimum 10 characters'),
  sector: z.string().min(3, 'Minimum 3 characters')
})

export default function Page() {
  const router = useRouter()
  const { form, updateForm } = useBusinessForm()

  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: form.name || '',
      description: form.description || '',
      sector: form.sector || '',
    }
  })

  const onSubmit = (data) => {
    updateForm(data)
    router.push('/add-business/share-details')
  }

  return (
    <Form {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
        <FormField name="name" control={methods.control} render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl><Input {...field} /></FormControl>
            <FormMessage />
          </FormItem>
        )} />
        <FormField name="description" control={methods.control} render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl><Input {...field} /></FormControl>
            <FormMessage />
          </FormItem>
        )} />
        <FormField name="sector" control={methods.control} render={({ field }) => (
          <FormItem>
            <FormLabel>Sector</FormLabel>
            <FormControl><Input {...field} /></FormControl>
            <FormMessage />
          </FormItem>
        )} />
        <Button type="submit">Next</Button>
      </form>
    </Form>
  )
}
