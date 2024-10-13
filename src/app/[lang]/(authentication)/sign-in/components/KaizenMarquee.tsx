'use client';
//@3rd Party
import Image from 'next/image';
// ___________________________________________________________________

//@Mui
import { Container } from '@mui/material';
// ___________________________________________________________________

//@Component
import Marquee from '@components/custom-marquee/CustomMarquee';
// ___________________________________________________________________

//@Assets
import LogoTypoSvg from '@assets/LogoType.svg';
// ___________________________________________________________________

export function KaizenMarquee() {
    const values = Array.from({ length: 10 }, (_, idx) => (
        <Image
            key={idx}
            src={LogoTypoSvg}
            alt={'Kaizen Typo Icon'}
            width={16}
            height={16}
            style={{
                width: '80%',
                height: 'auto',
                opacity: 0.2,
            }}
        />
    ));
    return (
        <Container
            sx={{
                position: 'absolute',
                bottom: '-70%',
                right: 0,
                width: '200%',
                height: '200%',
                zIndex: 0,
                transform: 'rotate(45deg)',
            }}
        >
            {[70, 40, 80, 60, 50, 70, 80].map((speed, idx) => (
                <Marquee key={idx} components={values} speed={speed} />
            ))}
        </Container>
    );
}
