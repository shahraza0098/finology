'use client'

import { useForm } from 'react-hook-form'
import { nonnegative, z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useBusinessForm } from '@/context/BusinessFormContext'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl
} from '@/components/ui/form'
import Link from 'next/link'

const schema = z.object({
  location: z.string().optional(),
})

export default function Page() {
  const router = useRouter()
  const { form, updateForm } = useBusinessForm()
  const [showSuccess, setShowSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      location: form.location || '',
    },
  })

  const onSubmit = async (data) => {
    updateForm(data)
    const completeData = { ...form, ...data }
    setIsLoading(true)

    try {
      const res = await fetch('/api/registerbusinesses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(completeData),

      })

      setIsLoading(false)
      

      if (!res.ok) throw new Error('Failed to submit data')

      // Show popup
      setShowSuccess(true)

      // Redirect after 2 seconds
      // setTimeout(() => {
      //   setShowSuccess(false)
      //   router.push('/')
      // }, 2000)
    } catch (err) {
      console.error('Error:', err)
      alert('Submission failed. Please try again.')
    }
  }

  const goBack = () => {
    router.back()
  }

  return (
    <>
      {/* Form UI */}
      <Form {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6 relative">
          <FormField
            name="location"
            control={methods.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location (optional)</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* //image selection input field */}

        <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>

          <div className="flex gap-4">
            <Button type="button" onClick={goBack}>Back</Button>
            <Button type="submit" >{isLoading?<div className='flex flex-row gap-1.5'><span className="loading loading-spinner"></span>Submitting...</div>:"submit"}</Button>
          </div>
        </form>
      </Form>

      {/* ✅ Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-xl p-8 shadow-xl w-80 text-center space-y-4 animate-in fade-in zoom-in">
            <h2 className="text-2xl font-semibold text-green-600">Success!</h2>
            <button onClick={()=>setShowSuccess(false) }>close</button>
            <p>Your business was listed successfully.</p>
            <Link href="/add-business/business-info" className="text-blue-600 hover:underline">
              add more
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
