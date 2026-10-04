import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai, Noto_Serif_Thai } from "next/font/google";
import "./globals.css";

const sans = IBM_Plex_Sans_Thai({
  variable: "--font-plex",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600"],
});

const serif = Noto_Serif_Thai({
  variable: "--font-noto-serif",
  subsets: ["thai", "latin"],
});

export const metadata: Metadata = {
  title: "Saeng Lay Pool Villa · หัวหิน (เว็บตัวอย่าง)",
  description:
    "Pool villa 3 ห้องนอน สระส่วนตัว เดินถึงหาด 3 นาที เว็บตัวอย่างสำหรับ portfolio ไม่ใช่ที่พักจริง",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="th" className={`${sans.variable} ${serif.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
