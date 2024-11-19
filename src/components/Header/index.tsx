import { APP_NAME } from '@/common/app';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 mx-auto w-full max-w-screen-2xl px-2 py-2 md:px-3 md:py-4 lg:px-4">
      <div>
        <Link href="/" className="text-xl font-semibold uppercase">
          {APP_NAME}
        </Link>
      </div>
    </header>
  );
};

export default Header;
