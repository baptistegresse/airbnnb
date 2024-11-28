// locales/server.ts
import { createI18nServer } from 'next-international/server'
 
export const { getI18n, getScopedI18n, getStaticParams } = createI18nServer({
  en: () => import('./languages/en'),
  fr: () => import('./languages/fr')
})