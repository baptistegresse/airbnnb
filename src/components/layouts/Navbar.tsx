'use client';

import Chouette from '@/../public/Chouette blanche.svg';
import { useScopedI18n } from '@/locales/client';
import { Navbar } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import { AppSelect } from '../ui/app-select';
import { Tinos } from 'next/font/google';
import { useState } from 'react';

const tinos = Tinos({
  weight: '700',
  style: 'normal',
  subsets: ['latin'],
});

export function Navigation() {
  const t = useScopedI18n('components.navbar');
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Navbar className="z-20 absolute w-full bg-transparent">
      <Navbar.Brand>
        <Image width={50} height={50} src={Chouette} alt="owl" />
      </Navbar.Brand>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-white"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      <div className={`${isOpen ? 'block w-screen' : 'hidden'} md:block w-full md:w-auto`}>
        <div className="bg-gray-800 h-screen md:h-auto md:bg-transparent flex flex-col items-center text-center gap-8 pt-8 md:flex-row md:pt-0 md:gap-4">
          {/* <Link href="/home" onClick={handleLinkClick} className={`text-xl font-semibold text-white mt-4 md:mt-0 md:mr-4 ${tinos.className}`}>
            {t('navigation.home')}
          </Link> */}
          <Link
            href="/appartment"
            onClick={handleLinkClick}
            className={`text-xl font-semibold text-white mt-4 md:mt-0 md:mr-4 ${tinos.className}`}
          >
            {t('navigation.appartment')}
          </Link>
          <Link href="/contact" onClick={handleLinkClick} className={`text-xl font-semibold text-white mt-4 md:mt-0 md:mr-4 ${tinos.className}`}>
            {t('navigation.contact')}
          </Link>
          <Link href="/city" onClick={handleLinkClick} className={`text-xl font-semibold text-white mt-4 md:mt-0 md:mr-4 ${tinos.className}`}>
            {t('navigation.city')}
          </Link>
          <div className="mt-4 md:mt-0 flex justify-center">
            <AppSelect />
          </div>
        </div>
      </div>
    </Navbar>
  );
}
