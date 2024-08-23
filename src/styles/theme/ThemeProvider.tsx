import { ThemeProvider } from  '@mui/material/styles';
import { CssBaseline, Theme } from '@mui/material';
import { FC, ReactNode, useMemo, useEffect } from 'react';
import { setLang, useCommon } from '@states/global/globalSlice';
import customTheme from './theme';
import { useDispatch } from 'react-redux';
import CacheProvider from './CacheProvider';
import { Locale } from '@/i18n';
interface AppThemeProps {
    children: ReactNode;
    lang: Locale;
}

const CustomThemeProvider: FC<AppThemeProps> = ({ children,lang }) => {
    const isRtl = lang === 'fa';
    const { themeMode } = useCommon();
    const theme: Theme = useMemo(
            () => customTheme(themeMode, isRtl),
            [isRtl, themeMode],
    );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setLang(lang));
    }, [lang]);
    return (
        <CacheProvider isRtl={isRtl}>
            <ThemeProvider theme={theme}>
                {children}
                <CssBaseline />
            </ThemeProvider>
        </CacheProvider>
    );
};

export default CustomThemeProvider;

