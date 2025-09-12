import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Q1 2024',
  'Q2 2024',
  'Q3 2024',
  'Q4 2024',
  'Q1 2025',
  'Q2 2025',
  'Q3 2025',
];

export default function SimpleBarChart() {
  return (
    <BarChart
      height={300}
      series={[
        { data: pData, label: 'revenue', id: 'pvId' },
        { data: uData, label: 'profit', id: 'uvId' },
      ]}
      xAxis={[{ data: xLabels }]}
      yAxis={[{ width: 50 }]}
    />
  );
}