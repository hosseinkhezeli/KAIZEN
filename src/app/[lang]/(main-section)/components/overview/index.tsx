'use client';
import React from 'react';
import useOverview from '@/app/[lang]/(main-section)/hooks/useOverview';
import {
    Container,
    Divider,
    LinearProgress,
    Skeleton,
    Stack,
    Typography,
} from '@mui/material';
import BoardCard from '@/app/[lang]/(main-section)/components/overview/components/BoardCard';
import Box from '@mui/material/Box';
import { TDashboard } from '@i18n/dictionary/types/dashboard';
import { RepeatComponent } from '@utils/methods';

const Overview = ({ dictionary }: { dictionary: TDashboard }) => {
    const { isLoadingDashboard, dashboardRes } = useOverview();
    return (
        <Container
            sx={{ mx: '0', display: 'flex', flexDirection: 'column', gap: 2 }}
        >
            {isLoadingDashboard && <LinearProgress />}
            <Typography variant={'h4'} fontWeight={400}>
                {dictionary.overview}
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    p: '8px 16px',
                    border: '1px solid',
                    borderColor: 'grey.200',
                    borderRadius: 3,
                    gap: 2,
                    backgroundColor: 'background.paper',
                    minHeight: 60,
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant={'caption'}>
                        Ongoing Boards :
                    </Typography>
                    <Typography variant={'body2'} fontWeight={600}>
                        {dashboardRes?.count}
                    </Typography>
                </Box>
                <Divider
                    orientation={'vertical'}
                    sx={{
                        borderStyle: 'dotted',
                        borderRightWidth: '2px',
                        height: '42px',
                    }}
                />
            </Box>

            <Stack
                sx={{
                    p: '16px 16px',
                    border: '1px solid',
                    borderColor: 'grey.200',
                    borderRadius: 3,
                    gap: 2,
                    backgroundColor: 'background.paper',
                }}
            >
                <Typography
                    variant={'body1'}
                    fontWeight={400}
                    lineHeight={'100%'}
                >
                    {dictionary.boards}
                </Typography>
                <Divider
                    sx={{ borderStyle: 'dotted', borderBottomWidth: '2px' }}
                />
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    {isLoadingDashboard ? (
                        <RepeatComponent
                            times={3}
                            render={(index) => (
                                <Skeleton
                                    key={index}
                                    variant='rectangular'
                                    width={'100%'}
                                    height={'100%'}
                                    sx={{
                                        p: '4px 8px',
                                        border: '1px solid',
                                        borderColor: 'grey.200',
                                        borderRadius: 3,
                                        flexBasis: {
                                            xs: '100%',
                                            sm: '50%',
                                            md: '33%',
                                        },
                                        minHeight: '20vw',
                                        position: 'relative',
                                        gap: 1,
                                    }}
                                />
                            )}
                        />
                    ) : (
                        dashboardRes?.data?.map((boardInfo, idx) => (
                            <BoardCard boardInfo={boardInfo} key={idx} />
                        ))
                    )}
                </Box>
            </Stack>
        </Container>
    );
};

export default Overview;
