// // import prisma from "@/lib/prisma";

// // prisma

// // export async function POST(request) {
// //   try {
// //     const body = await request.json();

// //     const {
// //       name,
// //       description,
// //       sector,
// //       totalShares,
// //       sharePrice,
// //       location,
// //     } = body;

// //     // Basic field validation
// //     if (!name || !totalShares || !sharePrice) {
// //       return new Response(
// //         JSON.stringify({ message: 'Name, totalShares, and sharePrice are required.' }),
// //         { status: 400, headers: { 'Content-Type': 'application/json' } }
// //       );
// //     }

// //     const newBusiness = await prisma.business.create({
// //       data: {
// //         name,
// //         description,
// //         sector,
// //         totalShares: Number(totalShares),
// //         sharePrice: Number(sharePrice),
// //         location,
// //       },
// //     });

// //     return new Response(
// //       JSON.stringify({ message: 'Business created successfully', business: newBusiness }),
// //       { status: 201, headers: { 'Content-Type': 'application/json' } }
// //     );
// //   } catch (error) {
// //     console.error('[BUSINESS_POST_ERROR]', error);

// //     return new Response(
// //       JSON.stringify({ message: 'Internal Server Error', error: error.message }),
// //       { status: 500, headers: { 'Content-Type': 'application/json' } }
// //     );
// //   }
// // }


// import prisma from "@/lib/prisma";

// export async function POST(request) {
//   try {
//     const body = await request.json();

//     const {
//       name,
//       description,
//       sector,
//       registrationNumber,
//       taxId,   // gstNumber in UI
//       streetLine1,
//       streetLine2,
//       city,
//       state,
//       pincode,
//       country,
//     } = body;

//     // ✅ Basic field validation
//      if (!name ||!description || !sector || !registrationNumber || !streetLine1 || !city || !state || !pincode || !country) {
//         return new Response(
//          JSON.stringify({ message: 'Name, Description, Sector, registrationNumber, streetLine1, city, state, pincode, country required ' }),
//          { status: 400, headers: { 'Content-Type': 'application/json' } }
//      );
//      }

//     const newBusiness = await prisma.business.create({
//       data: {
//         name,
//       description,
//       sector,
//       registrationNumber,
//       taxId,  
//       streetLine1,
//       streetLine2,
//       city,
//       state,
//       pincode,
//       country,
//       },
//     });

//     return new Response(
//       JSON.stringify({ message: 'Business created successfully', business: newBusiness }),
//       { status: 201, headers: { 'Content-Type': 'application/json' } }
//     );
//   } catch (error) {
//     console.error('[BUSINESS_POST_ERROR]', error);

//     return new Response(
//       JSON.stringify({ message: 'Internal Server Error', error: error.message }),
//       { status: 500, headers: { 'Content-Type': 'application/json' } }
//     );
//   }
// }



// src/app/api/registerbusinesses/route.js
import prisma from "@/lib/prisma";
// import { v2 as cloudinary } from "cloudinary";

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });
import cloudinary from "@/lib/cloudinary";

export async function POST(request) {
  try {
    const formData = await request.formData();

    // Extract text fields
    const name = formData.get("name") || "";
    const description = formData.get("description") || "";
    const sector = formData.get("sector") || "";
    const registrationNumber = formData.get("registrationNumber") || "";
    const taxId = formData.get("taxId") || "";  // gstNumber in UI
    const streetLine1 = formData.get("streetLine1") || "";
    const streetLine2 = formData.get("streetLine2") || "";
    const city = formData.get("city") || "";
    const state = formData.get("state") || "";
    const pincode = formData.get("pincode") || "";
    const country = formData.get("country") || "";


    // Extract file
    const file = formData.get("logo");

    let logoUrl = null;

    if (file && typeof file === "object") {
      const buffer = Buffer.from(await file.arrayBuffer());

      // Upload to Cloudinary
      logoUrl = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: "business_logos",
            resource_type: "image",
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result.secure_url);
          }
        );
        uploadStream.end(buffer);
      });
    }

    // Save in DB (example: Business table)
    const business = await prisma.business.create({
      data: {
          name,
      description,
      sector,
      registrationNumber,
      taxId,  
      streetLine1,
      streetLine2,
      city,
      state,
      pincode,
      country,
        logoUrl: logoUrl, // store Cloudinary url
      },
    });

    return new Response(JSON.stringify(business), { status: 201 });
  } catch (error) {
    console.error("Error registering business:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

