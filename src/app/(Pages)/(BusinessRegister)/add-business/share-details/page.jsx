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
  totalShares: z.coerce.number().min(1, 'Must be at least 1'),
  sharePrice: z.coerce.number().min(0.01, 'Must be at least 0.01'),
})

export default function Page() {
  const router = useRouter()
  const { form, updateForm } = useBusinessForm()

  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      totalShares: form.totalShares || '',
      sharePrice: form.sharePrice || '',
    }
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
        <FormField name="totalShares" control={methods.control} render={({ field }) => (
          <FormItem>
            <FormLabel>Total Shares</FormLabel>
            <FormControl><Input type="number" {...field} /></FormControl>
            <FormMessage />
          </FormItem>
        )} />
        <FormField name="sharePrice" control={methods.control} render={({ field }) => (
          <FormItem>
            <FormLabel>Share Price</FormLabel>
            <FormControl><Input type="number" step="0.01" {...field} /></FormControl>
            <FormMessage />
          </FormItem>
        )} />
        <div className="flex gap-4">
          <Button type="button" onClick={goBack}>Back</Button>
          <Button type="submit">Next</Button>
        </div>
      </form>
    </Form>
  )
}
