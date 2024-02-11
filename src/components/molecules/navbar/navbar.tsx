import { NavbarItem } from '../../atoms/navbar-item';

export const Navbar = () => (
  <nav>
    <ul className="flex gap-4">
      <NavbarItem href="/">Home</NavbarItem>
      <NavbarItem href="/products">All</NavbarItem>
    </ul>
  </nav>
);
