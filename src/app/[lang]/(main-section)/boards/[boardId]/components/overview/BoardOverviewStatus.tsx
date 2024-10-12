//@3rd Party
import React from 'react';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
Chart.register(CategoryScale);
//_______________________________________________________________

//@MUI
import Box from '@mui/material/Box';
import { styled } from '@mui/material';
//_______________________________________________________________

//@Components
import CustomCard from '@components/custom-card/CustomCard';
import { OverviewTaskChart } from '@/app/[lang]/(main-section)/boards/[boardId]/components/overview/OverviewTaskChart';
//_______________________________________________________________

export function BoardOverviewStatus({
    boardInfo,
}: {
    boardInfo: IBoard | undefined;
}) {
    return (
        <Container>
            <CustomCard>
                <OverviewTaskChart columns={boardInfo?.columns} />
            </CustomCard>
        </Container>
    );
}

const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    width: '100%',
    height: '100%',
    gap: 8,
}));
