'use client';
//@3rd Party
import { ReactNode } from 'react';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Mui
import { Container, Stack } from '@mui/material';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Component
import KaizenAppBar from '@/Layouts/main-layout/components/KaizenAppBar';
import CustomBottomNavigation from '@components/custom-bottom-navigation/CustomBottomNavigation';
import { Locale } from '@/i18n';
import useHandleAuth from '@hooks/useHandleAuth';
import KaizenBreadCrumbs from '@/app/[lang]/(main-section)/components/KaizenBreadCrumbs';
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
            height='100vh'
            width='100vw'
            flexDirection={{ xs: 'column', md: 'row' }}
        >
            <KaizenAppBar dictionary={dictionary} />
            <Stack
                component={'main'}
                flexGrow={1}
                height={'100%'}
                width={'auto'}
            >
                <Container>
                    <KaizenBreadCrumbs />
                </Container>
                {children}
            </Stack>
            <CustomBottomNavigation dictionary={dictionary} />
        </Stack>
    );
}
