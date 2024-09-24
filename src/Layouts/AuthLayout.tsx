'use client';
import { Locale } from '@/i18n';
import useUserStore from '@states/user/userSlice';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
import CustomLoadingIndicator from '@components/custom-loading/CustomLoadingIndicator';

const AuthLayout = ({
    lang,
    children,
}: {
    lang: Locale;
    children: ReactNode;
}) => {
    const { token, isLoggedIn, loading } = useUserStore();
    const router = useRouter();

    useEffect(() => {
        if (!loading && (!isLoggedIn || !token)) {
            router.push(`${lang}/sign-in`);
        }
    }, [isLoggedIn, token, router]);

    if (!isLoggedIn || !token || loading) {
        return <CustomLoadingIndicator />;
    }

    // Render children if authenticated
    return <>{children}</>;
};

export default AuthLayout;
