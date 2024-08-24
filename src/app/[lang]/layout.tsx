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
            <body
                style={{
                    backgroundColor: '#fff',
                    backgroundPosition: 'top right',
                    backgroundRepeat: 'no-repeat',
                    background:
                        'linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 75%, rgba(238,198,141,0.05) 90%, rgba(222,145,36,0.1) 95%, rgba(196,78,21,0.15) 100%)',
                }}
            >
                <ProvidersLayout lang={params.lang}>{children}</ProvidersLayout>
            </body>
        </html>
    );
}
