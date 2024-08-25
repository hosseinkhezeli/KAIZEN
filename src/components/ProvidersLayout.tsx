'use client';
import React, { FC, ReactNode } from 'react';
import ThemeProvider from '@styles/theme/ThemeProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import { SnackbarProvider } from 'notistack';
import { Locale } from '@/i18n';
import { store } from '@states/store';
import CustomLoadingIndicator from '@components/custom-loading/CustomLoadingIndicator';
export interface IProvidersLayout {
    children: ReactNode;
    lang: Locale;
}

const ProvidersLayout: FC<IProvidersLayout> = ({ children, lang }) => {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <PersistGate
                    loading={<CustomLoadingIndicator />}
                    persistor={persistStore(store)}
                >
                    <ThemeProvider lang={lang}>
                        <SnackbarProvider>{children}</SnackbarProvider>
                    </ThemeProvider>
                </PersistGate>
            </Provider>
        </QueryClientProvider>
    );
};

export default ProvidersLayout;
