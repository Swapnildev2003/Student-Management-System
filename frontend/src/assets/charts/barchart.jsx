import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390];
const pData = [2400, 1398, 9800, 3908, 4800, 3800];
const xLabels = [
    'Mon',
    'Tue',
    'Wed',
    'Thur',
    'Fri',
    'Sat',
];

export default function SimpleBarChart() {
    return (
        <div style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", padding: "20px", backgroundColor: "white" }}>
            <BarChart
                width={900}
                height={500}
                series={[
                    { data: pData, label: 'ab', id: 'pvId', color: "#4C8CF8" },
                    { data: uData, label: 'pr', id: 'uvId', color: "#1FE6D1" },
                ]}
                xAxis={[{ data: xLabels, scaleType: 'band' }]} 
            />
        </div>
    );
}
