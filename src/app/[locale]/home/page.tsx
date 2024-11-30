'use client';

import Image1 from '@/../public/carr1.webp';
import Image2 from '@/../public/carr2.webp';
import Image3 from '@/../public/carr3.webp';
import Image4 from '@/../public/carr4.webp';
import Image5 from '@/../public/carr5.webp';
import Image6 from '@/../public/carr6.webp';
import Image7 from '@/../public/carr7.webp';
import Image8 from '@/../public/carr8.webp';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Imperial_Script, Tinos } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const libre_baskerville = Imperial_Script({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

const roboto = Tinos({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

export default function Home() {
  const autoplayPlugin = Autoplay({
    delay: 5000,
  });

  const handleSelect = (index: number) => {
    const images = document.querySelectorAll('.carousel-image');
    images.forEach((img) => img.classList.remove('zoomed'));

    setTimeout(() => {
      images[index]?.classList.add('zoomed');
    }, 50);
  };

  return (
    <div className="flex relative flex-col h-screen w-screen bg-gray-800 ">
      <style jsx global>{`
        .carousel-image {
          transform: scale(1);
          transition: transform 6s ease;
          will-change: transform;
        }

        .carousel-image.zoomed {
          transform: scale(1.2);
        }
      `}</style>

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-black bg-opacity-40 ">
        <h1
          className={`text-white text-8xl md:text-8xl font-bold tracking-wide ${libre_baskerville.className}`}
        >
          LElégance
        </h1>
        <p
          className={`text-gray-100 text-base md:text-xl text-center mt-4 ${roboto.className}`}
        >
          Appartement haussmannien au cœur de la capitale des Ducs de Bourgogne
          <br />
          Charme et élégance pour un séjour inoubliable
        </p>
        <Link
          className={`mt-6 bg-purple-500 hover:bg-purple-700 text-white font-bold text-md px-6 py-3 rounded ${roboto.className}`}
          href="/contact"
        >
          Réservez maintenant
        </Link>
      </div>

      <Carousel
        className="w-full h-full flex items-center justify-center"
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[
          // @ts-expect-error missing types in embla-carousel-autoplay
          autoplayPlugin,
        ]}
        setApi={(api) => {
          if (api) {
            api.on('select', () => {
              const selectedIndex = api.selectedScrollSnap();
              handleSelect(selectedIndex);
            });
          }
        }}
      >
        <CarouselContent>
          <CarouselItem>
            <Image
              src={Image1}
              alt="Airbnb Tremouille"
              className="object-cover w-screen h-screen carousel-image"
              priority
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={Image2}
              alt="Airbnb Tremouille"
              className="object-cover w-screen h-screen carousel-image"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={Image3}
              alt="Airbnb Tremouille"
              className="object-cover w-screen h-screen carousel-image"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={Image4}
              alt="Airbnb Tremouille"
              className="object-cover w-screen h-screen carousel-image"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={Image5}
              alt="Airbnb Tremouille"
              className="object-cover w-screen h-screen carousel-image"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={Image6}
              alt="Airbnb Tremouille"
              className="object-cover w-screen h-screen carousel-image"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={Image7}
              alt="Airbnb Tremouille"
              className="object-cover w-screen h-screen carousel-image"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={Image8}
              alt="Airbnb Tremouille"
              className="object-cover w-screen h-screen carousel-image"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
