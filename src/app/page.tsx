import CarSelectorsContainer from '@/components/CarSelectorsContainer';
import MainLayout from '@/components/MainLayout';

import Image from 'next/image';

export default function Home() {
  return (
    <MainLayout>
      <div className="relative flex h-full w-full items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1446127281790-166e52d1b73c?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="cover"
          width={0}
          height={0}
          sizes="100vw"
          objectFit="cover"
          className="absolute left-0 top-0 h-full w-full blur-[2px]"
        />
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 bg-stone-900/60">
          <p className="text-xl text-stone-50">
            Select vehicle Makes and model year
          </p>
          <CarSelectorsContainer />
        </div>
      </div>
    </MainLayout>
  );
}
