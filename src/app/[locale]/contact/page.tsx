'use client';

import { useCurrentLocale, useScopedI18n } from '@/locales/client';
import { Mail, Phone } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { format } from 'date-fns';
import { fr, enUS } from 'date-fns/locale';
import { Calendar as CalendarIcon } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Imperial_Script, Tinos } from 'next/font/google';

const imperial = Imperial_Script({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

const tinos = Tinos({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

export default function Page() {
  const [startDate, setStartDate] = React.useState<Date>();
  const [endDate, setEndDate] = React.useState<Date>();
  const [startOpen, setStartOpen] = React.useState(false);
  const [endOpen, setEndOpen] = React.useState(false);
  const t = useScopedI18n('contact');
  const language = useCurrentLocale();

  const dateLocale = language === 'fr' ? fr : enUS;

  const handleStartDateChange = (selectedDate: Date | undefined) => {
    setStartDate(selectedDate);
    setStartOpen(false);
  };

  const handleEndDateChange = (selectedDate: Date | undefined) => {
    setEndDate(selectedDate);
    setEndOpen(false);
  };

  const handleSendEmail = () => {
    if (!startDate || !endDate) {
      alert(t('pleaseSelectDates'));
      return;
    }
    const dateDifference = (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
    if (dateDifference < 30) {
      alert(t('minimumStayError'));
      return;
    }
    const mailtoLink = `mailto:${t('email')}?subject=Booking Request&body=${t(
      'message'
    )}`;
    window.location.href = mailtoLink;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${t('phoneNumber')}`;
  };

  return (
    <div className="flex flex-row h-screen w-screen bg-gray-800 flex-wrap gap-20 items-center justify-center">
      <div className="w-screen mb-10 md:w-2/4">
        <Card className="shadow-lg rounded-lg overflow-hidden bg-gray-900">
          <CardHeader className="p-4">
            <CardTitle className={`text-3xl font-bold text-gray-200 ${imperial.className}`}>{t('title')}</CardTitle>
            <CardDescription className={`text-sm text-gray-300 ${tinos.className}`}>
              {t('description')}
              <br />
              {t('mediumStayPrice')}
              <br />
              {t('longStayPrice')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className={`flex flex-row gap-10 ${tinos.className}`}>
              <p
                className="text-sm font-medium cursor-pointer text-gray-300"
                onClick={handlePhoneClick}
              >
                <Phone className="inline-block mr-1 h-4 w-4 text-gray-300" />
                {t('phoneNumber')}
              </p>
              <p
                className="text-sm font-medium cursor-pointer text-gray-300"
                onClick={handleSendEmail}
              >
                <Mail className="inline-block mr-1 h-4 w-4 text-gray-300" />
                {t('email')}
              </p>
            </div>
            <div className={`flex flex-col gap-4 mt-4 ${tinos.className}`}>
              <div className="flex flex-col md:flex-row gap-4">
                <Popover open={startOpen} onOpenChange={setStartOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-full md:w-[280px] justify-start text-left font-normal',
                        !startDate && 'text-gray-500'
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4 text-gray-300" />
                      {startDate ? (
                        format(startDate, 'PPP', { locale: dateLocale })
                      ) : (
                        <span>{t('pickStart')}</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={startDate}
                      onSelect={handleStartDateChange}
                      initialFocus
                      locale={dateLocale}
                    />
                  </PopoverContent>
                </Popover>
                <Popover open={endOpen} onOpenChange={setEndOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-full md:w-[280px] justify-start text-left font-normal',
                        !endDate && 'text-gray-500'
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4 text-gray-300" />
                      {endDate ? (
                        format(endDate, 'PPP', { locale: dateLocale })
                      ) : (
                        <span>{t('pickEnd')}</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={endDate}
                      onSelect={handleEndDateChange}
                      initialFocus
                      locale={dateLocale}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <Textarea defaultValue={t('message')} className="mt-4 text-gray-300" />
              <p className="text-sm text-gray-500">{t('minimumStay')}</p>
            </div>
          </CardContent>
          <CardFooter className="p-4">
            <Button
              onClick={handleSendEmail}
              className="mt-4 bg-purple-200 text-gray-700"
              disabled={!startDate || !endDate}
            >
              {t('confirmationInput')}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
