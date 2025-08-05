'use server'

import { auth, clerkClient } from '@clerk/nextjs/server'

import prisma from '@/lib/prisma'





export async function POST(req) {
    //req ,
    const {clerkId, name, email}= await req.json()

    // const { userId } = await auth()

    if (!clerkId) {
        return new Response('Unauthorized', { status: 401 })
      }
    

//      const client = await clerkClient()

// //   // Use the Backend SDK's `getUser()` method to get the Backend User object
//   const user = await client.users.getUser(userId)

    // Merge existing publicMetadata with new flag
   try {
    //  const updatedMetadata = {
    //    ...(user.publicMetadata || {}),
    //    onboardingComplete: true,
    //  }
 
    //  // Update Clerk user's publicMetadata
    //   await clerkClient.users.updateUserMetadata(userId, {
    //   publicMetadata: updatedMetadata,
    // })

     //db 
      const dbUser = await prisma.user.upsert({
      where: { clerkId: clerkId },
      update: {
        name: name,
        email: email,
        // you could also sync investorLevel or other defaults here
      },
      create: {
        clerkId: clerkId,
        name: name,
        email: email,
      },
    })


     return new Response(
      JSON.stringify({
        message: 'Account setup successfully',
        dbUser,
      }),
      {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      }
    )
   } catch (error) {
     console.error('Error updating Clerk user:', error);
     return new Response('Error updating user', { status: 500 });
    
   }
}