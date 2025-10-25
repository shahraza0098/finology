import { NextResponse } from "next/server"
import prisma from "@/lib/prisma";

// Helper function: get recordDate from year & quarter
function calculateRecordDate(year, quarter) {
  if (!quarter) {
    // Annual → Dec 31st of that year
    return new Date(year, 11, 31)
  }
  const quarters = {
    Q1: new Date(year, 2, 31),  // March 31
    Q2: new Date(year, 5, 30),  // June 30
    Q3: new Date(year, 8, 30),  // Sep 30
    Q4: new Date(year, 11, 31), // Dec 31
  }
  return quarters[quarter]
}

export async function POST(req, { params }) {
  try {
    const { businessId } = await params
    const body = await req.json()


    const {
      year,
      quarter,
      revenue,
      netProfit,
      profitMargin,
      operatingExpenses,
      ebitda,
      assets,
      liabilities,
      equity,
      cashFlow,
      shareReturnPercent,
    } = body
    console.log("Received data:please ",businessId, body);

    

    if (!year || !revenue || !netProfit) {
      return NextResponse.json({ error: "Year, revenue, and netProfit are required" }, { status: 400 })
    }

    // Compute recordDate from year + quarter
    const recordDate = calculateRecordDate(year, quarter)
    console.log("Computed recordDate:", recordDate)

    const record = await prisma.financialRecord.create({
      data: {
        businessId,
        year: parseInt(year, 10),
        quarter: quarter || null,
        recordDate,
        revenue: parseFloat(revenue),
        netProfit: parseFloat(netProfit),
        profitMargin: profitMargin ? parseFloat(profitMargin) : null,
        operatingExpenses: operatingExpenses ? parseFloat(operatingExpenses) : null,
        ebitda: ebitda ? parseFloat(ebitda) : null,
        assets: assets ? parseFloat(assets) : null,
        liabilities: liabilities ? parseFloat(liabilities) : null,
        equity: equity ? parseFloat(equity) : null,
        cashFlow: cashFlow ? parseFloat(cashFlow) : null,
        shareReturnPercent: shareReturnPercent ? parseFloat(shareReturnPercent) : null,
      },
    })

    return NextResponse.json({ success: true, record }, { status: 201 })
  } catch (error) {
    console.error("Error creating financial record:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
