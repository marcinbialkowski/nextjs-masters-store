import { type Config } from 'tailwindcss';
import typographyPlugin from '@tailwindcss/typography';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [typographyPlugin],
  theme: {
    container: {
      center: true,
      padding: '0.75rem',
    },
    screens: {
      sm: '540px',
      md: '668px',
      lg: '768px',
      xl: '948px',
      '2xl': '1096px',
    },
  },
};

export default config;
