import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"  // ✅ adjust path if different
import { z } from "zod"

// ✅ Input validation schema
const schema = z.object({
  shares: z.number().min(1, "At least 1 share is required"),
  prices: z.number().positive("Price must be greater than 0"),
})

export async function POST(req, { params }) {
  try {

    const { businessId } = await params
    console.log("id from params", businessId);
    
    const {shares, prices } = await req.json()

    // Validate request body
    // const parsed = schema.safeParse(body)
    // if (!parsed.success) {
    //   return NextResponse.json(
    //     { error: parsed.error.flatten().fieldErrors },
    //     { status: 400 }
    //   )
    // }

    

    // ✅ Update Business shares
    const updatedBusiness = await prisma.business.update({
      where: { id:businessId },
      data: {
        totalShares:shares , // add new shares
        sharePrice: prices, // update price per share
      },
    })

    // Optionally: Create a share issuance record
    

    return NextResponse.json(
      { message: "Shares issued successfully", business: updatedBusiness },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error issuing shares:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
