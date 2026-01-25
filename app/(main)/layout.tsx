import React from "react";
// Sesuaikan path import ini dengan lokasi file Navbar/Footer Anda yang asli
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer"; 

export default function MainLayout({
  children, // 'children' ini adalah ISI HALAMAN (bisa homeuser, jobs, dashboard, dll)
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Navbar dipasang di sini, SEKALI SAJA untuk semua halaman */}
      <Navbar />

      {/* 2. 'children' adalah tempat halaman berubah-ubah */}
      {/* Misal user klik menu Jobs, maka 'children' akan berisi halaman Jobs */}
      <main className="flex-grow">
        {children}
      </main>

      {/* 3. Footer dipasang di sini, SEKALI SAJA untuk semua halaman */}
      <Footer />
    </div>
  );
}