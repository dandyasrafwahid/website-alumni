"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; 
import Image from "next/image";
import { useState } from "react";

// --- TIPE DATA ---
interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
  desc: string;
  tags: string[]; // Array untuk menampung tag seperti "News", "Event"
  isFeatured?: boolean; // Penanda untuk berita utama yang besar
}

// --- DATA MOCKUP (Sesuai Gambar) ---
const NEWS_DATA: NewsItem[] = [
  {
    id: 1,
    title: "Sosok Alumni",
    date: "November 24, 2025",
    image: "/DSC09820.JPG", // Ganti dengan gambar yang sesuai
    desc: "Sosok Alumni adalah segmen untuk merayakan mereka yang menginspirasi—alumni Universitas Hasanuddin yang berkarya, mengabdi, dan membawa nilai-nilai almamater ke berbagai penjuru. Sosok alumni kali ini adalah William Sabandar, alumnus program Sarjana...",
    tags: ["News"],
    isFeatured: true,
  },
  {
    id: 2,
    title: "Perayaan Maulid Universitas Hasanuddin, di tepi danau UNHAS",
    date: "September 16, 2025",
    image: "/DSC09820.JPG",
    desc: "Universitas Hasanuddin menggelar perayaan Maulid di Tepi Danau Unhas. Kegiatan perdana ini tidak hanya menghadirkan nuansa spiritual dan budaya, tetapi juga menjadi ruang strategis antara alumni dan almamater untuk memperkuat...",
    tags: ["Event", "News"],
  },
  {
    id: 3,
    title: "Employer Meeting: Memperkuat Kesiapan Lulusan Universitas Hasanuddin di Dunia Industri",
    date: "September 15, 2025",
    image: "/DSC09820.JPG",
    desc: "Universitas Hasanuddin melalui Wakil Rektor III Bidang SDM, Alumni, dan Sistem Informasi, Prof. Dr. Farida Patittingi, S.H., M.Hum., bersama Direktorat Hubungan Alumni, menyelenggarakan Employer Meeting di Hotel Unhas. Kegiatan ini...",
    tags: ["Event", "News"],
  },
  {
    id: 4,
    title: "Lomba Kaddo’ Minnya’, Meriahkan Dies Natalis ke-69 Unhas!",
    date: "September 11, 2025",
    image: "/DSC09820.JPG",
    desc: "Lomba Kaddo’ Minnya’, Meriahkan Dies Natalis ke-69 Unhas! Universitas Hasanuddin (Unhas) melalui Pengurus Pusat IKA Unhas dan Panitia Dies Natalis akan menggelar Lomba Kaddo’ Minnya’ sebagai bagian dari rangkaian perayaan Maulid...",
    tags: ["Event"],
  },
];

export default function NewsEventsPage() {
  // Pisahkan data Featured dan Regular
  const featuredNews = NEWS_DATA.find((item) => item.isFeatured);
  const regularNews = NEWS_DATA.filter((item) => !item.isFeatured);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
      <Navbar />

      {/* --- HERO SECTION --- */}
      {/* Background biru tua dengan judul dan deskripsi */}
      <div className="relative bg-[#083353] pt-32 pb-32 overflow-hidden">
        {/* Overlay Gambar Background (Opsional) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <Image 
             src="/DSC09820.JPG" 
             alt="bg-texture" 
             fill 
             className="object-cover grayscale"
           />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            News & Events
          </h1>
          <p className="text-blue-100 text-lg">
            Dapatkan info terkini tentang berita dan acara terbaru di portal alumni.
          </p>
        </div>

        {/* Wave SVG Divider (Lekukan Putih di Bawah) */}
        <div className="absolute bottom-0 left-0 w-full leading-none">
          <svg
            className="w-full h-12 md:h-20 text-gray-50"
            viewBox="0 0 1440 320"
            fill="currentColor"
            preserveAspectRatio="none"
          >
            <path
              fillOpacity="1"
              d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,202.7C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="container mx-auto px-6 py-12 flex-grow -mt-20 relative z-20">
        
        {/* 1. FEATURED NEWS (Card Besar) */}
        {featuredNews && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row mb-16 border border-gray-100">
            {/* Image Side */}
            <div className="md:w-1/2 h-64 md:h-auto relative">
              <Image
                src={featuredNews.image}
                alt={featuredNews.title}
                fill
                className="object-cover"
              />
            </div>
            {/* Content Side */}
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {featuredNews.title}
              </h2>
              <p className="text-gray-500 text-sm mb-4">{featuredNews.date}</p>
              
              {/* Tags */}
              <div className="flex gap-2 mb-4">
                {featuredNews.tags.map((tag, idx) => (
                  <span key={idx} className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                {featuredNews.desc}
              </p>
            </div>
          </div>
        )}

        {/* 2. NEWS GRID (Daftar Berita Lainnya) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularNews.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden border border-gray-100 flex flex-col">
              {/* Card Image */}
              <div className="h-56 relative w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{item.date}</p>

                {/* Tags */}
                <div className="flex gap-2 mb-4">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 3. LOAD MORE BUTTON */}
        <div className="flex justify-center mt-16">
          <button className="bg-[#1A1A1A] hover:bg-black text-white text-sm font-semibold px-8 py-3 rounded-md transition-colors tracking-wide">
            LOAD MORE
          </button>
        </div>

      </div>

      <Footer />
    </div>
  );
}