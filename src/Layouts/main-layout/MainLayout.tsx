//@3rd Party
import { ReactNode } from 'react';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Mui
import { Stack } from '@mui/material';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Component
import KaizenAppBar from '@/Layouts/main-layout/components/KaizenAppBar';
import CustomBottomNavigation from '@components/custom-bottom-navigation/CustomBottomNavigation';
import { getDictionaryServer, Locale } from '@/i18n';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default async function MainLayout({
    children,
    params,
}: {
    children: ReactNode;
    params: { lang: Locale };
}) {
    const dictionary = await getDictionaryServer(params?.lang || 'en');
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
