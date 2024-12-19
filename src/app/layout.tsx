// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import CanonicalUrl from "@/components/CannonicalUrl";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Structured Data for Organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "SAPMATE",
  "description": "Premier SAP training institute specializing in CPI and SuccessFactors training",
  "url": "https://www.sapmate.com",
  "logo": "https://www.sapmate.com/logo.png",
  "sameAs": [
    "https://www.linkedin.com/company/sapmate",
    "https://www.youtube.com/@sapmate"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dubai",
    "addressRegion": "Dubai",
    "addressCountry": "UAE",
    "streetAddress": "Dubai Internet City, DIC Building 4"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+919830334496",
    "contactType": "customer service",
    "email": "sadaf.salam@sapmate.com"
  }
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sapmate.com'),
  title: {
    default: 'Sapmate - SAP Training Institute | Best SAP CPI Training',
    template: '%s | Sapmate'
  },
  description: 'Learn SAP CPI from basics to advanced with practical training & real-time projects. SAPMATE has trained 1500+ students with a 92% success rate. Expert-led SAP training with placement assistance.',
  keywords: ['SAP Training', 'SAP CPI Course', 'SAP SuccessFactors Training', 'SAP Cloud Integration', 'SAP Training Institute Dubai', 'SAP Training Institute India'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.sapmate.com',
    siteName: 'Sapmate',
    title: 'Sapmate - SAP Training Institute | Expert-Led SAP CPI Training',
    description: 'Transform your career with expert-led SAP training. Industry-leading 92% placement rate, hands-on projects, and expert mentorship.',
    images: [{
      url: 'https://www.sapmate.com/api/og',
      width: 1200,
      height: 630,
      alt: 'Sapmate SAP Training',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sapmate - Premier SAP Training Institute',
    description: 'Master SAP CPI & SuccessFactors with hands-on training. 92% placement success rate.',
    images: ['https://www.sapmate.com/api/og'],
    creator: '@sapmate',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://www.sapmate.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e40af" />
        
        <CanonicalUrl />

        {/* Structured Data */}
        <Script id="schema-organization" type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </Script>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
           (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
           new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
           j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
           'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
           })(window,document,'script','dataLayer','GTM-KZ5MWNQC');
         `}
        </Script>

        {/* Google Ads - First Account */}
        <Script
          id="google-ads"
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16669063299"
        />
        <Script id="google-ads-config">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16669063299');
          `}
        </Script>

        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-CHFFVWGDRX" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CHFFVWGDRX');
          `}
        </Script>

        {/* Google Ads - Second Account */}
        <Script
          id="google-ads-config-2"
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11493144063"
        />
        <Script id="google-ads-config-3">
          {` 
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11493144063');
          `}
        </Script>

        {/* Preload Critical Resources */}
        <link
          rel="preload"
          href="/fonts/GeistVF.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/GeistMonoVF.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KZ5MWNQC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}

        <Toaster />
      </body>
    </html>
  );
}