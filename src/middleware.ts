import { i18n } from '@/i18n/i18n';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  // const currentLang = getCurrentLang(pathname);
  // const isPublic = isPublicPath(pathname);

  // Redirect to sign-in if not on a public path
  // if (!isPublic) {
  //   return redirectToSignIn(request, currentLang);
  // }

  // Handle locale redirection
  if (!isLocaleMissing(pathname)) {
    return NextResponse.rewrite(
      new URL(`/${i18n.defaultLocale}${pathname}`, request.url),
    );
  }

  return handleLocaleRedirection(request, pathname);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|video|assets|favicon.ico|sw.js).*)',
  ],
};

// const PUBLIC_PATHS = i18n.locales
//   .map((locale) => `/${locale}/sign-in`)
//   .concat('/sign-in');

// const redirectToSignIn = (
//   request: NextRequest,
//   locale: string,
// ): NextResponse => {
//   return NextResponse.redirect(new URL(`/${locale}/sign-in`, request.url));
// };

const handleLocaleRedirection = (
  request: NextRequest,
  pathname: string,
): NextResponse | undefined => {
  const currentLang = getCurrentLang(pathname);
  if (currentLang === i18n.defaultLocale) {
    const newPathname = pathname.replace(`/${i18n.defaultLocale}`, '');
    return NextResponse.redirect(new URL(newPathname + '/', request.url));
  }
};

const getCurrentLang = (pathname: string): string => {
  return pathname.toLowerCase().split('/')[1] ?? 'en';
};

// const isPublicPath = (pathname: string): boolean => {
//   return PUBLIC_PATHS.includes(pathname);
// };

const isLocaleMissing = (pathname: string): boolean => {
  return i18n.locales.some((lang) => pathname.startsWith(`/${lang}`));
};
