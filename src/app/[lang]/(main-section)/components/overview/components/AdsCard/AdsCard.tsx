// PromotedEvents.tsx
import React from 'react';
import Box from '@mui/material/Box';
import { Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import LogoIconSvg from '@assets/LogoIcon.svg';
import { MegaphoneIcon } from '@heroicons/react/24/outline';

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
                <Typography variant='h2' component='p' dir={'rtl'}>
                    {ad.title}
                </Typography>
                <Button
                    sx={{
                        color: 'common.white',
                        stroke: 'common.white',
                        background: `linear-gradient(to right, transparent,80%, ${ad.color})`,
                        maxHeight: 'auto',
                        height: 'auto',
                        fontFamily: 'Noto Sans',
                        zIndex: 1,
                    }}
                    fullWidth
                >
                    <MegaphoneIcon stroke={'inherit'} width={24} height={24} />
                    همین الان وارد شو
                </Button>
                <Image
                    src={LogoIconSvg}
                    alt={'Kaizen Icon'}
                    width={16}
                    height={16}
                    style={{
                        width: 250,
                        height: 250,
                        position: 'absolute',
                        left: -0,
                        bottom: -0,
                        opacity: '0.1',
                        zIndex: 0,
                    }}
                />
            </Stack>
        );
    } catch (error) {
        return <div>Error: {(error as Error).message}</div>;
    }
};

export default AdsCard;
