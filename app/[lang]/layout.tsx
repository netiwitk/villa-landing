import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai, Noto_Serif_Thai } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { dictionaries, hasLocale, locales } from "./dictionaries";

const sans = IBM_Plex_Sans_Thai({
  variable: "--font-plex",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600"],
});

const serif = Noto_Serif_Thai({
  variable: "--font-noto-serif",
  subsets: ["thai", "latin"],
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return dictionaries[lang].meta;
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return (
    <html lang={lang} className={`${sans.variable} ${serif.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
