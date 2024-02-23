import { NavbarItem } from '../../atoms/navbar-item';

export const Navbar = () => (
  <nav>
    <ul className="flex gap-6">
      <NavbarItem href="/">Home</NavbarItem>
      <NavbarItem href="/products">All</NavbarItem>
      <NavbarItem href="/categories/t-shirts">T-shirts</NavbarItem>
      <NavbarItem href="/categories/hoodies">Hoodies</NavbarItem>
      <NavbarItem href="/categories/accessories">Accessories</NavbarItem>
    </ul>
  </nav>
);
