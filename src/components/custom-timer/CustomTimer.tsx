//@3rd Party
import { useEffect, useState, useRef, FC } from 'react';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Mui
import { Typography } from '@mui/material';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Types
interface CustomTimerProps {
    startTime?: Date | string;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const CustomTimer: FC<CustomTimerProps> = ({ startTime }) => {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState<string>('00:00:00');
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const initTime = startTime ? new Date(startTime).getTime() : Date.now();

    const formatTime = (ms: number): string => {
        const seconds = Math.floor((ms / 1000) % 60)
            .toString()
            .padStart(2, '0');
        const minutes = Math.floor((ms / 1000 / 60) % 60)
            .toString()
            .padStart(2, '0');
        const hours = Math.floor(ms / 1000 / 60 / 60)
            .toString()
            .padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            const elapsedTime = Date.now() - initTime + count;
            setCount(elapsedTime);
            setTime(formatTime(elapsedTime));

            if (elapsedTime <= 0) {
                clearInterval(intervalRef.current!);
                setTime('00:00:00');
            }
        }, 1000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [count, initTime]);

    return (
        <Typography
            color={'info.main'}
            variant={'body2'}
            sx={{
                p: '4px 8px',
                backgroundColor: 'info.1',
                borderRadius: 1,
                borderRight: '1px solid',
                borderColor: 'info.3',
            }}
            aria-live='polite'
        >
            {time}
        </Typography>
    );
};

export default CustomTimer;
