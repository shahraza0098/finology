import prisma from "@/lib/prisma";

export async function GET(req, { params }) {
  const { businessId } = params; // no await needed

  const business = await prisma.business.findUnique({
    where: { id: businessId },
    include: {
      management: true, // load ManagementMember[]
    },
  });

  if (!business) {
    return new Response(JSON.stringify({ error: "Business not found" }), {
      status: 404,
    });
  }

  return new Response(JSON.stringify(business), { status: 200 });
}
