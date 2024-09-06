import React from 'react';
import { Avatar, Button, IconButton, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import LogoIconSvg from '@assets/LogoIcon.svg';
import LogoTypoSvg from '@assets/LogoType.svg';
import {
    ArrowLongLeftIcon,
    EllipsisHorizontalIcon,
    PlusIcon,
} from '@heroicons/react/24/outline';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { TGlobal } from '@i18n/dictionary/types/global';

const KaizenButton = () => {
    const { palette } = useTheme();
    return (
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
    );
};

const CustomDrawerHeader = ({
    open,
    onClick,
    dictionary,
}: {
    open: boolean;
    onClick: (open: boolean) => void;
    dictionary: TGlobal;
}) => {
    const { direction } = useTheme();
    return (
        <Stack
            gap={2}
            alignItems={'center'}
            width={'100%'}
            justifyItems={'center'}
        >
            <Box
                display={'flex'}
                justifyContent={'space-between'}
                width={open ? '100%' : 'max-content'}
            >
                {open && <KaizenButton />}
                <IconButton
                    sx={{ width: 'max-content', alignSelf: 'end' }}
                    onClick={() => onClick(!open)}
                >
                    {open ? (
                        <ArrowLongLeftIcon
                            width={16}
                            style={{
                                transform:
                                    direction === 'ltr'
                                        ? 'none'
                                        : 'rotate(180deg)',
                            }}
                        />
                    ) : (
                        <EllipsisHorizontalIcon width={16} />
                    )}
                </IconButton>
            </Box>
            <Box
                display={'flex'}
                gap={1}
                alignItems={'center'}
                width={open ? '100%' : 'max-content'}
            >
                <Avatar
                    variant={'rounded'}
                    sx={{
                        width: { xs: 34, lg: 40 },
                        height: { xs: 34, lg: 40 },
                    }}
                />
                {open && (
                    <Typography variant={'caption'} fontWeight={600}>
                        Hossein Khezeli
                    </Typography>
                )}
            </Box>
            {open ? (
                <Button
                    color={'inherit'}
                    startIcon={<PlusIcon width={16} />}
                    fullWidth
                    sx={{ width: open ? '100%' : 'max-content' }}
                >
                    {dictionary.newProject}
                </Button>
            ) : (
                <IconButton
                    sx={{
                        width: open ? '100%' : 'max-content',
                        alignSelf: open ? 'end' : 'none',
                    }}
                    onClick={() => onClick(!open)}
                >
                    <PlusIcon width={16} />
                </IconButton>
            )}
        </Stack>
    );
};

export default CustomDrawerHeader;
