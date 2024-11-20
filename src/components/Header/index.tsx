import { APP_NAME } from '@/common/app';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 z-40 mx-auto h-14 w-full max-w-screen-2xl px-2 md:h-16 md:px-3 lg:px-4">
      <div className="flex h-full w-full items-center bg-stone-300 px-2 md:px-4">
        <Link href="/" className="text-xl font-semibold uppercase">
          {APP_NAME}
        </Link>
      </div>
    </header>
  );
};

export default Header;
