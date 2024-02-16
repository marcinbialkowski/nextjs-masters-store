import { ShoppingCart } from 'lucide-react';
import { NavbarItem } from '../../atoms/navbar-item';

export const Navbar = () => (
  <nav className="flex-1">
    <ul className="flex items-center gap-4">
      <NavbarItem href="/">Home</NavbarItem>
      <NavbarItem href="/products">All</NavbarItem>
      <NavbarItem className="ml-auto" href="/cart">
        <ShoppingCart size={20} />
        <span className="sr-only">Cart</span>
      </NavbarItem>
    </ul>
  </nav>
);
