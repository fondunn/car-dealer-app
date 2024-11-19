import { FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
interface MainLayoutProps extends PropsWithChildren {
  className?: string;
}
const MainLayout: FC<MainLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={twMerge(
        'mx-auto w-full max-w-screen-2xl px-2 py-2 md:px-3 lg:px-4',
        className,
      )}
    >
      {children}
    </main>
  );
};
export default MainLayout;
