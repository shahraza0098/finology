import { auth, clerkClient } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { userId } = await auth();
    console.log(userId ? `User ID: ${userId}` : 'No user signed in');
    
  
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  
  // //   const clerkClient = createClerkClient();
  // //   const user = await clerkClient.users.getUser(userId);
  // //   console.log(user);
  
  //   const client = await clerkClient()
  
  //   // Use the Backend SDK's `getUser()` method to get the Backend User object
  //   const user = await client.users.getUser(userId)
    
     const getUser = await prisma.user.findUnique({
          where: { clerkId: userId },
        });
  
    return NextResponse.json({ getUser }, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch User");
    return NextResponse.json({status:401}, {message:error.message})
  }
}





