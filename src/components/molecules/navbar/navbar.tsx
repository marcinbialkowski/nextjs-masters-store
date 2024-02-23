import { Suspense } from 'react';
import { ShoppingCart } from 'lucide-react';
import { NavbarItem } from '../../atoms/navbar-item';
import { SearchInput } from '@/components/molecules/search-input';

export const Navbar = () => (
  <nav className="flex flex-1 flex-wrap justify-between gap-x-6 gap-y-4">
    <ul className="flex items-center gap-6">
      <NavbarItem href="/">Home</NavbarItem>
      <NavbarItem href="/products">All</NavbarItem>
      <NavbarItem href="/categories/t-shirts">T-shirts</NavbarItem>
      <NavbarItem href="/categories/hoodies">Hoodies</NavbarItem>
      <NavbarItem href="/categories/accessories">Accessories</NavbarItem>
    </ul>
    <div className="flex flex-1 items-center justify-end gap-6">
      <Suspense>
        <SearchInput className="min-w-56 flex-1 md:max-w-80" />
      </Suspense>
      <NavbarItem href="/cart" tag="div">
        <ShoppingCart size={20} />
        <span className="sr-only">Cart</span>
      </NavbarItem>
    </div>
  </nav>
);
