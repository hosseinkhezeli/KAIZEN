import React from 'react';
import Box from '@mui/material/Box';
import CustomCard from '@components/custom-card/CustomCard';

export function BoardOverviewStatus({
    boardInfo,
}: {
    boardInfo: IBoard | undefined;
}) {
    const columns = boardInfo?.columns?.length;
    const totalTaskCards = boardInfo?.columns.reduce(
        (total, column) => total + (column?.taskCards?.length || 0),
        0,
    );
    const highPriorityTaskCards = boardInfo?.columns
        ?.map((column) => column.taskCards)
        ?.flat()
        ?.reduce((total: number = 0, taskCard: ICard) => {
            if (taskCard.priority === 'High') {
                return total + 1;
            } else total;
        }, 0);
    console.log(boardInfo?.columns?.map((column) => column.taskCards)?.flat());
    return (
        <Box display={'flex'} width={'100%'} gap={2}>
            <CustomCard>Columns : {columns}</CustomCard>
            <CustomCard>Task Cards : {totalTaskCards}</CustomCard>
            <CustomCard>
                High Priority Tasks : {highPriorityTaskCards}
            </CustomCard>
        </Box>
    );
}
