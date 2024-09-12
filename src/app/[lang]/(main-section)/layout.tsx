//@3rd Party
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { getDictionaryServer, i18n, type Locale } from '@/i18n';
// ___________________________________________________________________

//@Components
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

export default function MainSectionLayout({
    children,
    params,
}: {
    children: ReactNode;
    params: { lang: Locale };
}) {
    const dictionary = getDictionaryServer(params?.lang || 'en');
    return (
        <MainLayout params={params} dictionary={dictionary}>
            {children}
        </MainLayout>
    );
}
