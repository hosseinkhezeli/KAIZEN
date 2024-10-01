'use client';
//@3rd Party
import Image from 'next/image';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Mui
import { Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Assets
import LogoIconSvg from '@assets/LogoIcon.svg';
import LogoTypoSvg from '@assets/LogoType.svg';
import { introSm, introXs } from '@styles/animationKeyframes';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const KaizenLogo = () => {
    const { palette } = useTheme();
    return (
        <Stack
            sx={{
                flexBasis: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: {
                    xs: 'scale(200%) translateY(15%)',
                    sm: 'scale(200%) translateX(-25%)',
                },

                animation: {
                    xs: `${introXs} 0.5s 1s ease forwards`,
                    sm: `${introSm} 0.5s 1s ease forwards`,
                },
                placeItems: 'center',
                gap: 2,
            }}
        >
            <Image
                src={LogoIconSvg}
                alt={'Kaizen Icon'}
                width={16}
                height={16}
                style={{ width: '20%', height: 'auto', maxWidth: 200 }}
            />
            <Image
                src={LogoTypoSvg}
                alt={'Kaizen Typo Icon'}
                width={16}
                height={16}
                style={{
                    width: '20%',
                    height: 'auto',
                    paddingBottom: '2px',
                    maxWidth: 200,
                    filter: palette.mode === 'light' ? 'none' : 'brightness(3)',
                }}
            />
        </Stack>
    );
};

export default KaizenLogo;
