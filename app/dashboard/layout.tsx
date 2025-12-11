import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
// import ".././globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="antialiased bg-gray-50 dark:bg-gray-900">
          <Navbar></Navbar>
          <Sidebar></Sidebar>
          {children}
        </div>
      </body>
    </html>
  );
}
