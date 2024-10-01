import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useTheme } from '@mui/material/styles';

type TOverviewTaskChartProps = {
    columns: IBoardColumn[] | undefined;
};

// Register necessary components
ChartJS.register(ArcElement, Tooltip, Legend);
export function OverviewTaskChart({ columns }: TOverviewTaskChartProps) {
    const { palette } = useTheme();

    const totalTaskCards = columns?.reduce(
        (total, column) => total + (column?.taskCards?.length || 0),
        0,
    );
    const highPriorityTaskCards = columns
        ?.map((column) => column.taskCards)
        ?.flat()
        ?.reduce((total: number = 0, taskCard: ICard) => {
            if (taskCard.priority === 'High') {
                return total + 1;
            } else return total;
        }, 0);

    const data = {
        labels: [
            'All',
            'High Priority',
            ...(columns?.map((column) => column.title) || []),
        ],
        datasets: [
            {
                label: '# of tasks',
                data: [
                    totalTaskCards,
                    highPriorityTaskCards,
                    ...(columns?.map((column) => column?.taskCards?.length) ||
                        []),
                ],
                backgroundColor: [
                    palette.common.white + '40',
                    palette.error.main + '40',
                    palette.secondary.main + '40',
                    palette.success.main + '40',
                    palette.warning.main + '40',
                ],
                borderRadius: 12,
            },
        ],
    };

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
