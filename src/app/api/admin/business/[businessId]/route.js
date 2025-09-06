





// import prisma from "@/lib/prisma";


// export async function GET({params}){

//     // console.log(params);
    

//     const {id} = params;
//     try {
//         const soloBusiness= await prisma.business.findUnique({
//             where:{
//                 id:id,
//             },
//         })

//         if(!soloBusiness){
//             return new Response('Business not found', { status: 404 });
//         }

//         return new Response(JSON.stringify(soloBusiness),{status:200})
//     } catch (error) {
//         console.error('Error fetching business:', error);
//         return new Response('Internal Server Error', { status: 500 });
//     }


// }



import prisma from '@/lib/prisma'

export async function GET(req,{ params }) {
  const { businessId } = await params
  
    

  try {
    const soloBusiness = await prisma.business.findUnique({
      where: { id:businessId },
    })

    const reviews= await prisma.review.findMany({
      where:{businessId:businessId}
    })

    
    return new Response(
      JSON.stringify({soloBusiness, reviews}),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error fetching business:', error)
    return new Response(
      JSON.stringify({ error: 'Internal Server Error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}



