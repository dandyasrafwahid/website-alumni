import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// PERHATIKAN: Tidak ada lagi import Navbar atau Footer di sini!

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portal Alumni Informatika",
  description: "Website Alumni Universitas Hasanuddin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Hanya me-render 'children'. 
           Navbar & Footer nanti akan ditangani oleh (main)/layout.tsx 
           atau diabaikan oleh (auth) folder.
        */}
        {children}
      </body>
    </html>
  );
}