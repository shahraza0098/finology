
import prisma from '@/lib/prisma'
export async function GET(req) {
  // parse the URL
  const { searchParams } = new URL(req.url)

  const businessId = searchParams.get("businessId")
  console.log("BusinessId:", businessId)

  return Response.json({ businessId })
}