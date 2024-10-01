//@3rd Party
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { i18n, type Locale } from '@/i18n';
// ___________________________________________________________________

//@Components
import { Container, Stack } from '@mui/material';
import KaizenLogo from '@components/logo/KaizenLogo';
import Marquee from '@components/custom-marquee/CustomMarquee';
import FeatureCard from '@/app/[lang]/(authentication)/sign-in/components/FeatureCard';
import FeatureMarquee from '@/app/[lang]/(authentication)/sign-in/components/FeatureMarquee';
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
            <Stack height='100%' width='100%'>
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
                    <FeatureMarquee />
                </Stack>
            </Stack>
        </>
    );
}
