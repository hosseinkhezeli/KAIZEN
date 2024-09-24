import React, { useEffect, useState } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { MegaphoneIcon } from '@heroicons/react/24/outline';
import { LoadingSvg } from '@components/custom-loading/CustomLoadingIndicator';
import Box from '@mui/material/Box';

interface Event {
    title: string;
    // Add other relevant fields based on the API response structure
}

interface PromotedEventsResponse {
    data: Event[];
}

const fetchPromotedEvents = async (): Promise<PromotedEventsResponse> => {
    const response = await fetch('https://api.dastyar.io/cms/promoted-events');

    if (!response.ok) {
        throw new Error('Failed to fetch promoted events');
    }

    return response.json();
};

const usePromotedEvents = () => {
    const [ad, setAd] = useState<Event | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const events = await fetchPromotedEvents();
                const rndIdx = Math.floor(Math.random() * events.data.length);
                setAd(events.data[rndIdx]);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    return { ad, loading, error };
};

const AdsCard: React.FC = () => {
    const { ad, loading, error } = usePromotedEvents();

    if (loading) {
        return <LoadingSvg />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

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
                    {ad?.title}
                </Typography>
                <Button
                    sx={{
                        color: 'common.white',
                        stroke: 'common.white',
                        maxHeight: 'auto',
                        height: 'auto',
                        fontFamily: 'Noto Sans',
                        zIndex: 1,
                        mx: 'auto',
                    }}
                >
                    <MegaphoneIcon stroke={'inherit'} width={24} height={24} />
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
};

export default AdsCard;
