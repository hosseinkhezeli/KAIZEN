import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Theme } from '@mui/material';
import { FC, ReactNode, useMemo, useEffect } from 'react';
import useGlobalStore from '@states/global/globalSlice';
import customTheme from './theme';

import CacheProvider from './CacheProvider';
import { Locale } from '@/i18n/i18n';

interface AppThemeProps {
    children: ReactNode;
    lang: Locale;
}

const CustomThemeProvider: FC<AppThemeProps> = ({ children, lang }) => {
    // const isRtl = lang === 'fa';
    const { themeMode, setLang, isRtl } = useGlobalStore();

    const theme: Theme = useMemo(
        () => customTheme(themeMode, isRtl),
        [isRtl, themeMode],
    );

    useEffect(() => {
        setLang(lang);
    }, [lang]);
    return (
        <CacheProvider isRtl={isRtl}>
            <ThemeProvider theme={theme}>
                {children}
                <CssBaseline enableColorScheme={true} />
            </ThemeProvider>
        </CacheProvider>
    );
};

export default CustomThemeProvider;
