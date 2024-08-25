'use client';
//@3rd Party
import { FC, ReactNode, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { SnackbarProvider } from 'notistack';
import { store } from '@states/store';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Components
import ThemeProvider from '@styles/theme/ThemeProvider';
import CustomLoadingIndicator from '@components/custom-loading/CustomLoadingIndicator';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Types
import { Locale } from '@/i18n';
export interface IProvidersLayout {
    children: ReactNode;
    lang: Locale;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const ProvidersLayout: FC<IProvidersLayout> = ({ children, lang }) => {
    const queryClient = new QueryClient();
    const persistor = persistStore(store);
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <PersistGate
                    loading={<CustomLoadingIndicator />}
                    persistor={persistor}
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
