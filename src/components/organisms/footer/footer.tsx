import { FooterLink } from '@/components/atoms/footer-link';

export const Footer = () => (
  <footer className="border-t border-t-slate-200 bg-slate-50 p-8">
    <div className="container text-center text-xs">
      <div className="mb-3 flex justify-center gap-3">
        <FooterLink href="/terms-and-conditions">
          Terms and conditions
        </FooterLink>
        <span aria-hidden>·</span>
        <FooterLink href="/privacy-policy">Privacy policy</FooterLink>
      </div>
      <p>© {new Date().getFullYear()}</p>
    </div>
  </footer>
);
