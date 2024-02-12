import { Navbar } from '@/components/molecules/navbar';
import { Logo } from '@/components/atoms/logo';

export const Header = () => (
  <header className="bg-white py-2 shadow">
    <div className="container flex justify-between">
      <Logo />
      <Navbar />
    </div>
  </header>
);
