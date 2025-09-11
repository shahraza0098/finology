import { NextResponse } from 'next/server'
import  prisma  from '@/lib/prisma'

export async function GET() {
  try {
    const businesses = await prisma.business.findMany({
      include: {
    financials: true,     // fetch related ManagementMember[]
    products: true,         // fetch related Owners[]
    management: true,         // fetch related Stocks[]
  },
      orderBy: { createdAt: 'desc' },
    })

   // console.log(businesses);
    

    return NextResponse.json(businesses)
  } catch (error) {
    console.error('Error fetching businesses:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
