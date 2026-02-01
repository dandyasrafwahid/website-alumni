"use client";

// Next.js Image component untuk optimisasi gambar
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function AboutUs() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const elementTop = rect.top;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Hitung progress: 0 saat element di bawah viewport, 1 saat element di tengah/atas
      let progress = 0;
      if (elementTop < windowHeight) {
        progress = (windowHeight - elementTop) / (windowHeight + elementHeight);
        progress = Math.max(0, Math.min(1, progress));
      }

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      id="about-section"
      ref={containerRef}
      className="w-full bg-gradient-to-b from-blue-50 to-white py-8 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Kolom kiri - Konten teks */}
          <div className="flex-1">
            <div className="mb-4">
              <span className="text-blue-500 font-semibold text-xs tracking-wide uppercase">
                APA YANG KAMI BERIKAN?
              </span>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              <span className="text-blue-500">Tentang Kami</span>
            </h2>

            <p className="text-gray-700 text-base leading-relaxed mb-6 max-w-2xl">
              Portal Alumni ini didirikan sebagai wadah untuk menjaga hubungan
              antara alumni, universitas, dan mahasiswa saat ini. Tujuan kami
              adalah memfasilitasi interaksi dan kolaborasi antara alumni,
              berbagi pengalaman, informasi karir, dan membangun jejaring yang
              bermanfaat.
            </p>

            {/* Checklist features */}
            <div className="space-y-2 mb-6">
              <div className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700 font-medium text-sm">
                  Profil Alumni
                </span>
              </div>
              <div className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700 font-medium text-sm">
                  Pencarian Alumni
                </span>
              </div>
              <div className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700 font-medium text-sm">
                  Berita Acara dan Lowongan Pekerjaan
                </span>
              </div>
              <div className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700 font-medium text-sm">
                  Diskusi dan Forum
                </span>
              </div>
            </div>

            {/* Contact info */}
            <div className="bg-gray-50 rounded-lg p-4 mt-6">
              <p className="text-gray-600 font-semibold mb-2 text-sm">
                Info lebih lanjut silahkan menghubungi :
              </p>
              <div className="space-y-1.5 text-gray-700 text-sm">
                <p className="flex items-center gap-2">
                  <span className="text-blue-500 font-medium">✓</span>
                  (+62) 812 4327 8997
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-blue-500 font-medium">✓</span>
                  (+62) 812 5358 4528
                </p>
                <p className="flex items-center gap-2 mt-2">
                  <span className="font-semibold text-gray-700 text-sm">
                    E-mail :
                  </span>
                  <span className="text-blue-600 hover:text-blue-700 cursor-pointer text-sm">
                    dirhapd@unhas.ac.id
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Kolom kanan - Gambar */}
          <div className="flex-1 perspective">
            <div
              ref={imageRef}
              className="rounded-xl overflow-hidden shadow-lg h-[500px]"
              style={{
                // Scroll-driven animations: zoom, rotate, dan translate
                transform: `
                  scale(${1 + scrollProgress * 0.15})
                  rotateY(${scrollProgress * -5}deg)
                  translateY(${scrollProgress * -30}px)
                `,
                opacity: 0.8 + scrollProgress * 0.2,
                filter: `brightness(${0.9 + scrollProgress * 0.1})`,
                transformStyle: "preserve-3d",
                transition:
                  "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease-out",
              }}>
              <Image
                src="/kampus03.png"
                alt="Universitas Hasanuddin"
                width={600}
                height={500}
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
