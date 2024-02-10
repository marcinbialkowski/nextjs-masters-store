import type { ReactNode } from 'react';
import Link from 'next/link';

interface FooterLinkProps {
  href: string;
  children: ReactNode;
}

export const FooterLink = (props: FooterLinkProps) => (
  <Link {...props} className="hover:underline" />
);
