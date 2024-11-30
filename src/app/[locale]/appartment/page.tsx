'use client';

import Image1 from '@/../public/app1.avif';
import Image2 from '@/../public/app2.avif';
import Image3 from '@/../public/app3.avif';
import Image4 from '@/../public/app4.avif';
import Image5 from '@/../public/app5.avif';
import Image6 from '@/../public/app6.avif';
import Image7 from '@/../public/app7.avif';
import Image8 from '@/../public/app8.avif';

import Image11 from '@/../public/app11.avif';
import Image12 from '@/../public/app12.avif';
import Image13 from '@/../public/app13.avif';
import Image14 from '@/../public/app14.avif';
import Image15 from '@/../public/app15.avif';
import Image16 from '@/../public/app16.avif';

import Chambre1 from '@/../public/c1.avif';
import Chambre2 from '@/../public/c2.avif';
import Chambre3 from '@/../public/c3.avif';
import Chambre4 from '@/../public/c4.avif';
import Chambre5 from '@/../public/c5.avif';
import Chambre6 from '@/../public/c6.avif';
import Chambre7 from '@/../public/c7.avif';
import Chambre8 from '@/../public/c8.avif';
import Chambre9 from '@/../public/c9.avif';

import SalleDeBain1 from '@/../public/sdb1.avif';
import SalleDeBain2 from '@/../public/sdb2.avif';

import Exterieur1 from '@/../public/ext1.avif';
import Exterieur2 from '@/../public/ext2.avif';
import Exterieur3 from '@/../public/ext3.avif';
import Exterieur4 from '@/../public/ext4.avif';
import Exterieur5 from '@/../public/ext5.avif';
import Exterieur6 from '@/../public/ext6.avif';

import PhotoSupp1 from '@/../public/ps1.avif';
import PhotoSupp2 from '@/../public/ps2.avif';
import PhotoSupp3 from '@/../public/ps3.avif';
import PhotoSupp4 from '@/../public/ps4.avif';

import Image from 'next/image';
import { useScopedI18n } from '@/locales/client';

function Page() {
  const t = useScopedI18n('appartement');

  return (
    <div className="w-screen h-auto bg-gray-800 text-gray-300">
      <div className="w-screen" style={{ height: '55px' }}></div>

      <div className="w-screen h-32 ml-4 flex items-center">
        <h2 className="text-4xl text-white">{t('livingRoom')}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4 pr-4">
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={Image1}
              alt={''}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={Image2}
              alt={''}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={Image3}
              alt={''}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={Image4}
              alt={''}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={Image5}
              alt={''}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={Image6}
              alt={''}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={Image7}
              alt={''}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={Image8}
              alt={''}
            />
          </div>
        </div>
      </div>

      <div className="w-screen h-32 ml-4 flex items-center">
        <h2 className="text-5xl text-white">{t('diningArea')}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4 pr-4">
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={Image11}
              alt={''}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={Image13}
              alt={''}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={Image15}
              alt={''}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={Image12}
              alt={''}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={Image14}
              alt={''}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={Image16}
              alt={''}
            />
          </div>
        </div>
      </div>

      <div className="w-screen h-32 ml-4 flex items-center">
        <h2 className="text-5xl text-white">{t('bedroom')}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4 pr-4">
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={Chambre1}
              alt={''}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={Chambre3}
              alt={''}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={Chambre5}
              alt={''}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={Chambre7}
              alt={''}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={Chambre9}
              alt={''}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={Chambre2}
              alt={''}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={Chambre4}
              alt={''}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={Chambre6}
              alt={''}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={Chambre8}
              alt={''}
            />
          </div>
        </div>
      </div>

      <div className="w-screen h-32 ml-4 flex items-center">
        <h2 className="text-5xl text-white">{t('bathroom')}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4 pr-4">
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={SalleDeBain1}
              alt={''}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={SalleDeBain2}
              alt={''}
            />
          </div>
        </div>
      </div>

      <div className="w-screen h-32 ml-4 flex items-center">
        <h2 className="text-5xl text-white">{t('exterior')}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4 pr-4">
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={Exterieur1}
              alt={''}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={Exterieur3}
              alt={''}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={Exterieur5}
              alt={''}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={Exterieur2}
              alt={''}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={Exterieur4}
              alt={''}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={Exterieur6}
              alt={''}
            />
          </div>
        </div>
      </div>

      <div className="w-screen h-32 ml-4 flex items-center">
        <h2 className="text-5xl text-white">{t('supplementaryPhotos')}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4 pr-4">
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={PhotoSupp1}
              alt={''}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={PhotoSupp3}
              alt={''}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={PhotoSupp2}
              alt={''}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={PhotoSupp4}
              alt={''}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
