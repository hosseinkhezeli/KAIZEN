import React, { useState, useEffect } from 'react';
import { Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';

const LiveDateTime: React.FC = () => {
    const [dateTime, setDateTime] = useState<{ date: string; time: string }>({
        date: '',
        time: '',
    });

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const formattedDate = now
                .toISOString()
                .split('T')[0]
                .replace(/-/g, ':');
            const formattedTime = now.toTimeString().split(' ')[0];

            setDateTime({
                date: formattedDate,
                time: formattedTime,
            });
        };

        const intervalId = setInterval(updateDateTime, 1000);
        updateDateTime(); // Initial call to set the date and time immediately

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, []);
    console.log(dateTime.time.split(':'));
    const hour = dateTime.time.split(':')[0];
    const minute = dateTime.time.split(':')[1];
    const second = dateTime.time.split(':')[2];

    return (
        <Stack alignItems={'center'}>
            {/*<div>Date: {dateTime.date}</div>*/}
            {/*<div>Time: {dateTime.time}</div>*/}
            <Box
                display={'flex'}
                alignItems={'center'}
                gap={2}
                height={'min-content'}
                sx={{
                    backgroundColor: '#ffffff0a',
                    backdropFilter: 'blur(5px)',
                    px: 2,
                    borderRadius: 4,
                }}
            >
                <TimeColumn value={Number(hour)} />
                :
                <TimeColumn value={Number(minute)} />
                :
                <TimeColumn value={Number(second)} />
            </Box>
        </Stack>
    );
};

export default LiveDateTime;

const TimeColumn = ({ value }: { value: number }) => {
    return (
        <Stack
            height={'100%'}
            fontFamily={'Nunito'}
            sx={{
                boxShadow: 'inset 0px 0px 10px 10px rgba(0,0,0,1)',
                px: '2px',
                mixBlendMode: 'color',
            }}
        >
            <Typography
                fontSize={26}
                sx={{
                    opacity: 0.5,
                    display: 'block',
                    transform: 'scale(80%)',
                    transition: '0.3s ease all',
                    lineHeight: '100%',
                    mixBlendMode: 'color',
                }}
            >
                {(value === 0 ? 60 - 1 : value - 1).toString().padStart(2, '0')}
            </Typography>

            <Typography fontSize={26} sx={{ lineHeight: '100%' }}>
                {value.toString().padStart(2, '0')}
            </Typography>
            <Typography
                fontSize={26}
                sx={{
                    opacity: 0.5,
                    transform: 'scale(80%)',
                    transition: '0.3s ease all',
                    lineHeight: '100%',
                    mixBlendMode: 'color',
                }}
            >
                {(value === 60 ? 0 : value - 1).toString().padStart(2, '0')}
            </Typography>
        </Stack>
    );
};
