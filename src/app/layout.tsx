import type { Metadata } from "next";
import { Montserrat, Unbounded } from "next/font/google";
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
        {children}
      </body>
    </html>
  );
}
