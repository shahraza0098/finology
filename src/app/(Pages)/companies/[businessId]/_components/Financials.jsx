import MetricsCard from "@/components/FinancialMetricsCard";


export default function FinancialsSection({ financials }) {
  return (
      <section id="financials" >
        <h2 className="text-xl font-bold mb-4 text-center">Financial Performance</h2>
        <div className="grid  md:grid-cols-4 gap-4">
          <div ><MetricsCard financials={financials[0].revenue} title={"Revenue"}/></div>
          <div ><MetricsCard financials={financials[0]?.netProfit} title={"Net Profit"}/></div>
          {/* <div className="bg-white p-4 shadow rounded-lg">Profit Margin: {financials[0]?.profitMargin}%</div>
          <div className="bg-white p-4 shadow rounded-lg">Operating Expenses: ₹{financials[0]?.operatingExpenses}M</div> */}
          <div ><MetricsCard financials={financials[0]?.profitMargin} title={"Profit Margin"}/></div>
          <div ><MetricsCard financials={financials[0]?.operatingExpenses} title={"Expenses"}/></div>
        </div>
      </section>
  );
}
