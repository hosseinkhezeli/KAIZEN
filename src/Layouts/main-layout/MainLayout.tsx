'use client';
//@3rd Party
import { ReactNode } from 'react';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Mui
import { Stack } from '@mui/material';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Component
import KaizenAppBar from '@/Layouts/main-layout/components/KaizenAppBar';
import CustomBottomNavigation from '@components/custom-bottom-navigation/CustomBottomNavigation';
import { Locale } from '@/i18n';
import useHandleAuth from '@hooks/useHandleAuth';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default function MainLayout({
    children,
    params,
    dictionary,
}: {
    children: ReactNode;
    params: { lang: Locale };
    dictionary: any;
}) {
    useHandleAuth({ lang: params.lang || 'en' });
    return (
        <Stack
            height='100%'
            width='100%'
            flexDirection={{ xs: 'column', md: 'row' }}
        >
            <KaizenAppBar dictionary={dictionary} />
            <Stack
                component={'main'}
                flexGrow={1}
                height={'100%'}
                width={'auto'}
            >
                {children}
            </Stack>
            <CustomBottomNavigation dictionary={dictionary} />
        </Stack>
    );
}
