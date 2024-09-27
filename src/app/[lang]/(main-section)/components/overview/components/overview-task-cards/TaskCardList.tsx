import React from 'react';
import Box from '@mui/material/Box';
import { Divider, Stack, Typography } from '@mui/material';

import CustomCard from '@/components/custom-card/CustomCard';
import { TaskCard } from '@/app/[lang]/(main-section)/components/overview/components/overview-task-cards/TaskCard';
import { RepeatComponent } from '@utils/methods';

export function TaskCardList({
    cards,
    isLoadingTasks,
}: {
    cards: ICard[] | undefined;
    isLoadingTasks: boolean;
}) {
    return (
        <CustomCard
            outerBoxProps={{
                sx: {
                    gridRow: '1 / 3',
                    height: '100%',
                    background: ({ palette }) =>
                        `linear-gradient(135deg, ${palette.grey[600]},70%, ${palette.error.light})`,
                },
            }}
            innerBoxProps={{
                sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    p: '16px 16px',
                    gap: 1.5,
                    height: '100%',
                    background: ({ palette }) =>
                        `linear-gradient(45deg, ${palette.grey[800]} -25%, ${palette.grey[900]} 25%, ${palette.grey[900]} 50%, ${palette.grey[900]} 75%, ${palette.error.dark} 125%)`,
                },
            }}
        >
            <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-between'}
            >
                <Typography
                    variant={'h6'}
                    fontWeight={400}
                    lineHeight={'100%'}
                    fontSize={20}
                >
                    High Priority Cards
                </Typography>
            </Box>
            <Divider />
            <Stack
                gap={2}
                overflow={'auto'}
                height={'100%'}
                sx={{ overflowY: 'auto' }}
            >
                {isLoadingTasks ? (
                    <RepeatComponent
                        times={3}
                        render={(idx) => (
                            <TaskCard
                                cardInfo={undefined}
                                key={idx}
                                idx={idx}
                                isLoadingCard={isLoadingTasks}
                            />
                        )}
                    />
                ) : (
                    cards?.map((card, idx) => {
                        return (
                            <TaskCard
                                cardInfo={card}
                                idx={idx}
                                key={idx}
                                isLoadingCard={isLoadingTasks}
                            />
                        );
                    })
                )}
            </Stack>
        </CustomCard>
    );
}
