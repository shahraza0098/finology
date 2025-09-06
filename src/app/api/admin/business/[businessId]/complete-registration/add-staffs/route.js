import prisma from "@/lib/prisma";


export async function POST(request, { params }) {
  const { businessId } = await params;
  const {name, title, bio} = await request.json();    
   
    try {
        // Update the business with new members
        const addMember = await prisma.managementMember.create({
            data: {
                businessId: businessId,
                name,
                title,
                bio,
            },
        });
        return new Response(JSON.stringify(addMember), { status: 200 });
    } catch (error) {
        console.error('Error updating business members:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}


export async function GET(req, { params }) {
  const { businessId } =await params; 

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