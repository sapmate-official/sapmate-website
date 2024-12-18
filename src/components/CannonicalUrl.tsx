'use client';

import { usePathname } from 'next/navigation';

const CanonicalUrl = () => {
  const pathname = usePathname();
  const canonicalUrl = `https://www.sapmate.com${pathname}`;

  return (
    <>
      <link rel="canonical" href={canonicalUrl} />
    </>
  );
};

export default CanonicalUrl;