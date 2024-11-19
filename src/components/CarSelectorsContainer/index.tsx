'use client';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/Select';

import { useYearsRange } from '@/hooks/useYearsRange';
import { useCars } from '@/hooks/useCars';
import Link from 'next/link';
import { useCarsSelector } from '@/hooks/useCarsSelector';
import { LoaderCircle } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const CarSelectorsContainer = () => {
  const years = useYearsRange(2015);
  const { data, loading } = useCars();
  const { handleChangeSelect, handleClickLink, href, linkDisabled } =
    useCarsSelector();
  return (
    <div className="relative flex flex-col gap-6 p-4">
      <div
        className={twMerge(
          'absolute left-0 top-0 z-10 h-full w-full rounded-md bg-stone-900/50',
          !loading && 'hidden',
        )}
      >
        <div className="relative flex h-full w-full items-center justify-center">
          <LoaderCircle className="animate-spin stroke-stone-100" size={40} />
        </div>
      </div>
      <div className="flex flex-col gap-4 md:flex-row">
        <Select
          disabled={loading && true}
          onValueChange={(value) =>
            handleChangeSelect({ value, key: 'makeId' })
          }
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Model" />
          </SelectTrigger>
          <SelectContent>
            {data &&
              data.map((car, idx: number) => (
                <SelectItem key={idx} value={`${car.MakeId}`}>
                  {car.MakeName}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>

        <Select
          onValueChange={(value) => handleChangeSelect({ value, key: 'year' })}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Year" />
          </SelectTrigger>
          <SelectContent>
            {years.map((year: string, idx: number) => (
              <SelectItem key={idx} value={year}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Link
        href={href}
        aria-disabled={linkDisabled}
        onClick={handleClickLink}
        className="mx-auto w-full rounded-md bg-stone-300 px-4 py-2 text-center text-stone-900 aria-disabled:cursor-not-allowed aria-disabled:text-stone-600"
      >
        Continue
      </Link>
    </div>
  );
};

export default CarSelectorsContainer;
