// PromotedEvents.tsx
import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import LogoIconSvg from '@assets/LogoIcon.svg';
import { MegaphoneIcon } from '@heroicons/react/24/outline';
import CustomLoadingIndicator, {
    LoadingSvg,
} from '@components/custom-loading/CustomLoadingIndicator';
import Box from '@mui/material/Box';

const fetchPromotedEvents = async (): Promise<any> => {
    const response = await fetch('https://api.dastyar.io/cms/promoted-events');

    if (!response.ok) {
        throw new Error('Failed to fetch promoted events');
    }

    const data = await response.json();
    return data;
};

const AdsCard: React.FC = async () => {
    try {
        const events = await fetchPromotedEvents();
        const rndIdx = Math.floor(
            Math.random() * (events?.data?.length - 1) + 1,
        );
        const ad = events?.data?.[rndIdx];
        return (
            <Stack
                fontFamily={'Noto Sans'}
                sx={{
                    direction: 'rtl',
                    position: 'relative',
                    height: '100%',
                    overflow: 'hidden',
                    justifyContent: 'space-between',
                }}
            >
                <Stack
                    sx={{
                        width: '100%',
                        height: '100%',
                        backdropFilter: 'blur(10px)',
                        backgroundColor: '#FFFFFF20',
                        borderRadius: 6,
                        p: 2,
                        justifyContent: 'space-evenly',
                    }}
                >
                    <Typography component='p' dir={'rtl'} textAlign={'center'}>
                        {ad.title}
                    </Typography>
                    <Button
                        sx={{
                            color: 'common.white',
                            stroke: 'common.white',
                            // background: `linear-gradient(to right, transparent,80%, ${ad.color})`,
                            maxHeight: 'auto',
                            height: 'auto',
                            fontFamily: 'Noto Sans',
                            zIndex: 1,
                            mx: 'auto',
                        }}
                    >
                        <MegaphoneIcon
                            stroke={'inherit'}
                            width={24}
                            height={24}
                        />
                        همین الان وارد شو
                    </Button>
                </Stack>

                <Box
                    width={100}
                    height={100}
                    mx={'auto'}
                    sx={{
                        mixBlendMode: 'lighten',
                        position: 'absolute',
                        top: '-20%',
                        left: '50%',
                        zIndex: 1,
                    }}
                >
                    <LoadingSvg />
                </Box>
            </Stack>
        );
    } catch (error) {
        return <div>Error: {(error as Error).message}</div>;
    }
};

export default AdsCard;
