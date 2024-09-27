import React, { FC } from 'react';
import { EventCardProvider } from '@/app/[lang]/(main-section)/components/overview/components/overview-events/hooks/useEventCard';
import CustomCard from '@components/custom-card/CustomCard';
import Box from '@mui/material/Box';
import { Divider, Stack, Typography } from '@mui/material';
import { Theme } from '@mui/material/styles';
import EventCardHeader from '@/app/[lang]/(main-section)/components/overview/components/overview-events/EventCardHeader';
import EventCard from '@/app/[lang]/(main-section)/components/overview/components/overview-events/EventCard';
interface TEvents {
    boards?: IGetDashboardData[];
    isLoading?: boolean;
    count: number | undefined;
}
const EventsList: FC<TEvents> = ({ boards, isLoading, count }) => {
    return (
        <EventCardProvider>
            <CustomCard
                outerBoxProps={{
                    sx: {
                        gridRow: '1 / 2',
                        height: '100%',
                        background: (theme: Theme) => theme.palette.grey[700],
                    },
                }}
                innerBoxProps={{
                    sx: {
                        display: 'flex',
                        flexDirection: 'column',
                        p: '16px 16px',
                        gap: 1.5,
                        height: '100%',
                        background: (theme: Theme) =>
                            theme.palette.background?.paper,
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
                        Events
                    </Typography>
                    <EventCardHeader totalCount={count || 0} />
                </Box>
                <Divider />

                <Stack gap={2} overflow={'auto'} height={'100%'}>
                    <EventCard boardInfo={boards} isLoadingBoard={isLoading} />
                </Stack>
            </CustomCard>
        </EventCardProvider>
    );
};

export default EventsList;
