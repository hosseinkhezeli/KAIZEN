import React from 'react';
import Box from '@mui/material/Box';
import CustomCard from '@components/custom-card/CustomCard';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { OverviewTaskChart } from '@/app/[lang]/(main-section)/boards/[boardId]/components/overview/OverviewTaskChart';
Chart.register(CategoryScale);
export function BoardOverviewStatus({
    boardInfo,
}: {
    boardInfo: IBoard | undefined;
}) {
    return (
        <Box display={'flex'} width={'100%'} height={'100%'} gap={2}>
            <CustomCard>
                <OverviewTaskChart columns={boardInfo?.columns} />
            </CustomCard>
        </Box>
    );
}
