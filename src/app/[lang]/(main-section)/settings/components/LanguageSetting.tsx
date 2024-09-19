'use client';
import React, { FC, useTransition } from 'react';
import { useDispatch } from 'react-redux';
import { setLang, useCommon } from '@states/global/globalSlice';
import { Typography } from '@mui/material';
import SvgIranFlag from '@assets/icon/ir.svg';
import SvgUSAFlag from '@assets/icon/us.svg';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { Locale } from '@/i18n';
import { usePathname, useRouter } from 'next/navigation';
import { pop } from '@styles/animationKeyframes';

type TlanguageOptions = {
    label: string;
    id: Locale;
    icon: string;
};

const LanguageSetting = () => {
    const pathname = usePathname();
    const [isNavigating, startNavigation] = useTransition();
    const { push: navigateTo } = useRouter();
    const dispatch = useDispatch();
    const { lang } = useCommon();
    const onClickHandle = (id: Locale) => {
        startNavigation(() => {
            dispatch(setLang(id));
            if (pathname.startsWith('/fa')) {
                {
                }
                navigateTo(pathname.split('/fa')[1]);
            } else {
                navigateTo(`/${id}${pathname}`);
            }
        });
    };

    return (
        <>
            <Typography
                variant='body1'
                fontWeight={500}
                sx={{
                    opacity: '0',
                    animation: `${pop} 0.2s ease  forwards`,
                }}
            >
                Select your language
            </Typography>
            <Typography
                variant='body2'
                sx={{
                    opacity: '0',
                    animation: `${pop} 0.2s ease 0.1s forwards`,
                }}
            >
                Feel free to contribute and add your native language!
            </Typography>
            <Box
                width={'max-content'}
                display={'grid'}
                gridTemplateColumns={'1fr 1fr'}
                gap={2}
            >
                {languageOptions.map((option, idx) => (
                    <LanguageOptionButton
                        key={idx}
                        option={option}
                        idx={idx}
                        onClickHandle={onClickHandle}
                        isSelected={option.id === lang}
                    />
                ))}
            </Box>
        </>
    );
};

export default LanguageSetting;

const languageOptions: TlanguageOptions[] = [
    {
        label: 'فارسی',
        id: 'fa',
        icon: SvgIranFlag,
    },
    {
        label: 'English-Us',
        id: 'en',
        icon: SvgUSAFlag,
    },
];

const LanguageOptionButton = ({
    idx,
    option,
    onClickHandle,
    isSelected,
}: {
    idx: number;
    option: TlanguageOptions;
    onClickHandle: (id: Locale) => void;
    isSelected: boolean;
}) => {
    return (
        <Box
            key={idx}
            sx={{
                opacity: '0',
                animation: `${pop} 0.2s ease 0.${idx * 2}s forwards`,
                width: 'auto',
                borderRadius: '8px',
                padding: '4px 8px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid',
                borderColor: isSelected ? 'primary.main' : 'divider',
                cursor: 'pointer',
                transition: '0.2s ease all',
                ':hover': {
                    backgroundColor: '#00000010',
                    transform: 'scale(101%)',
                },
                zIndex: 2,
                fontFamily: option.id === 'fa' ? 'Noto Sans' : 'Roboto Flex',
            }}
            onClick={() => onClickHandle(option.id as Locale)}
        >
            <Image
                src={option.icon}
                alt={option.label}
                width={160}
                height={90}
                className={'hidden-flag'}
                style={{
                    maxHeight: '32px',
                    width: 'auto',
                    zIndex: 1,
                    borderRadius: '8px',
                }}
            />
            {option.label}
        </Box>
    );
};
