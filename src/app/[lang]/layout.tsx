//@3rd Party
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { i18n, type Locale } from '@/i18n';
// ___________________________________________________________________

//@Styles
import '@styles/globals.css';
// ___________________________________________________________________

//@Components
import ProvidersLayout from '@components/ProvidersLayout';
import Box from '@mui/material/Box';
// ___________________________________________________________________

//@Server Functions
export async function generateStaticParams() {
    return i18n.locales.map((locale: Locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
    title: 'Kaizen',
    description: 'Manage your tasks in Kaizen style',
};
// ___________________________________________________________________

export default function RootLayout({
    children,
    params,
}: {
    children: ReactNode;
    params: { lang: Locale };
}) {
    const isRtl = params.lang === 'fa';
    return (
        <html
            lang={params.lang}
            dir={isRtl ? 'rtl' : 'ltr'}
            style={{
                textAlign: isRtl ? 'right' : 'left',
                overflowX: 'hidden',
            }}
            className={isRtl ? 'fa-font' : 'en-font'}
        >
            <Box component='body'>
                <ProvidersLayout lang={params.lang}>{children}</ProvidersLayout>
            </Box>
        </html>
    );
}
