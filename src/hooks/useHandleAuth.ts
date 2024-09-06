import { Locale } from '@/i18n';
import { useGetUser } from '@states/user/userSlice';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const useHandleAuth = ({ lang }: { lang: Locale }) => {
  const { token, isLoggedIn } = useGetUser();
  const { push } = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    if (!token && !isLoggedIn) {
      if (!pathname.includes('/sign-in')) {
        push(`${lang}/sign-in`);
      }
    }
  }, [token, isLoggedIn]);
  return {};
};

export default useHandleAuth;
