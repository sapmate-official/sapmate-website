import React from 'react'
import ClientPage from './ClientPage'
// app/courses/[slug]/page.tsx
import type { Metadata } from 'next';

// Generate metadata for each course page
export async function generateMetadata(
): Promise<Metadata> {
  // You can fetch course data here if needed
const courseTitle = "SAP CPI Training - Comprehensive Guide to Cloud Platform Integration"; 
const courseDescription = "Learn SAP Cloud Platform Integration (CPI) with our comprehensive training course. Master integration processes, techniques, and best practices.";

  return {
    title: courseTitle,
    description: courseDescription,
    openGraph: {
      title: courseTitle,
      description: courseDescription,
      images: [{
        url: `/api/og?title=${encodeURIComponent(courseTitle)}&description=${encodeURIComponent(courseDescription)}`,
        width: 1200,
        height: 630,
        alt: courseTitle,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: courseTitle,
      description: courseDescription,
      images: [`/api/og?title=${encodeURIComponent(courseTitle)}&description=${encodeURIComponent(courseDescription)}`],
    },
  };
}

const page = () => {
    generateMetadata();
  return (
    <>
    <ClientPage/>
    </>
  )
}

export default page
