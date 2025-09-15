// /src/app/api/buyshare/route.js
import { NextResponse } from "next/server";
import { buyShares } from "@/lib/buyShare";
import prisma from "@/lib/prisma";
import { auth, clerkClient } from "@clerk/nextjs/server";


export async function POST(req, { params }) {
  try {
     const { userId } = await auth();
     if (!userId) {
      return NextResponse.redirect(new URL("/sign-in", req.url)); 
    }

  console.log(userId ? `User ID: ${userId}` : 'No user signed in');
    const { businessId } = await params
    const body = await req.json();

    // const {   quantity } = body;
    const quantity = Number(body.quantity);

    
     const UserID = await prisma.user.findUnique({
      where: { clerkId: userId },
      select: { id: true },
    });


     if (!UserID) throw new Error("USer not Found");



    console.log("businessID inspection", businessId);
    


    if ( !businessId || !quantity) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const result = await buyShares(UserID.id, businessId, quantity);
    console.log("final log this can be crucial", result);
    
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("error message", error.message)
    return NextResponse.json({ error: error.message }, { status: 500 });
  }finally{
    await prisma.$disconnect();
  }
}
