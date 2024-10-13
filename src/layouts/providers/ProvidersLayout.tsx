'use client';
//@3rd Party
import { FC, ReactNode, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SnackbarProvider } from 'notistack';
//________________________________________________________

//@Mui
import { useTheme } from '@mui/material/styles';
//________________________________________________________

//Components
import ThemeProvider from '@styles/theme/ThemeProvider';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import useUserStore from '@states/user/userSlice';
import AuthLayout from '@/layouts/providers/AuthLayout';
//________________________________________________________

//@Types
import { Locale } from '@/i18n/i18n';
export interface IProvidersLayout {
    children: ReactNode;
    lang: Locale;
}
//________________________________________________________

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
