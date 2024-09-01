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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const KaizenLogo = () => {
    const { palette } = useTheme();
    return (
        <Stack
            sx={{
                flexBasis: '100%',
                placeItems: 'center',
                justifyContent: 'center',
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
