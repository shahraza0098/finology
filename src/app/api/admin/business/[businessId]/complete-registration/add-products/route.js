// import prisma from "@/lib/prisma";


// export async function POST(request, { params }) {
//   const { businessId } = await params;
//   const {name,description} = await request.json();    
   
//     try {
//         // Update the business with new members
//         const addProduct = await prisma.product.create({
//             data: {
//                 businessId: businessId,
//                 name,
//                 description,
//             },
//         });
//         return new Response(JSON.stringify(addProduct), { status: 200 });
//     } catch (error) {
//         console.error('Error updating business product:', error);
//         return new Response('Internal Server Error', { status: 500 });
//     }
// }


// export async function GET(req, { params }) {
//   const { businessId } =await params; 

//  try {
//    const product = await prisma.product.findMany({
//      where: { businessId: businessId },
//      // include: {
//      //   products: true, // load ManagementMember[]
//      // },
//    });
//    console.log("product object hehehehe:", product);
   
 
//    if (!product) {
//      return new Response(JSON.stringify({ error: "Product not found" }), {
//        status: 404,
//      });
//    }
 
//    return new Response(JSON.stringify(product), { status: 200 });
//  } catch (error) {
//   console.error('Error fetching business:', error)
//     return new Response(
//       JSON.stringify({ error: 'Internal Server Error' }),
//       { status: 500 }
//     )
//  }
// }


import prisma from "@/lib/prisma";

export async function POST(request, { params }) {
  const { businessId } =  params;

  try {
    const { name, description } = await request.json();

    // ✅ Create a new product under this business
    const newProduct = await prisma.product.create({
      data: {
        businessId,
        name,
        description,
      },
    });

    // ✅ Mark business form as completed
    await prisma.business.update({
      where: { id: businessId },
      data: { isFormCompleted: true },
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Product added and business marked as completed",
        product: newProduct,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error adding product or updating business:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}

export async function GET(req, { params }) {
  const { businessId } = params;

  try {
    const products = await prisma.product.findMany({
      where: { businessId },
    });

    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    console.error("Error fetching business products:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
