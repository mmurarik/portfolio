import type { ComponentPropsWithoutRef } from 'react';

// Keep ordinary full-page links and apply GitHub project paths at build time.
export default function SiteLink({ href, ...props }: ComponentPropsWithoutRef<'a'>) {
  const basePath = process.env.PAGES_BASE_PATH || '';
  const target = href?.startsWith('/') && !href.startsWith('//') ? `${basePath}${href}` : href;
  return <a {...props} href={target} />;
}
