import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
    { id: 0, value: 10, color: "#1FE6D1" },
    { id: 1, value: 15, color: "#4C8CF8" },

];

export default function PieActiveArc() {
    return (

        <PieChart
            series={[
                {
                    data,
                    highlightScope: { faded: 'global', highlighted: 'item' },
                    faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                },
            ]}
            height={400}
            width={400}
        />
    );
}