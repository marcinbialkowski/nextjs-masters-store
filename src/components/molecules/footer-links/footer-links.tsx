import { FooterLink } from '@/components/atoms/footer-link';

export const FooterLinks = () => (
  <div className="flex justify-center gap-3">
    <FooterLink href="/static/terms-and-conditions">
      Terms and conditions
    </FooterLink>
    <span aria-hidden>·</span>
    <FooterLink href="/static/privacy-policy">Privacy policy</FooterLink>
  </div>
);
