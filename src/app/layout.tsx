import type { Metadata } from "next";
import { Montserrat, Unbounded } from "next/font/google";
import Script from "next/script";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Fabelli",
  description:
    "Fabelli - marketingový konzultant pripravujúci akvizičné stratégie postavené na hĺbkovom prieskume trhu.",
  openGraph: {
    title: "Fabelli",
    images: [{ url: "/thumbnails/thumbnail_main.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fabelli",
    images: ["/thumbnails/thumbnail_main.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sk"
      className={`${montserrat.variable} ${unbounded.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            var fabelliConsentRaw = localStorage.getItem('fabelli-cookie-consent');
            var fabelliConsent = null;
            try { fabelliConsent = fabelliConsentRaw ? JSON.parse(fabelliConsentRaw) : null; } catch (e) {}
            if (fabelliConsent && fabelliConsent.marketing) {
              fbq('init', '2495619044288822');
              fbq('track', 'PageView');
            }
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height={1}
            width={1}
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2495619044288822&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
        <CookieConsentBanner />
      </body>
    </html>
  );
}
