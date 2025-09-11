// import Image from "next/image";
// import { WobbleCard } from "@/components/UI/wobble-card";

// export default function CompanyCard({ business }) {
//   const latestFinancial = business.financials?.[0]; // assume latest is first
//   console.log("business array passed on card",business);
  

//   return (
//     <WobbleCard containerClassName="">
//     <div className="flex gap-4  pb-4  ">
//       {/* Logo */}
//       <div className="w-14 h-14 flex-shrink-0">
//         {business.logoUrl ? (
//           <Image
//             src={business.logoUrl }
//             alt={business.name}
//             width={56}
//             height={56}
//             className="rounded-md w-auto object-cover"
//           />
//         ) : (
//           <div className="w-14 h-14 bg-gray-200 rounded-md flex items-center justify-center">
//             {business.name.charAt(0)}
//           </div>
//         )}
//       </div>

//       {/* Content */}
//       <div className="flex-1">
//         <h3 className="font-heading font-bold text-lg">{business.name}</h3>
//         <p className="text-sm text-gray-600">
//           {business.city}, {business.country}
//         </p>
//         <p className=" font-heading text-base text-black line-clamp-2 mt-1">
//           {business.description || "No description available."}
//         </p>

//         <div className="flex gap-4 text-sm text-gray-600 mt-2">
//           <span>💰 {latestFinancial?.revenue ? `${latestFinancial.revenue}M` : "N/A"} revenue</span>
//           <span>📈 ₹{business.sharePrice || "N/A"} / share</span>
//           <span>🏢 {business.sector || "General"}</span>
//         </div>
//       </div>
//     </div>
//     </WobbleCard>
//   );
// }

"use client"
import Image from "next/image";
import { WobbleCard } from "@/components/ui/wobble-card";
import { useRouter } from 'next/navigation'

export default function CompanyCard({ business }) {
  const latestFinancial = business.financials?.[0]; // assume latest is first
  console.log("business array passed on card", business);
  console.log("specific business ID",business.id);
  const businessId=business.id

  const router = useRouter()



  const handleBuy=(e)=>{
    e.stopPropagation()
    console.log("only button is clicked");
    
  }



  const handleNavigation=()=>{
    router.push(`/companies/${businessId}`)
  }
  

  return (
    <WobbleCard containerClassName="">
      <div className="flex gap-4 pb-4"  onClick={handleNavigation}>
        {/* Logo */}
        <div className="w-14 h-14 flex-shrink-0">
          {business.logoUrl ? (
            <Image
              src={business.logoUrl}
              alt={business.name}
              width={56}
              height={56}
              className="rounded-md w-auto object-cover"
            />
          ) : (
            <div className="w-14 h-14 bg-gray-200 rounded-md flex items-center justify-center">
              {business.name.charAt(0)}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="font-heading font-bold text-lg">{business.name}</h3>
          <p className="text-sm text-gray-600">
            {business.city}, {business.country}
          </p>
          <p className="font-heading text-base text-black line-clamp-2 mt-1">
            {business.description || "No description available."}
          </p>

          <div className="flex gap-4 text-sm text-gray-600 mt-2">
            <span>
              💰{" "}
              {latestFinancial?.revenue
                ? `${latestFinancial.revenue}M`
                : "N/A"}{" "}
              revenue
            </span>
            <span>📈 ₹{business.sharePrice || "N/A"} / share</span>
            <span>🏢 {business.sector || "General"}</span>
          </div>

          {/* Buy & Sell Buttons */}
          <div className="flex gap-3 mt-4">
            <button onClick={handleBuy} className="btn btn-outline btn-success">Buy</button>
            <button className="btn btn-outline btn-error">Sell</button>
          </div>
        </div>
      </div>
    </WobbleCard>
  );
}
