'use client';
//@3rd Party
import { ReactNode } from 'react';
//________________________________________________________

//@Mui
import { Container, Stack } from '@mui/material';
//________________________________________________________

//@Component
import KaizenAppBar from '@/layouts/main-layout/components/KaizenAppBar';
import CustomBottomNavigation from '@components/custom-bottom-navigation/CustomBottomNavigation';
import KaizenBreadCrumbs from '@/app/[lang]/(main-section)/components/KaizenBreadCrumbs';
//________________________________________________________

export default function MainLayout({
    children,
    dictionary,
}: {
    children: ReactNode;
    dictionary: any;
}) {
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
                <Container id={'breadcrumbs'}>
                    <KaizenBreadCrumbs />
                </Container>
                {children}
            </Stack>
            <CustomBottomNavigation dictionary={dictionary} />
        </Stack>
    );
}
