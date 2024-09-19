'use client';
import Marquee from 'react-fast-marquee';
import { FC, ReactNode } from 'react';
import Box from '@mui/material/Box';

interface MarqueeProps {
    components: ReactNode[];
    speed?: number;
}

const CustomMarquee: FC<MarqueeProps> = ({ components, speed = 50 }) => {
    return (
        <>
            <Marquee style={{ width: '100%' }} speed={100}>
                <Box
                    width={'100%'}
                    display={'flex'}
                    justifyContent={'space-between'}
                    mx={'50vw'}
                    gap={10}
                >
                    {components?.map((component, idx) => (
                        <Box key={idx}>{component}</Box>
                    ))}
                </Box>
            </Marquee>
        </>
    );
};

export default CustomMarquee;
