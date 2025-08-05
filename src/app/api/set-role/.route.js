// src/app/api/set-role/route.js

import { NextResponse } from 'next/server'
import { clerkClient } from '@clerk/nextjs/server'

const ADMIN_USER_ID = 'user_30OieGUCZF6Oe1SgEIetM3NUXoK' // ← Replace this with your actual Clerk userId

export async function POST(req) {
  try {
    const { userId } = await req.json()
    console.log(userId);
    

    if (!userId) {
      return NextResponse.json({ error: 'Missing userId' }, { status: 400 })
    }

    const role = userId === ADMIN_USER_ID ? 'admin' : 'customer'

    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: { role },
    })

    return NextResponse.json({ message: `Role set to ${role}` })
  } catch (error) {
    console.error('Error setting role:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
