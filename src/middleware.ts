// middleware.ts
import { createI18nMiddleware } from 'next-international/middleware'
import { NextRequest } from 'next/server'

const I18nMiddleware = createI18nMiddleware({
  locales: ['en', 'fr'],
  defaultLocale: 'en'
})

export function middleware(request: NextRequest) {
  // Redirection de / vers /home
  if (request.nextUrl.pathname === '/') {
    return Response.redirect(new URL('/home', request.url))
  }

  // Gestion de l'internationalisation
  return I18nMiddleware(request)
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)']
}