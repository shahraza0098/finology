import prisma from "@/lib/prisma";

export async function PATCH(req, { params }) {
  const { businessId } = await params;
    const { website, email, phone } = await req.json();
    console.log("please test this wow",website, email, phone, businessId);
    
   try {
     const updatedBusiness = await prisma.business.update({
         where: { id: businessId },
         data: { website, email, phone },
     });
     return new Response(JSON.stringify(updatedBusiness), { status: 200 });
     
   } catch (error) {

        return new Response(JSON.stringify({ error: "Failed to update business contact details" }), { status: 500 });

   }
  
}