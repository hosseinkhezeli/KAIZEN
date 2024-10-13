'use client';
//@3rd Party
import Marquee from 'react-fast-marquee';
import { FC, ReactNode } from 'react';
//______________________________________________________________

//@Mui
import Box from '@mui/material/Box';
import { styled } from '@mui/material';
//______________________________________________________________

//@Types
interface MarqueeProps {
    components: ReactNode[];
    speed?: number;
}
//______________________________________________________________

const CustomMarquee: FC<MarqueeProps> = ({ components, speed = 100 }) => {
    return (
        <>
            <Marquee style={{ width: '100%' }} speed={speed}>
                <Container>
                    {components?.map((component, idx) => (
                        <Box
                            key={idx}
                            width={'max-content'}
                            sx={{ opacity: 0.5 }}
                        >
                            {component}
                        </Box>
                    ))}
                </Container>
            </Marquee>
        </>
    );
};

export default CustomMarquee;

const Container = styled(Box)(() => ({
    width: 'max-content',
    display: 'flex',
    justifyContent: 'space-between',
}));
