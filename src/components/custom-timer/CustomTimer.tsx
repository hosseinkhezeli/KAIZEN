import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

const CustomTimer = ({ startTime }: { startTime?: Date | string }) => {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState('00:00:00');

    const initTime = new Date(startTime!);

    const showTimer = (ms: number) => {
        const second = Math.floor((ms / 1000) % 60)
            .toString()
            .padStart(2, '0');
        const minute = Math.floor((ms / 1000 / 60) % 60)
            .toString()
            .padStart(2, '0');
        const hour = Math.floor(ms / 1000 / 60 / 60).toString();
        setTime(hour + ':' + minute + ':' + second);
    };

    useEffect(() => {
        const id = setInterval(() => {
            const left = count + (Number(new Date()) - Number(initTime));
            setCount(left);
            showTimer(left);
            if (left <= 0) {
                setTime('00:00:00');
                clearInterval(id);
            }
        }, 1);
        return () => clearInterval(id);
    }, [startTime]);
    return (
        <>
            <Typography
                color={'info.main'}
                variant={'caption3.medium'}
                sx={{
                    p: '4px 8px',
                    backgroundColor: 'info.1',
                    borderRadius: 1,
                    borderRight: '1px solid',
                    borderColor: 'info.3',
                }}
            >
                {time}
            </Typography>
        </>
    );
};

export default CustomTimer;
