'use client';
//@3rd party
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
//_______________________________________________________________

//@Hooks
import { useOverveiwTaskChart } from '../../hooks/useOverveiwTaskChart';
//_______________________________________________________________

//@Types
export type TOverviewTaskChartProps = {
    columns: IBoardColumn[] | undefined;
};
//_______________________________________________________________
// Register necessary components
ChartJS.register(ArcElement, Tooltip, Legend);
//_______________________________________________________________

export function OverviewTaskChart({ columns }: TOverviewTaskChartProps) {
    const { data } = useOverveiwTaskChart({ columns });
    return (
        <Bar
            data={data}
            options={{
                responsive: true,
                font: { family: 'inherit' },
                normalized: true,
            }}
            height={'80%'}
            redraw={true}
        />
    );
}
