import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from '@/i18n';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const defaultLocale = i18n.defaultLocale;
  const currentLang = pathname!.toLowerCase().split('/')[1];

  const pathnameIsMissingLocale = i18n.locales.some((lang) => {
    return pathname.startsWith(`/${lang}`);
  });
  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
  } else {
    // rewrite it so next.js will render `/` as if it was `/fa`
    if (!pathname.startsWith('/images')) {
      return NextResponse.rewrite(
        new URL(`/${defaultLocale}${pathname}`, request.url),
      );
    }
  }

  if (currentLang === defaultLocale) {
    return NextResponse.redirect(
      new URL(pathname.replace(`/${defaultLocale}`, '') + '/', request.url),
    );
  }
}
export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: [
    '/((?!api|_next/static|_next/image|video|assets|favicon.ico|sw.js).*)',
  ],
};
