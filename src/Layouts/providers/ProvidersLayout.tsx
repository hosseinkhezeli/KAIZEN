'use client';
//@3rd Party
import { FC, ReactNode, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SnackbarProvider } from 'notistack';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Components
import ThemeProvider from '@styles/theme/ThemeProvider';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Types
import { Locale } from '@/i18n';
import AuthLayout from '@/layouts/providers/AuthLayout';
import useUserStore from '@states/user/userSlice';
import { useTheme } from '@mui/material/styles';
export interface IProvidersLayout {
    children: ReactNode;
    lang: Locale;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const ProvidersLayout: FC<IProvidersLayout> = ({ children, lang }) => {
    const queryClient = new QueryClient();
    const { initialize } = useUserStore();
    const theme = useTheme();
    useEffect(() => {
        initialize();
    }, [initialize]);
    return (
        <QueryClientProvider client={queryClient}>
            <AuthLayout lang={lang}>
                <ThemeProvider lang={lang}>
                    <SnackbarProvider>{children}</SnackbarProvider>
                    <ProgressBar
                        height='4px'
                        color={theme.palette.warning.main}
                        options={{ showSpinner: true }}
                        shallowRouting
                    />
                </ThemeProvider>
            </AuthLayout>
        </QueryClientProvider>
    );
};

export default ProvidersLayout;
