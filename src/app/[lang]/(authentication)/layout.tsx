//@3rd Party
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { i18n, type Locale } from '@/i18n';
// ___________________________________________________________________

//@Components
import { Stack } from '@mui/material';
import KaizenLogo from '@components/logo/KaizenLogo';
import KaizenMarquee from '@/app/[lang]/(authentication)/sign-in/components/KaizenMarquee';
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
