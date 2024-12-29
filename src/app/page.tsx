import { redirect } from 'next/navigation'
import { useCurrentLocale } from '@/locales/client';

export default function Page() {
  const locale = useCurrentLocale();
  redirect(`/${locale}/home`);
}