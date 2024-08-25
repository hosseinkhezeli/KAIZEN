//@3rd Party
import { ReactNode } from 'react';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Mui
import { Stack } from '@mui/material';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Component
import KaizenAppBar from '@/Layouts/main-layout/components/KaizenAppBar';
import CustomBottomNavigation from '@components/custom-bottom-navigation/CustomBottomNavigation';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <Stack height='100vh' width='100vw'>
            <KaizenAppBar />
            <Stack
                component={'main'}
                flexGrow={1}
                height={'100%'}
                width={'100%'}
            >
                {children}
            </Stack>
            <CustomBottomNavigation />
        </Stack>
    );
}
