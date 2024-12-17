// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

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

export const metadata: Metadata = {
  title: "Sapmate",
  description:
    "Learn SAP CPI from basics to advanced with practical training & real-time projects. SAPMATE has trained 100+ students with a 99% success rate. SAPMATE - your success starts here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Sapmate</title>
        <meta
          name="description"
          content="Learn SAP CPI from basics to advanced with practical training & real-time projects. SAPMATE has trained 100+ students with a 99% success rate. 
    SAPMATE - your success starts here"
        />
        <link rel="canonical" href="https://www.sapmate.com/" />

        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
           (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
           new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
           j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
           'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
           })(window,document,'script','dataLayer','GTM-KZ5MWNQC');
         `}
        </Script>
        <Script
          id="google-ads"
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16669063299"
        ></Script>
        <Script id="google-ads-config">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'AW-16669063299');
      `}
        </Script>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-CHFFVWGDRX"></Script>
        <Script id="google-analytics">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-CHFFVWGDRX');
          `}
        </Script>
        <Script
          id="google-ads-config-2"
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11493144063"
        ></Script>
        <Script id="google-ads-config-3">
          {` 
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'AW-11493144063');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KZ5MWNQC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}

        <Toaster />
      </body>
    </html>
  );
}
