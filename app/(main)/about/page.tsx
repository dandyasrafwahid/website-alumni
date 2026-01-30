"use client";

// Next.js Image component untuk optimisasi gambar
import { useState } from "react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div
      id="about-section"
      className="w-full bg-gradient-to-b from-blue-50 to-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Kolom kiri - Konten teks */}
          <div className="flex-1">
            <div className="mb-6">
              <span className="text-blue-500 font-semibold text-sm tracking-wide uppercase">
                APA YANG KAMI BERIKAN?
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              <span className="text-blue-500">Tentang Kami</span>
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-2xl">
              Portal Alumni ini didirikan sebagai wadah untuk menjaga hubungan
              antara alumni, universitas, dan mahasiswa saat ini. Tujuan kami
              adalah memfasilitasi interaksi dan kolaborasi antara alumni,
              berbagi pengalaman, informasi karir, dan membangun jejaring yang
              bermanfaat.
            </p>

            {/* Checklist features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700 font-medium">Profil Alumni</span>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700 font-medium">
                  Pencarian Alumni
                </span>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700 font-medium">
                  Berita Acara dan Lowongan Pekerjaan
                </span>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700 font-medium">
                  Diskusi dan Forum
                </span>
              </div>
            </div>

            {/* Contact info */}
            <div className="bg-gray-50 rounded-lg p-6 mt-8">
              <p className="text-gray-600 font-semibold mb-3">
                Info lebih lanjut silahkan menghubungi :
              </p>
              <div className="space-y-2 text-gray-700">
                <p className="flex items-center gap-2">
                  <span className="text-blue-500 font-medium">✓</span>
                  (+62)852-4060-9843
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-blue-500 font-medium">✓</span>
                  (+62)813-4240-5416
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-blue-500 font-medium">✓</span>
                  (+62)81243278996
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-blue-500 font-medium">✓</span>
                  (+62)81243290809
                </p>
                <p className="flex items-center gap-2 mt-3">
                  <span className="font-semibold text-gray-700">E-mail :</span>
                  <span className="text-blue-600 hover:text-blue-700 cursor-pointer">
                    dirhapd@unhas.ac.id
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Kolom kanan - Gambar */}
          <div className="flex-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/DSC09820.JPG"
                alt="Universitas Hasanuddin"
                width={600}
                height={400}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
