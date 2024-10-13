//@3rd Party
import { ReactNode } from 'react';
import type { Metadata } from 'next';

// ___________________________________________________________________

//@Components
import { Stack } from '@mui/material';
import KaizenMarquee from '@/app/[lang]/(authentication)/sign-in/components/KaizenMarquee';
import KaizenLogo from '@/components/KaizenLogo';
import { i18n, Locale } from '@/i18n/i18n';
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

export default function AuthLayout({
    children,
    params,
}: {
    children: ReactNode;
    params: { lang: Locale };
}) {
    return (
        <>
            <Stack
                component={'main'}
                flexGrow={1}
                sx={{
                    width: '100%',
                    position: 'relative',
                    height: '100%',
                    overflow: 'hidden',
                    flexDirection: {
                        xs: 'column',
                        sm: params.lang !== 'en' ? 'row' : 'row-reverse',
                    },
                }}
            >
                <KaizenLogo />
                {children}
                <KaizenMarquee />
            </Stack>
        </>
    );
}
