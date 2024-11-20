import { LoaderCircle } from 'lucide-react';

export default function Loading() {
  return (
    <div
      className={
        'absolute left-0 top-0 z-10 h-full w-full rounded-md bg-stone-900/50'
      }
    >
      <div className="relative flex h-full w-full items-center justify-center">
        <LoaderCircle className="animate-spin stroke-stone-100" size={40} />
      </div>
    </div>
  );
}
