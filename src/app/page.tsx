import CarSelectors from '@/components/CarSelectors';
import MainLayout from '@/components/MainLayout';
import Image from 'next/image';
import { Suspense } from 'react';
import Loading from './loading';

export default function Home() {
  return (
    <MainLayout>
      <div className="relative flex h-full w-full items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1446127281790-166e52d1b73c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="cover"
          width={0}
          height={0}
          sizes="100vw"
          priority
          quality={60}
          className="absolute left-0 top-0 h-full w-full blur-[2px]"
        />
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 bg-stone-900/60 px-2">
          <h1 className="text-2xl font-semibold text-stone-50 md:text-4xl">
            Search for a Vehicle
          </h1>
          <p className="text-center text-base text-stone-50 md:text-xl">
            Choose the make and model year to find your desired vehicle.
          </p>
          <Suspense fallback={<Loading />}>
            <CarSelectors />
          </Suspense>
        </div>
      </div>
    </MainLayout>
  );
}
