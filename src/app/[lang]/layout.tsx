//@3rd Party
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { i18n, type Locale } from '@/i18n';
// ___________________________________________________________________

//@Styles
import '@styles/globals.css';
// ___________________________________________________________________

//@Components
import localFont from 'next/font/local';
import ProvidersLayout from '@/layouts/providers/ProvidersLayout';

// ___________________________________________________________________

//@Server Functions
export async function generateStaticParams() {
    return i18n.locales.map((locale: Locale) => ({ lang: locale }));
}

const notoSans = localFont({
    src: '../../assets/fonts/Noto_Sans_Arabic/NotoSansArabic-VariableFont_wdth,wght.ttf',
    display: 'swap',
});
const nunito = localFont({
    src: '../../assets/fonts/Nunito/Nunito-VariableFont_wght.ttf',
    display: 'swap',
});
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
            className={isRtl ? notoSans.className : nunito.className}
        >
            <body>
                <ProvidersLayout lang={params.lang}>{children}</ProvidersLayout>
            </body>
        </html>
    );
}
