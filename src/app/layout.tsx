import type { Metadata, Viewport } from "next";
import { Montserrat, Unbounded, Geist } from "next/font/google";
import Script from "next/script";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import ClarityInit from "@/components/ClarityInit";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "latin-ext"],
});

const BASE_URL = "https://fabiansmriga.sk";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
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

// Bez tohto Chrome na Androide vie stránke bez zjavného dôvodu vnútiť
// vlastný "force dark" prepočet farieb, ktorý rozbíja bg-clip-text gradienty
// (text sa stane neviditeľným) — týmto mu hovoríme, že si tmavý vzhľad
// riešime sami a nemá do farieb zasahovať.
export const viewport: Viewport = {
  colorScheme: "dark",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Fabelli s. r. o.",
  alternateName: "Fabián Smriga",
  url: BASE_URL,
  logo: `${BASE_URL}/images/logos/logo-carne.svg`,
  image: `${BASE_URL}/thumbnails/thumbnail_main.png`,
  description:
    "Marketingový konzultant pripravujúci a realizujúci akvizičné stratégie postavené na hĺbkovom prieskume trhu.",
  telephone: "+421919170732",
  email: "fabiansmriga@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Slnečná 1028/17A",
    postalCode: "900 28",
    addressLocality: "Zálesie",
    addressCountry: "SK",
  },
  founder: {
    "@type": "Person",
    name: "Fabián Smriga",
  },
  sameAs: [
    "https://www.instagram.com/fabian.smriga/",
    "https://www.facebook.com/share/1BohCNYazZ/",
  ],
  areaServed: "SK",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Fabelli",
  url: BASE_URL,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sk"
      className={cn("h-full", "antialiased", montserrat.variable, unbounded.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
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
        <ClarityInit />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
