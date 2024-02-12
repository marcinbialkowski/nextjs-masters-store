import { FooterLinks } from '@/components/molecules/footer-links';

export const Footer = () => (
  <footer className="border-t border-t-slate-200 bg-slate-50 p-8">
    <div className="container text-center text-xs">
      <FooterLinks />
      <p className="mt-3">© {new Date().getFullYear()}</p>
    </div>
  </footer>
);
