import { Navbar } from '@/components/molecules/navbar';

export const Header = () => (
  <header className="sticky top-0 bg-white py-2 shadow">
    <div className="container flex gap-10 md:gap-16">
      <Navbar />
    </div>
  </header>
);
