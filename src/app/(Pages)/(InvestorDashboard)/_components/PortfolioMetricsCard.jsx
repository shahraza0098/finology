// import React from 'react'
// import { Plus } from 'lucide-react';
// import MetricsCard from "@/components/FinancialMetricsCard";
// function PortfolioMetricsCard({portfolioTransaction}) {
//     if (!portfolioTransaction) {
//     return <div>Loading portfolio...</div>; // or null
//   }

//   const shares = portfolioTransaction.shares || [];

//     //max investment and business name:

//   const maxInvest = (shares) => {
//   return shares.reduce(
//     (acc, share) => {
//       const investment = share.quantity * share.priceAtBuy;
//       if (investment > acc.max) {
//         return { max: investment, businessName: share.business.name };
//       }
//       return acc;
//     },
//     { max: 0, businessName: "" }
//   );
// };

// const { max, businessName } = maxInvest(shares);
    


    
//   return (
//     <div>
//       {/* <div >
//         <div>
//             <h3>My Total Investment</h3>
//             <Plus />
//         </div>
//         <div>
//             <h2>{portfolioTransaction.totalValue}</h2>
//         </div>
//         <div>

//         </div>
//       </div> */}
//       <div className="grid  md:grid-cols-3 gap-4">
//           <div ><MetricsCard financials={portfolioTransaction.totalValue} title={"My Total Investment"}/></div>
//           <div ><MetricsCard financials={max} title={`Biggest Investment in ${businessName}`}/></div>
//           {/* <div className="bg-white p-4 shadow rounded-lg">Profit Margin: {financials[0]?.profitMargin}%</div>
//           <div className="bg-white p-4 shadow rounded-lg">Operating Expenses: ₹{financials[0]?.operatingExpenses}M</div> */}
//           <div ><MetricsCard financials={portfolioTransaction.totalValue} title={"My Total Investment"}/></div>
//         </div>

//     </div>
//   )
// }

// export default PortfolioMetricsCard


import React from "react";
import { Plus } from "lucide-react";

function PortfolioMetricsCard({ number, title }) {




  

  return (
    <div className="p-4">
      <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col gap-4 border border-gray-100">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-500 whitespace-nowrap overflow-x-auto scrollbar-thin ">
            {title}
          </h3>
          <button className="p-2 rounded-full bg-blue-50 hover:bg-blue-100 transition-colors">
            <Plus className="w-4 h-4 text-blue-600" />
          </button>
        </div>

        {/* Value */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            {number.toLocaleString() || "0"}
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Updated just now
          </p>
        </div>

        {/* Footer / Placeholder */}
        <div className="flex justify-between items-center pt-2 border-t border-gray-100">
          <span className="text-xs text-gray-500">Growth</span>
          <span className="text-sm font-semibold text-green-600">+12.5%</span>
        </div>
      </div>
    </div>
  );
}

export default PortfolioMetricsCard;

