import { FooterLink } from '@/components/atoms/footer-link';

export const FooterLinks = () => (
  <div className="flex justify-center gap-3">
    <FooterLink href="/terms-and-conditions">Terms and conditions</FooterLink>
    <span aria-hidden>·</span>
    <FooterLink href="/privacy-policy">Privacy policy</FooterLink>
  </div>
);
