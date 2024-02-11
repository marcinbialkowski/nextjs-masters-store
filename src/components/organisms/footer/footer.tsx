import { FooterLink } from '@/components/atoms/footer-link';

export const Footer = () => (
  <footer className="container p-5 text-center text-xs">
    <div className="mb-3 flex justify-center gap-3">
      <FooterLink href="/terms-and-conditions">Terms and conditions</FooterLink>
      <span aria-hidden>·</span>
      <FooterLink href="/privacy-policy">Privacy policy</FooterLink>
    </div>
    <p>© {new Date().getFullYear()}</p>
  </footer>
);
