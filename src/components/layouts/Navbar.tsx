'use client';

import Chouette from '@/../public/Chouette blanche.svg';
import { useScopedI18n } from '@/locales/client';
import { Navbar } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import { AppSelect } from '../ui/app-select';

export function Navigation() {
  const t = useScopedI18n('components.navbar');

  return (
    <Navbar className="z-20 absolute w-full bg-transparent">
      <Navbar.Brand>
        <Image width={50} height={50} src={Chouette} alt="owl" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link href="/home" className="text-xl font-semibold text-white mt-1">
          {t('navigation.home')}
        </Link>
        <Link
          href="/appartment"
          className="text-xl font-semibold text-white mt-1"
        >
          {t('navigation.appartment')}
        </Link>
        <Link href="/contact" className="text-xl font-semibold text-white mt-1">
          {t('navigation.contact')}
        </Link>
        <Link href="/city" className="text-xl font-semibold text-white mt-1">
          {t('navigation.city')}
        </Link>
        <AppSelect />
      </Navbar.Collapse>
    </Navbar>
  );
}
