import prisma from "@/lib/prisma";

prisma

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      name,
      description,
      sector,
      totalShares,
      sharePrice,
      location,
    } = body;

    // Basic field validation
    if (!name || !totalShares || !sharePrice) {
      return new Response(
        JSON.stringify({ message: 'Name, totalShares, and sharePrice are required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const newBusiness = await prisma.business.create({
      data: {
        name,
        description,
        sector,
        totalShares: Number(totalShares),
        sharePrice: Number(sharePrice),
        location,
      },
    });

    return new Response(
      JSON.stringify({ message: 'Business created successfully', business: newBusiness }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('[BUSINESS_POST_ERROR]', error);

    return new Response(
      JSON.stringify({ message: 'Internal Server Error', error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
