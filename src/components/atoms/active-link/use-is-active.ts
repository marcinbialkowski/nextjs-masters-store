import { usePathname } from 'next/navigation';

const toPathname = (href: string) => href.split('?')[0] ?? '';

const startsWith = (linkPathname: string, currentPathname: string) => {
  const currentPathnameSegments = currentPathname.split('/');
  return linkPathname
    .split('/')
    .every((segment, index) => segment === currentPathnameSegments[index]);
};

export const useIsActive = (href: string, exact: boolean) => {
  const currentPathname = usePathname();
  const linkPathname = toPathname(href);

  return exact
    ? currentPathname === linkPathname
    : startsWith(linkPathname, currentPathname);
};
