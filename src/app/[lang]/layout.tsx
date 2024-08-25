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
import MainLayout from '@/Layouts/main-layout/MainLayout';
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
    return (
        <html
            lang={params.lang}
            dir={params.lang === 'fa' ? 'rtl' : 'ltr'}
            style={{
                textAlign: params.lang === 'fa' ? 'right' : 'left',
                overflowX: 'hidden',
            }}
            className={params.lang === 'fa' ? 'fa-font' : 'en-font'}
        >
            <Box
                component={'body'}
                sx={{
                    backgroundColor: 'background.default',
                    backgroundPosition: 'top right',
                    backgroundRepeat: 'no-repeat',
                    background:
                        'linear-gradient(45deg, #F0F0F0 0%, #F0F0F0 75%, #fcb95222 90%, #faa21e33 95%, #f1981444 100%)',
                }}
            >
                <ProvidersLayout lang={params.lang}>
                    <MainLayout>{children}</MainLayout>
                </ProvidersLayout>
            </Box>
        </html>
    );
}
