import Link from 'next/link';
import { Navbar } from '@/components/molecules/navbar';

export const Header = () => (
  <header className="bg-white py-2 shadow">
    <div className="container flex justify-between">
      <Link
        className="select-none font-mono tracking-widest text-slate-600 hover:text-inherit"
        href="/"
      >
        NextStore
      </Link>
      <Navbar />
    </div>
  </header>
);
