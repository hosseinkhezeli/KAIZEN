import { i18n } from '@/i18n';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  try {
    const pathname = request.nextUrl.pathname;
    const defaultLocale = i18n.defaultLocale;
    const token = 'This is token';

    if (!isLocaleMissing(pathname)) {
      if (!token) {
        return redirectToSignIn(request, defaultLocale);
      }
      return NextResponse.rewrite(
        new URL(`/${defaultLocale}${pathname}`, request.url),
      );
    }

    if (!isPublicPath(pathname) && !token) {
      return redirectToSignIn(request, getCurrentLang(pathname));
    }

    return handleLocaleRedirection(request, pathname, defaultLocale);
  } catch (error) {
    logError(error as Error);
    return NextResponse.next(); // Proceed without any redirection
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|video|assets|favicon.ico|sw.js).*)',
  ],
};

const PUBLIC_PATHS: string[] = i18n.locales.map(
  (locale) => `/${locale}/sign-in`,
);

const redirectToSignIn = (
  request: NextRequest,
  locale: string,
): NextResponse => {
  console.log(`Redirecting to sign-in from ${request.nextUrl.pathname}`);
  return NextResponse.redirect(new URL(`/${locale}/sign-in`, request.url));
};

const handleLocaleRedirection = (
  request: NextRequest,
  pathname: string,
  defaultLocale: string,
): NextResponse | undefined => {
  const currentLang = getCurrentLang(pathname);

  if (currentLang === defaultLocale) {
    const newPathname = pathname.replace(`/${defaultLocale}`, '');
    console.log(`Redirecting locale from ${pathname} to ${newPathname}`);
    return NextResponse.redirect(new URL(newPathname + '/', request.url));
  }
};

const getCurrentLang = (pathname: string): string => {
  return pathname.toLowerCase().split('/')[1];
};

const isPublicPath = (pathname: string): boolean => {
  return PUBLIC_PATHS.includes(pathname);
};

const isLocaleMissing = (pathname: string): boolean => {
  return i18n.locales.some((lang) => pathname.startsWith(`/${lang}`));
};

const logError = (error: Error): void => {
  console.error(`Error in middleware: ${error.message}`);
};
