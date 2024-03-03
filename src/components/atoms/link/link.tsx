import NextLink, { type LinkProps } from 'next/link';

// Temporarily disabling prefetch on all links as it breaks RSC when
// reloading the page quickly (which is the case in e2e tests)
// https://github.com/vercel/next.js/issues/60549

export const Link = <RouteInferType extends string>(
  props: Omit<LinkProps<RouteInferType>, 'prefetch'>,
) => <NextLink {...props} prefetch={false} />;
