'use client';
//@3rd Party
import Image from 'next/image';
import Link from 'next/link';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Mui
import { AppBar, Toolbar, Avatar } from '@mui/material';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Assets
import LogoIconSvg from '../../../public/LogoIcon.svg';
import LogoTypoSvg from '../../../public/LogoType.svg';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const CustomAppbar = ({ onClick }: { onClick: () => void }) => {
    return (
        <>
            <AppBar position='static'>
                <Toolbar
                    sx={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
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
