import { ReactNode } from 'react';
import rtlPlugin from 'stylis-plugin-rtl';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

interface INextCacheProviderProps {
  children: ReactNode;
  isRtl: boolean;
}

const cacheRtl = {
  key: 'rtl',
  stylisPlugins: [rtlPlugin],
};

const cacheLtr = {
  key: 'ltr',
};
const NextCacheProvider = ({ children, isRtl }: INextCacheProviderProps) => {
  return (
      <AppRouterCacheProvider options={isRtl ? cacheRtl : cacheLtr}>
        {children}
      </AppRouterCacheProvider>
  );
};

export default NextCacheProvider;
