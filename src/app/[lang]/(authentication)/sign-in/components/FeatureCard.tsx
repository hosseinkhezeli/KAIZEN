'use client';
import { Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';

const FeatureCard = ({
    title,
    description,
    Icon,
}: {
    title: string;
    description: string;
    Icon: any;
}) => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                padding: '20px',
                background: 'rgba(0, 0, 0, 0.1)',
                boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px',
                backdropFilter: 'blur(20px)',
                transition:'0.3s ease background',
                border: '1px solid',
                borderColor: '#2C2E30',
                borderRadius: '24px',
                maxWidth: 300,
                minHeight: 200,
                position: 'relative',
                overflow: 'hidden',
                ":hover":{
                    background: 'linear-gradient(135deg, #2c2e30 -25%, #1a1f24 25%, #1a1f24 50%, #16202d 75%, #192b45 125%)',,
                }
            }}
        >
            <Stack sx={{}}>
                <Typography variant={'overline'}>{title}</Typography>
                <Typography variant={'caption'}>{description}</Typography>
            </Stack>
            <Box
                sx={{
                    position: 'absolute',
                    right: 0,
                    bottom: '-40%',
                    width: '50%',
                    height: '100%',
                    opacity: 0.3,
                }}
            >
                <Icon stroke={'white'} strokeWidth={'0.5'} />
            </Box>
        </Box>
    );
};

export default FeatureCard;
