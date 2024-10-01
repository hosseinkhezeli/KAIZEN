import React from 'react';
import { Stack, Typography } from '@mui/material';
import CustomCard from '@/components/custom-card/CustomCard';
import AdsCard from '@/app/[lang]/(main-section)/components/overview/components/ads-card/index';

const Ads = () => {
    return (
        <Stack sx={{ gridRow: '3/ 4' }}>
            <Typography
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                Ads
                <Typography color={'text.disabled'}>
                    powered by
                    <Typography color={'text.secondary'}>
                        {' '}
                        Datsyar.io©
                    </Typography>
                </Typography>
            </Typography>

            <CustomCard
                outerBoxProps={{
                    sx: {
                        height: '100%',
                    },
                }}
                innerBoxProps={{
                    sx: {
                        display: 'flex',
                        flexDirection: 'column',
                        p: '0',
                        gap: 1.5,
                        height: '100%',
                    },
                }}
            >
                <Stack gap={2} overflow={'auto'} height={'100%'}>
                    <AdsCard />
                </Stack>
            </CustomCard>
        </Stack>
    );
};

export default Ads;
