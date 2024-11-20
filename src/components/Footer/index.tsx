import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="sticky top-0 z-40 mx-auto w-full max-w-screen-2xl px-2 md:px-3 lg:px-4">
      <div className="flex h-full w-full items-center bg-stone-300 px-2 py-4 md:px-4">
        <div className="space-y-2">
          <p className="text-lg">Contacts:</p>
          <div className="flex flex-col gap-2">
            <span>
              Email:
              <Link href="mailto:fondunndev@gmail.com" className="ml-1">
                fonudnndev@gmail.com
              </Link>
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span>
              Telegram:
              <Link
                href="https://t.me/fondunn"
                className="ml-1"
                target="_blank"
              >
                @fondunn
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
