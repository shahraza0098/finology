import React from 'react'
import PortfolioMetricsCard from '../../_components/PortfolioMetricsCard';

function DashboardMetricsCard({portfolioTransaction}) {

  console.log("this is portfolio hehehhee",portfolioTransaction)

        if (!portfolioTransaction) {
    return <div>No Portfolio Found. Start Investing</div>; // or null
  }

  console.log("object fetched", portfolioTransaction)

  const shares = portfolioTransaction.shares || [];

    //max investment and business name:

  const maxInvest = (shares) => {
  return shares.reduce(
    (acc, share) => {
      const investment = share.quantity * share.priceAtBuy;
      if (investment > acc.max) {
        return { max: investment, businessName: share.business.name };
      }
      return acc;
    },
    { max: 0, businessName: "" }
  );
};

const { max, businessName } = maxInvest(shares);
  return (
    <div>
      <div className="grid  md:grid-cols-3 gap-4">
              <div ><PortfolioMetricsCard number={`₹ ${portfolioTransaction.totalValue}`} title={"My Total Invesment"}/></div>
              <div ><PortfolioMetricsCard number={`₹ ${max}` } title={`Biggest Investment in ${businessName}`} /></div>
               <div ><PortfolioMetricsCard number={`${portfolioTransaction.shares.length}`} title={`Total Businesses Invested`}/></div>
             </div>
    </div>
  )
}

export default DashboardMetricsCard
