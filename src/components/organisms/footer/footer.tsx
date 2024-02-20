import { FooterLinks } from '@/components/molecules/footer-links';

export const Footer = () => (
  <footer className="border-t border-t-gray-200 bg-gray-50">
    <div className="container p-8 text-center text-xs">
      <FooterLinks />
      <p className="mt-3">© {new Date().getFullYear()}</p>
    </div>
  </footer>
);
