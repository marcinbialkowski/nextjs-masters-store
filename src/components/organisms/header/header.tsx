import { Navbar } from '@/components/molecules/navbar';
import { Logo } from '@/components/atoms/logo';

export const Header = () => (
  <header className="sticky top-0 bg-white py-2 shadow">
    <div className="container flex gap-10 md:gap-16">
      <Logo />
      <Navbar />
    </div>
  </header>
);
