'use client';
//@3rd Party
import { FC, ReactNode, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SnackbarProvider } from 'notistack';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Components
import ThemeProvider from '@styles/theme/ThemeProvider';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Types
import { Locale } from '@/i18n';
import AuthLayout from '@/Layouts/AuthLayout';
import useUserStore from '@states/user/userSlice';
export interface IProvidersLayout {
    children: ReactNode;
    lang: Locale;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const ProvidersLayout: FC<IProvidersLayout> = ({ children, lang }) => {
    const queryClient = new QueryClient();
    const { initialize } = useUserStore();

    useEffect(() => {
        initialize();
    }, [initialize]);
    return (
        <QueryClientProvider client={queryClient}>
            <AuthLayout lang={lang}>
                <ThemeProvider lang={lang}>
                    <SnackbarProvider>{children}</SnackbarProvider>
                </ThemeProvider>
            </AuthLayout>
        </QueryClientProvider>
    );
};

export default ProvidersLayout;
