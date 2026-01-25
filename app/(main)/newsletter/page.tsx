"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Pastikan path ini sesuai
import Image from "next/image";
import { useState } from "react";

// Mock Data untuk Newsletter
const newsletter = [
  {
    id: 1,
    title: "ACTION 2025",
    edition: "Desember 2025",
    image: "/DSC09820.JPG", // Ganti dengan gambar cover majalah Anda
    desc: "Syamsul Rizal, S.Pd., M.Si. - Membangun Negeri Melalui Pendidikan",
  },
  {
    id: 2,
    title: "ACTION 2025",
    edition: "Oktober 2025",
    image: "/DSC09820.JPG",
    desc: "Inovasi Teknologi Pangan untuk Ketahanan Nasional",
  },
  {
    id: 3,
    title: "ACTION 2025",
    edition: "Agustus 2025",
    image: "/DSC09820.JPG",
    desc: "Strategi Catur di Dunia Bisnis: Langkah Pionir Alumni",
  },
  {
    id: 4,
    title: "ACTION 2025",
    edition: "Mei 2025",
    image: "/DSC09820.JPG",
    desc: "Energi Terbarukan: Masa Depan di Tangan Kita",
  },
  {
    id: 5,
    title: "ACTION 2025",
    edition: "April 2025",
    image: "/DSC09820.JPG",
    desc: "Jejak Langkah di Jalur Kereta: Transformasi Transportasi",
  },
  {
    id: 6,
    title: "ACTION 2025",
    edition: "Februari 2025",
    image: "/DSC09820.JPG",
    desc: "Keindahan Senja dan Filosofi Kehidupan",
  },
  {
    id: 7,
    title: "ACTION 2024",
    edition: "Desember 2024",
    image: "/DSC09820.JPG",
    desc: "Ziaul Haq Nawawi - Upaya Menjembatani Pelestarian Lingkungan dengan Pemberdayaan Ekonomi",
  },
  {
    id: 8,
    title: "ACTION 2024",
    edition: "Oktober 2024",
    image: "/DSC09820.JPG",
    desc: "Cahaya Harapan dari Timur Indonesia",
  },
];

export default function Newsletter() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <div className="relative bg-[#1E3A8A] pt-32 pb-24 overflow-hidden">
        {/* Background Image Overlay (Optional, biar ada tekstur seperti di gambar) */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Image
            src="/DSC09820.JPG"
            alt="bg-texture"
            fill
            className="object-cover grayscale"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Newsletter
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-3xl leading-relaxed">
            Jelajahi E-Bulletin dan temukan kisah-kisah menarik dari para alumni
            inspiratif yang memperkaya perjalanan hidupmu.
          </p>
        </div>

        {/* Wave SVG Divider at Bottom */}
        <div className="absolute bottom-0 left-0 w-full leading-none">
          <svg
            className="w-full h-12 md:h-24 text-gray-50"
            viewBox="0 0 1440 320"
            fill="currentColor"
            preserveAspectRatio="none">
            <path
              fillOpacity="1"
              d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,202.7C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="container mx-auto px-6 py-12 flex-grow">
        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-16 relative">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Cari Judul/Nama Seri/Sosok Alumni..."
              className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm text-gray-700 bg-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Grid Newsletter */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newsletter.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer h-[450px]">
              {/* Image Cover */}
              <div className="absolute inset-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay Gradient Default (Bottom only) */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-300"></div>
              </div>

              {/* Default Text (Title & Edition) */}
              <div className="absolute bottom-0 left-0 p-6 w-full text-white transform transition-transform duration-300 group-hover:translate-y-full opacity-100 group-hover:opacity-0">
                <h3 className="text-2xl font-bold uppercase tracking-wider">
                  {item.title}
                </h3>
                <p className="text-sm font-medium mt-1 text-gray-200">
                  {item.edition}
                </p>
              </div>

              {/* Hover Overlay (Full Dark Overlay with Details) */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4 font-light">
                  {item.edition}
                </p>

                {/* Deskripsi (Hanya muncul saat hover seperti gambar referensi) */}
                <p className="text-white text-sm leading-relaxed mb-6 italic line-clamp-4">
                  "{item.desc}"
                </p>

                <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-full text-sm font-medium border border-gray-600 transition-colors">
                  Buka
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination & Result Count */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between border-t border-gray-200 pt-8">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            Menampilkan 1 kepada 8 dari 55 hasil
          </p>

          <div className="flex items-center gap-1">
            <button className="px-3 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-100 disabled:opacity-50">
              ❮
            </button>
            <button className="px-3 py-1 rounded border border-blue-500 bg-blue-50 text-blue-600 font-medium">
              1
            </button>
            <button className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-50">
              3
            </button>
            <button className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-50">
              4
            </button>
            <button className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-50">
              5
            </button>
            <button className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-50">
              6
            </button>
            <button className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-50">
              7
            </button>
            <button className="px-3 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-100">
              ❯
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
