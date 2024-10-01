import React from 'react';
import { Avatar, Button, IconButton, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import LogoIconSvg from '@assets/LogoIcon.svg';
import LogoTypoSvg from '@assets/LogoType.svg';
import {
    ArrowLeftIcon,
    EllipsisHorizontalIcon,
    PlusIcon,
    UserIcon,
} from '@heroicons/react/24/outline';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { TGlobal } from '@i18n/dictionary/types/global';

const KaizenButton = ({ withoutType }: { withoutType?: boolean }) => {
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
                style={{ width: 32, height: 32 }}
            />
            {!withoutType && (
                <Image
                    src={LogoTypoSvg}
                    alt={'Kaizen Typo Icon'}
                    width={16}
                    height={16}
                    style={{
                        width: 'auto',
                        height: 16,
                        paddingBottom: '2px',
                        filter:
                            palette.mode === 'dark'
                                ? 'brightness(3)'
                                : 'brightness(0.3)',
                    }}
                />
            )}
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
            gap={1.5}
            alignItems={'center'}
            width={'100%'}
            justifyItems={'center'}
        >
            <Box
                display={'flex'}
                justifyContent={'space-between'}
                width={'100%'}
            >
                <KaizenButton withoutType={!open} />
            </Box>
            <Box
                display={'flex'}
                gap={2}
                alignItems={'center'}
                justifyContent={'space-between'}
                width={open ? '100%' : 'max-content'}
            >
                {open && (
                    <Box display={'flex'} alignItems={'center'} gap={0.5}>
                        <Avatar
                            variant={'rounded'}
                            sx={{
                                backgroundColor: 'grey.800',
                                border: '1px solid',
                                borderColor: 'divider',
                            }}
                        >
                            <UserIcon
                                width={20}
                                height={20}
                                stroke={'inherit'}
                            />
                        </Avatar>
                        <Typography variant={'caption'} fontWeight={500}>
                            Hossein Khezeli
                        </Typography>
                    </Box>
                )}
                <IconButton
                    sx={{ width: 'max-content', alignSelf: 'end' }}
                    onClick={() => onClick(!open)}
                >
                    {open ? (
                        <ArrowLeftIcon
                            width={14}
                            strokeWidth={3}
                            style={{
                                transform:
                                    direction === 'ltr'
                                        ? 'none'
                                        : 'rotate(180deg)',
                            }}
                        />
                    ) : (
                        <EllipsisHorizontalIcon width={14} strokeWidth={3} />
                    )}
                </IconButton>
            </Box>
            {open ? (
                <Button
                    color={'inherit'}
                    startIcon={<PlusIcon width={14} strokeWidth={3} />}
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
                    <PlusIcon width={14} strokeWidth={3} />
                </IconButton>
            )}
        </Stack>
    );
};

export default CustomDrawerHeader;
