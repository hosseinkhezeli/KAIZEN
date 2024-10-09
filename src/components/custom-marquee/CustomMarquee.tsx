'use client';
import Marquee from 'react-fast-marquee';
import { FC, ReactNode } from 'react';
import Box from '@mui/material/Box';

interface MarqueeProps {
    components: ReactNode[];
    speed?: number;
}

const CustomMarquee: FC<MarqueeProps> = ({ components, speed = 100 }) => {
    return (
        <>
            <Marquee style={{ width: '100%' }} speed={speed}>
                <Box
                    width={'max-content'}
                    display={'flex'}
                    justifyContent={'space-between'}
                >
                    {components?.map((component, idx) => (
                        <Box
                            key={idx}
                            width={'max-content'}
                            sx={{ opacity: 0.5 }}
                        >
                            {component}
                        </Box>
                    ))}
                </Box>
            </Marquee>
        </>
    );
};

export default CustomMarquee;
