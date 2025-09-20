// import * as React from 'react';
// import { LineChart } from '@mui/x-charts/LineChart';

// export default function BasicLineChart() {
//   return (
//     <LineChart
//       xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
//       series={[
//         {
//           data: [2, 5.5, 2, 8.5, 1.5, 5],
//         },
//       ]}
//       height={300}
//     />
//   );
// }




// "use client";
// import * as React from "react";
// import { LineChart } from "@mui/x-charts/LineChart";
// import dayjs from "dayjs";

// export default function PortfolioLineChart({ transaction }) {
//   console.log("Line chart transaction Inspection", transaction);

//   // Prepare chart data
//   const chartData = transaction.map((item) => ({
//     x: new Date(item.createdAt).getTime(), // ✅ numeric timestamp
//     y: item.quantity,
//     price: item.price,
//   }));

//   // Detect local maxima
//   const maximaIndexes = chartData.reduce((acc, point, i, arr) => {
//     if (
//       i > 0 &&
//       i < arr.length - 1 &&
//       point.y > arr[i - 1].y &&
//       point.y > arr[i + 1].y
//     ) {
//       acc.push(i);
//     }
//     return acc;
//   }, []);

//   return (
//     <LineChart
//       xAxis={[
//         {
//           data: chartData.map((d) => d.x),
//           valueFormatter: (val) => dayjs(val).format("HH:mm"), // ✅ format labels
//           label: "Created At",
//         },
//       ]}
//       series={[
//         {
//           data: chartData.map((d) => d.y),
//           label: "Quantity",
//           area: true,
//           showMark: true,
//         },
//       ]}
//       height={400}
//       tooltip={{
//         trigger: "axis",
//         formatter: (params) => {
//           const i = params[0].dataIndex;
//           if (maximaIndexes.includes(i)) {
//             return `⏱ ${dayjs(chartData[i].x).format("HH:mm")}<br/>Qty: ${
//               chartData[i].y
//             }<br/>💰 Price: $${chartData[i].price}`;
//           }
//           return `⏱ ${dayjs(chartData[i].x).format("HH:mm")}<br/>Qty: ${
//             chartData[i].y
//           }`;
//         },
//       }}
//     />
//   );
// }



"use client";
import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import dayjs from "dayjs";

export default function PortfolioLineChart({ transaction }) {
  console.log("Line chart transaction Inspection", transaction);

  // ✅ Group transactions by month
  const monthlyData = transaction.reduce((acc, item) => {
    const monthKey = dayjs(item.createdAt).format("YYYY-MM"); // e.g. "2025-09"
    if (!acc[monthKey]) {
      acc[monthKey] = { month: monthKey, totalQuantity: 0, prices: [] };
    }
    acc[monthKey].totalQuantity += item.quantity;
    acc[monthKey].prices.push(item.price);
    return acc;
  }, {});

  // Convert to array sorted by month
  const chartData = Object.values(monthlyData).sort(
    (a, b) => dayjs(a.month).valueOf() - dayjs(b.month).valueOf()
  );

  return (
    <LineChart
      xAxis={[
        {
          data: chartData.map((d) => dayjs(d.month).toDate()), // ✅ Use Date
          valueFormatter: (val) => dayjs(val).format("MMM YYYY"), // ✅ "Sep 2025"
          label: "Month",
        },
      ]}
      series={[
        {
          data: chartData.map((d) => d.totalQuantity),
          label: "Total Shares Bought",
          area: true,
          showMark: true,
        },
      ]}
      height={400}
      tooltip={{
        trigger: "axis",
        formatter: (params) => {
          const i = params[0].dataIndex;
          return `📅 ${dayjs(chartData[i].month).format("MMMM YYYY")}<br/>🟢 Total Qty: ${chartData[i].totalQuantity}`;
        },
      }}
    />
  );
}


