'use client';

import Image2 from '@/../public/carr1.webp';
import Image4 from '@/../public/carr2.webp';
import Image5 from '@/../public/carr3.webp';
import Image3 from '@/../public/carr4.webp';
import Image6 from '@/../public/carr5.webp';
import Image7 from '@/../public/carr6.webp';

import Image from 'next/image';

function page() {
  return (
    <div className="w-screen h-auto bg-gray-800 text-gray-300">
      <div className="w-screen" style={{ height: '55px' }}></div>

      <div className="w-screen h-32 ml-4 flex items-center">
        <h2 className="text-2xl">Salon</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4 pr-4">
        <div className="grid gap-4">
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
              src={Image4}
              alt={''}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={Image5}
              alt={''}
            />
          </div>
        </div>
        <div className="grid gap-4">
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
        </div>
      </div>

      <div className="w-screen h-32 ml-4 flex items-center">
        <h2 className="text-2xl">Salon</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4 pr-4">
        <div className="grid gap-4">
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
              src={Image4}
              alt={''}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={Image5}
              alt={''}
            />
          </div>
        </div>
        <div className="grid gap-4">
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
        </div>
      </div>

      <div className="w-screen h-32 ml-4 flex items-center">
        <h2 className="text-2xl">Salon</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4 pr-4">
        <div className="grid gap-4">
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
              src={Image4}
              alt={''}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={Image5}
              alt={''}
            />
          </div>
        </div>
        <div className="grid gap-4">
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
        </div>
      </div>
    </div>
  );
}

export default page;
