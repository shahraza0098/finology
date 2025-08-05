import { NextResponse } from 'next/server'
import prisma  from '@/lib/prisma'

export async function POST(req) {
  try {
    const { businessId, clerkId, content, rating } = await req.json()

    if (!businessId || !clerkId || !content || typeof rating !== 'number') {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json({ error: 'Rating must be between 1 and 5' }, { status: 400 })
    }

    // Find the internal user by clerkId; if not exists optionally create minimal user
    let user = await prisma.user.findUnique({
      where: { clerkId },
    })

    if (!user) {
      // Optionally create user if onboarding wasn't done
      return NextResponse.json({error:'User does not exits'}, {status:404})
    }

    const review = await prisma.review.create({
      data: {
        businessId,
        investorId: user.id,
        clerkId,
        content,
        rating,
      },
    })

    return NextResponse.json(review, { status: 201 })
  } catch (err) {
    console.error('Create review error', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}



export async function GET(){
    
}
