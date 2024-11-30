'use client';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select';
import {
  useChangeLocale,
  useCurrentLocale,
  useScopedI18n,
} from '@/locales/client';
import { Tinos } from 'next/font/google';

const tinos = Tinos({
  weight: '700',
  style: 'normal', 
  subsets: ['latin'],
});

export function AppSelect() {
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();
  const t = useScopedI18n('components.selector.languages');

  return (
    <Select name="locale-select" value={locale} onValueChange={changeLocale}>
      <SelectTrigger className={`w-[100px] group-data-[collapsible=icon]:hidden text-white border-white ${tinos.className}`}>
        {t(locale)} {locale === 'fr' ? '🇫🇷 ' : '🇬🇧 '}
      </SelectTrigger>
      <SelectContent className='bg-gray-700'>
        <SelectItem value="fr" className={`text-white bg-gray-700 ${tinos.className}`}>
          {t('fr')} 🇫🇷
        </SelectItem>
        <SelectItem value="en" className={`text-white bg-gray-700 ${tinos.className}`}>
          {t('en')} 🇬🇧
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
