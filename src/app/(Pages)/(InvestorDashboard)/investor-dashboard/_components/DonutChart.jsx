import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';



export default function DonutChart({portfolio}) {

    // Your dynamic data
const rawData =  portfolio?.shares || []

// Define a set of colors for the chart slices
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28DFF', '#FF6384', '#36A2EB', '#FFCE56'];

// Transform the raw data into the format expected by PieChart
const transformedData = rawData.map((item, index) => ({
  label: item.business.name,
  value: item.quantity,
  color: colors[index % colors.length], // Cycle through colors
}));

const settings = {
  margin: { right: 5 },
  width: 400, // Increased width for better visibility
  height: 300, // Increased height for better visibility
  hideLegend: false, // Showing legend to display labels
};



  return (
    <PieChart
      series={[{ innerRadius: 50, outerRadius: 100, data: transformedData, arcLabel: 'value' }]}
      {...settings}
    />
  );
}