import { FooterLink } from '@/components/atoms/footer-link';

export const Footer = () => (
  <footer className="mx-auto w-full p-5 text-center text-xs">
    <div className="mb-3 flex justify-center gap-3">
      <FooterLink href="/terms-and-conditions">Regulamin</FooterLink>
      <span aria-hidden>·</span>
      <FooterLink href="/privacy-policy">Polityka Prywatności</FooterLink>
    </div>
    <p>© {new Date().getFullYear()}</p>
  </footer>
);
