'use client';
//@3rd Party
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
//________________________________________________________

//@Hooks
import useUserStore from '@states/user/userSlice';
//________________________________________________________

//@Components
import CustomLoadingIndicator from '@components/custom-loading/CustomLoadingIndicator';
//________________________________________________________

//@Types
import { Locale } from '@/i18n';
//________________________________________________________

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
        if (!loading && !isLoggedIn && !token) {
            router.push(`/${lang}/sign-in`);
        }
    }, [isLoggedIn, token, loading]);

    if (loading) {
        return <CustomLoadingIndicator />;
    }
    return <>{children}</>;
};

export default AuthLayout;
