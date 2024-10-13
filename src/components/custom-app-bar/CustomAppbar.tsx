'use client';
//@3rd Party
import Image from 'next/image';
import Link from 'next/link';
//______________________________________________________________


//@Mui
import { AppBar, Toolbar, Avatar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
//______________________________________________________________


//@Assets
import LogoIconSvg from '@assets/LogoIcon.svg';
import LogoTypoSvg from '@assets/LogoType.svg';
//______________________________________________________________


const CustomAppbar = ({ onClick }: { onClick?: () => void }) => {
    const { direction, palette } = useTheme();
    return (
        <>
            <AppBar position='static'>
                <Toolbar
                    sx={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        direction: direction === 'ltr' ? 'ltr' : 'rtl',
                    }}
                >
                    <Link
                        href={'/'}
                        style={{
                            display: 'flex',
                            alignItems: 'baseline',
                            gap: 4,
                        }}
                    >
                        <Image
                            src={LogoIconSvg}
                            alt={'Kaizen Icon'}
                            width={16}
                            height={16}
                            style={{ width: 28, height: 28 }}
                        />
                        <Image
                            src={LogoTypoSvg}
                            alt={'Kaizen Typo Icon'}
                            width={16}
                            height={16}
                            style={{
                                width: 'auto',
                                height: 14,
                                paddingBottom: '2px',
                                filter:
                                    palette.mode === 'dark'
                                        ? 'brightness(3)'
                                        : 'brightness(0.3)',
                            }}
                        />
                    </Link>
                    <Avatar onClick={onClick} variant={'rounded'} />
                </Toolbar>
            </AppBar>
        </>
    );
};

export default CustomAppbar;
