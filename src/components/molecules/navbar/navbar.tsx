import { ShoppingCart } from 'lucide-react';
import { NavbarItem } from '../../atoms/navbar-item';

export const Navbar = () => (
  <nav className="flex-1">
    <ul className="flex flex-wrap items-center gap-6">
      <NavbarItem href="/">Home</NavbarItem>
      <NavbarItem href="/products">All</NavbarItem>
      <NavbarItem href="/categories/t-shirts/1">T-shirts</NavbarItem>
      <NavbarItem href="/categories/hoodies/1">Hoodies</NavbarItem>
      <NavbarItem href="/categories/accessories/1">Accessories</NavbarItem>
      <NavbarItem className="ml-auto" href="/cart">
        <ShoppingCart size={20} />
        <span className="sr-only">Cart</span>
      </NavbarItem>
    </ul>
  </nav>
);
