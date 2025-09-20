// /src/app/api/dashboard/[dbUserId]/route.js
import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";


export async function GET(req,{ params }) {
  try {
    const { dbUserId } = await params
    
     const { userId } = await auth();
     if (!userId) {
      return NextResponse.redirect(new URL("/sign-in", req.url)); 
    }

    const portfolio= await prisma.portfolio.findUnique({
        where:{userId:dbUserId},
        select:{
          totalValue:true,
          shares:{
            select:{
              quantity:true,
              priceAtBuy:true,
              business:{
                select:{
                  name: true,
                  sharePrice: true,
                }
              }
            }
          }
        },
    })

    // const transaction= await prisma.transaction.findMany({
    //     where:{userId:dbUserId},
    //     include:{
    //       business:true,
    //       share:true,
    //     }
    // })


const transaction = await prisma.transaction.findMany({
  where: { userId: dbUserId },
  select: {
    type: true,
    quantity: true,
    price: true,
    status: true,
    createdAt:true,
    business: {
      select: {
        name: true,
        sharePrice: true,
      },
    },
  },
});


    
    return NextResponse.json({portfolio, transaction}, { status: 200 });
  } catch (error) {
    console.error("error message", error.message)
    return NextResponse.json({ error: error.message }, { status: 500 });
  }finally{
    await prisma.$disconnect();
  }
}
