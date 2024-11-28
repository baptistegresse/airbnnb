import { Navigation } from '@/components/layouts/Navbar'
import { I18nProviderClient } from '@/locales/client'
import { ReactElement } from 'react'

export default async function SubLayout({ params, children }: { params: Promise<{ locale: string }>, children: ReactElement }) {
  const { locale } = await params

  return (
    <I18nProviderClient locale={locale}>
        <Navigation />
        {children}
    </I18nProviderClient>
  )
}