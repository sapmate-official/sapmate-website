'use client';

import { usePathname } from 'next/navigation';

const CanonicalUrl = ({ customPath }: { customPath?: string }) => {
  const pathname = usePathname();
  
  // Define canonical paths for specific routes
  const canonicalPaths: { [key: string]: string } = {
    '/': 'https://www.sapmate.com',
    '/courses/sap-cpi-with-sap-successfactors-job-ready-program': 'https://www.sapmate.com/courses/sap-cpi-with-sap-successfactors-job-ready-program',
    '/courses/interview-preparation-for-sap-cpi': 'https://www.sapmate.com/courses/interview-preparation-for-sap-cpi',
    '/courses/sap-successfactors-employee-central': 'https://www.sapmate.com/courses/sap-successfactors-employee-central',
    '/courses/sap-successfactors-onboarding': 'https://www.sapmate.com/courses/sap-successfactors-onboarding',
    '/contact-us': 'https://www.sapmate.com/contact-us',
    '/courses/sap-cpi-course': 'https://www.sapmate.com/course/sap-cpi-course',
    // Add other specific routes here
  };

  // Use custom path if provided, otherwise check canonical paths, fallback to current path
  const canonicalUrl = customPath 
    ? `https://www.sapmate.com${customPath}`
    : canonicalPaths[pathname] || `https://www.sapmate.com${pathname}`;

  return <link rel="canonical" href={canonicalUrl} />;
};

export default CanonicalUrl;