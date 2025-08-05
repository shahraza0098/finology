'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useRouter } from 'next/navigation'
import Loading from './_components/loading'

export default function AdminBusinessesPage() {
  const [businesses, setBusinesses] = useState([])
  const [loading, setLoading] = useState(true)

  const router = useRouter()

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const res = await axios.get('/api/admin/business/listbusiness',{
          headers: {
            'Content-Type': 'application/json',
          },
        })
        if(res.status === 200) {
          setLoading(false)
        }
        setBusinesses(res.data)
      } catch (error) {
        console.error('Error fetching businesses:', error)
      }
    }

    fetchBusinesses()
  }, [])

  if (loading) {
    return <Loading/>
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">All Businesses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {businesses.map((biz) => (
          <Card key={biz.id} className="shadow-lg">
            <CardContent className="p-4 space-y-3">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">{biz.name}</h2>
                {/* <Badge variant={biz.status === 'active' ? 'success' : 'secondary'}>
                  {biz.status.charAt(0).toUpperCase() + biz.status.slice(1)}
                </Badge> */}
              </div>
              <p className="text-sm text-muted-foreground">{biz.category}</p>
              <p className="text-sm text-muted-foreground">📅 {new Date(biz.createdAt).toLocaleDateString()}</p>
              <p className="text-sm text-muted-foreground">📧 {biz.email}</p>
              <div className="flex gap-2 mt-4">
                <Button size="sm" variant="outline" onClick={() => router.push(`/admin/businesses/${biz.id}`)}>
                  View
                </Button>
                <Button size="sm">Edit</Button>
                <Button size="sm" variant="destructive">Delete</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
