// "use client"
// import React, {useState, useEffect} from 'react'
// import AddProductForm from './AddProductForm'
// import { Button } from "@/components/UI/button"
// import { UserPlus, BriefcaseBusiness  } from "lucide-react"
// import axios from 'axios'

// function AddNewProduct({businessId}) {
//     const [setProduct, setSetProduct] = useState([])
//     const [Loading, setLoading] = useState(true)
//     const [error, setError] = useState(null)
//      useEffect(() => {
//     // Fetch existing staff members from the API
//     const fetchProductList = async () => {
//       try {
//         const response = await axios.get(
//           `/api/admin/business/${businessId}/complete-registration/add-products`
//         )
//         console.log("response from product api:", response.error);
        
//         console.log("existing product:", response.data.products)
//         setSetProduct(response.data.products)
//         setLoading(false)
//       } catch (error) {
//         console.error("Error fetching Products:", error)
//         setError('Failed to fetch Products')
//         setLoading(false)
//       }
//     }

//     fetchProductList()
//   }, [businessId])
//      const [open, setOpen] = useState(false)
//   return (
//     <div className="flex flex-col items-center justify-center gap-6">
//       <h1 className="text-xl font-semibold">Team Members</h1>

//       {/* Circle avatars grid */}

//       {Loading ? (
//         <span className="loading loading-infinity loading-xl text-[#5409DA]"></span>
//       ) : setProduct.length === 0 ? (
//         <div>No product found.</div>
//       ) : (
//          <div className="flex flex-wrap gap-6 justify-center">
//         {setProduct.map((product) => (
//           <div
//             key={product.id}
//             className="w-32 h-32 rounded-full  bg-[#4E71FF] flex flex-col items-center justify-center text-center shadow-lg p-2"
//           >
//             <span className="font-bold text-sm text-gray-900 truncate">
//               {product?.name}
//             </span>
            
//             <div className="flex items-center gap-1 text-xs text-gray-700 mt-1">
//               <BriefcaseBusiness className="w-4 h-4" />
//               <span className="truncate">{product?.description}</span>
//             </div>
//           </div>
//         ))}

//         {/* Add New Member Circle */}
//         <Button
//           className="w-32 h-32 rounded-full bg-gray-100 border-2 border-dashed border-gray-400 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition"
//           onClick={() => setOpen(true)}
//         >
//           <UserPlus className="text-gray-600 w-8 h-8" />
//         </Button>
//       </div>
//       )
//     }


//       {/* Conditionally render popup */}
//       {open && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/50">
//           <div className="bg-white p-6 rounded-xl shadow-lg w-[400px]">
//             <AddProductForm businessId={businessId} />
//             <Button className="mt-4 w-full" onClick={() => setOpen(false)}>
//               Close
//             </Button>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default AddNewProduct
"use client";
import React, { useState, useEffect } from "react";
import AddProductForm from "./AddProductForm";
import { Button } from "@/components/ui/button";
import { UserPlus, BriefcaseBusiness } from "lucide-react";
import axios from "axios";

function AddNewProduct({ businessId }) {
  const [products, setProducts] = useState([]); // ✅ better name
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await axios.get(
          `/api/admin/business/${businessId}/complete-registration/add-products`
        );

        // ✅ make sure response has products
        setProducts(response?.data || []);
      } catch (error) {
        console.error("Error fetching Products:", error);
        setError("Failed to fetch Products");
      } finally {
        setLoading(false);
      }
    };

    fetchProductList();
  }, [businessId]);

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h1 className="text-xl font-semibold">Products</h1>

      {loading ? (
        <span className="loading loading-infinity loading-xl text-[#5409DA]"></span>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : products.length === 0 ? (
        <div className="flex flex-col items-center gap-4">
          <p className="text-gray-600">No product found.</p>
          <Button onClick={() => setOpen(true)}>
            <UserPlus className="w-4 h-4 mr-2" /> Add Your First Product
          </Button>
        </div>
      ) : (
        <div className="flex flex-wrap gap-6 justify-center">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-32 h-32 rounded-full bg-[#4E71FF] flex flex-col items-center justify-center text-center shadow-lg p-2"
            >
              <span className="font-bold text-sm text-gray-900 truncate">
                {product?.name}
              </span>
              <div className="flex items-center gap-1 text-xs text-gray-700 mt-1">
                <BriefcaseBusiness className="w-4 h-4" />
                <span className="truncate">{product?.description || "—"}</span>
              </div>
            </div>
          ))}

          {/* Add New Product Circle */}
          <Button
            className="w-32 h-32 rounded-full bg-gray-100 border-2 border-dashed border-gray-400 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition"
            onClick={() => setOpen(true)}
          >
            <UserPlus className="text-gray-600 w-8 h-8" />
          </Button>
        </div>
      )}

      {/* Popup Modal */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-[400px]">
            <AddProductForm businessId={businessId} />
            <Button className="mt-4 w-full" onClick={() => setOpen(false)}>
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddNewProduct;
