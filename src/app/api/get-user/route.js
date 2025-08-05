import { auth, clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { userId } = await auth();
  console.log(userId ? `User ID: ${userId}` : 'No user signed in');
  

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

//   const clerkClient = createClerkClient();
//   const user = await clerkClient.users.getUser(userId);
//   console.log(user);

const client = await clerkClient()

  // Use the Backend SDK's `getUser()` method to get the Backend User object
  const user = await client.users.getUser(userId)

  console.log("USer role:", user.publicMetadata?.role);
  
  

  return NextResponse.json({ userId, user }, { status: 200 });
}





