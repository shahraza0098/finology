import prisma from "@/lib/prisma"

export async function PATCH(req, { params }) {
  const { businessId } = await params
  const body = await req.json()
    console.log("Incoming PATCH →", { businessId, body });

  try {
    const updatedBusiness = await prisma.business.update({
      where: { id: businessId },
      data: body, // only relevant fields will be updated
    })
    return new Response(JSON.stringify(updatedBusiness), { status: 200 })
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ error: "Failed to update" }), { status: 500 })
  }
}
