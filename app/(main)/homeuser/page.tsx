"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import AboutUs from "@/components/about";

export default function HomeUser() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [newsletters, setNewsletters] = useState<any[]>([]);
  const [newsEvents, setNewsEvents] = useState<any[]>([]);
  const [activeAdminTab, setActiveAdminTab] = useState<"newsletter" | "news">(
    "newsletter",
  );
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(
    new Set(),
  );
  const observerRef = useRef<IntersectionObserver | null>(null);

  // --- AMBIL DATA USER DARI LOCALSTORAGE ---
  useEffect(() => {
    const storedData = localStorage.getItem("alumniUser");
    if (storedData) {
      setUser(JSON.parse(storedData));

      // Load newsletters dan news jika admin
      const userData = JSON.parse(storedData);
      if (userData.accountType === "admin") {
        const storedNewsletters = localStorage.getItem("newsletters");
        if (storedNewsletters) {
          setNewsletters(JSON.parse(storedNewsletters));
        }

        const storedNews = localStorage.getItem("newsEvents");
        if (storedNews) {
          setNewsEvents(JSON.parse(storedNews));
        }
      }
    }
    setLoading(false);
  }, []);

  // --- FADE-IN/REVEAL EFFECT DENGAN INTERSECTION OBSERVER ---
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const observeElement = (id: string, ref: React.RefObject<HTMLElement>) => {
    if (ref.current && observerRef.current) {
      ref.current.id = id;
      observerRef.current.observe(ref.current);
    }
  };

  // Tampilan Loading Sederhana
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-[#1E3A8A] font-bold animate-pulse">
          Memuat Data...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .fade-in {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .fade-in-scale {
          animation: fadeInScale 0.8s ease-out forwards;
          opacity: 0;
        }

        .fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
          opacity: 0;
        }

        .fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
      <Navbar />

      <main className="relative min-h-screen">
        {/* --- BACKGROUND IMAGE & OVERLAY --- */}
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/halaman.png" // Pastikan gambar ini ada di folder public
            alt="bg"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#1E3A8A] opacity-90"></div>
        </div>

        {/* --- ADMIN MANAGEMENT SECTION (Hanya untuk admin) --- */}
        {user?.accountType === "admin" && (
          <>
            {/* Floating Admin Button */}
            <button
              onClick={() => setShowAdminModal(true)}
              className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 group"
              title="Admin Dashboard">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {newsletters.length + newsEvents.length}
              </span>
            </button>

            {/* Admin Modal */}
            {showAdminModal && (
              <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                {/* Backdrop */}
                <div
                  className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                  onClick={() => setShowAdminModal(false)}></div>

                {/* Modal Box */}
                <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden animate-fadeIn">
                  {/* Header */}
                  <div className="sticky top-0 z-10 bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 p-2 rounded-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-white">
                          Admin Dashboard
                        </h2>
                        <p className="text-white/80 text-sm">
                          Kelola konten newsletter dan berita
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowAdminModal(false)}
                      className="text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-lg transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Tabs */}
                  <div className="border-b border-gray-200 bg-gray-50 px-6">
                    <div className="flex gap-1">
                      <button
                        onClick={() => setActiveAdminTab("newsletter")}
                        className={`pb-3 pt-4 px-6 font-semibold transition-all relative ${
                          activeAdminTab === "newsletter"
                            ? "text-blue-600"
                            : "text-gray-500 hover:text-gray-700"
                        }`}>
                        <div className="flex items-center gap-2">
                          <span>Newsletter</span>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full ${
                              activeAdminTab === "newsletter"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-gray-200 text-gray-600"
                            }`}>
                            {newsletters.length}
                          </span>
                        </div>
                        {activeAdminTab === "newsletter" && (
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                        )}
                      </button>
                      <button
                        onClick={() => setActiveAdminTab("news")}
                        className={`pb-3 pt-4 px-6 font-semibold transition-all relative ${
                          activeAdminTab === "news"
                            ? "text-blue-600"
                            : "text-gray-500 hover:text-gray-700"
                        }`}>
                        <div className="flex items-center gap-2">
                          <span>Berita & Acara</span>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full ${
                              activeAdminTab === "news"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-gray-200 text-gray-600"
                            }`}>
                            {newsEvents.length}
                          </span>
                        </div>
                        {activeAdminTab === "news" && (
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="overflow-y-auto max-h-[calc(85vh-180px)] p-6">
                    {/* Tab Content */}
                    {activeAdminTab === "newsletter" && (
                      <div className="space-y-3">
                        {newsletters.length === 0 ? (
                          <div className="text-center py-12">
                            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                              </svg>
                            </div>
                            <p className="text-gray-500 font-medium">
                              Belum ada newsletter
                            </p>
                            <p className="text-gray-400 text-sm mt-1">
                              Tambahkan newsletter pertama Anda
                            </p>
                          </div>
                        ) : (
                          newsletters.map((item) => (
                            <div
                              key={item.id}
                              className="flex gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 rounded-xl border border-blue-200 transition-all hover:shadow-md">
                              <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-white shadow-sm">
                                <Image
                                  src={item.image}
                                  alt={item.title}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div className="flex-grow">
                                <h4 className="font-bold text-gray-900 text-lg mb-1 line-clamp-1">
                                  {item.title}
                                </h4>
                                <p className="text-sm text-gray-600 flex items-center gap-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                    />
                                  </svg>
                                  Edisi: {item.edition}
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                  Upload: {item.uploadDate || "N/A"}
                                </p>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    )}

                    {activeAdminTab === "news" && (
                      <div className="space-y-3">
                        {newsEvents.length === 0 ? (
                          <div className="text-center py-12">
                            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                                />
                              </svg>
                            </div>
                            <p className="text-gray-500 font-medium">
                              Belum ada berita
                            </p>
                            <p className="text-gray-400 text-sm mt-1">
                              Tambahkan berita pertama Anda
                            </p>
                          </div>
                        ) : (
                          newsEvents.map((item) => (
                            <div
                              key={item.id}
                              className="flex gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 rounded-xl border border-purple-200 transition-all hover:shadow-md">
                              <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-white shadow-sm">
                                <Image
                                  src={item.image}
                                  alt={item.title}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div className="flex-grow">
                                <h4 className="font-bold text-gray-900 text-lg mb-1 line-clamp-1">
                                  {item.title}
                                </h4>
                                <p className="text-sm text-gray-600 line-clamp-2">
                                  {item.content}
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                  Upload: {item.uploadDate || "N/A"}
                                </p>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex justify-between items-center">
                    <p className="text-sm text-gray-600">
                      Total konten:{" "}
                      <span className="font-bold text-gray-900">
                        {activeAdminTab === "newsletter"
                          ? newsletters.length
                          : newsEvents.length}
                      </span>
                    </p>
                    <Link
                      href="/homeuser/profile"
                      onClick={() => setShowAdminModal(false)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg">
                      Kelola Lengkap
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-12">
            {/* --- BAGIAN KIRI: TEKS SAMBUTAN --- */}
            <section
              className={`text-white pt-4 lg:pt-12 fade-in-left ${
                visibleElements.has("text-section") ? "" : ""
              }`}
              ref={(el) => {
                if (el) {
                  el.id = "text-section";
                  observeElement("text-section", { current: el });
                }
              }}>
              <p
                className={`text-lg text-blue-200 font-medium mb-2 fade-in animation-delay-100 ${
                  visibleElements.has("text-section") ? "fade-in" : ""
                }`}>
                Selamat datang kembali,
              </p>

              {/* Nama User Dinamis */}
              <h1
                className={`text-4xl lg:text-6xl font-extrabold uppercase tracking-wide leading-tight fade-in animation-delay-200 ${
                  visibleElements.has("text-section") ? "fade-in" : ""
                }`}>
                {user?.name ? (
                  <>
                    <span className="block">
                      {user.name.split(" ").slice(0, -1).join(" ")}
                    </span>
                    <span className="text-yellow-400">
                      {user.name.split(" ").slice(-1)}
                    </span>
                  </>
                ) : (
                  "ALUMNI!"
                )}
              </h1>

              <p
                className={`mt-6 text-base lg:text-lg text-gray-200 max-w-xl leading-relaxed fade-in animation-delay-300 ${
                  visibleElements.has("text-section") ? "fade-in" : ""
                }`}>
                Mari terhubung kembali dengan teman sejawat, menjaga hubungan
                dengan almamater, dan menjalin jaringan yang kuat. Bersama-sama,
                mari kita terus menginspirasi.
              </p>

              {/* Menu Cepat (Quick Access) */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
                <Link href="/alumni">
                  <div
                    className={`bg-white/10 hover:bg-white/20 border border-white/20 p-4 rounded-lg cursor-pointer transition-all group fade-in animation-delay-400 ${
                      visibleElements.has("text-section") ? "fade-in" : ""
                    }`}>
                    <h3 className="font-bold text-white group-hover:text-yellow-300">
                      Cari Alumni →
                    </h3>
                    <p className="text-xs text-gray-300 mt-1">
                      Temukan teman seangkatan.
                    </p>
                  </div>
                </Link>
                <Link href="/jobs">
                  <div
                    className={`bg-white/10 hover:bg-white/20 border border-white/20 p-4 rounded-lg cursor-pointer transition-all group fade-in animation-delay-500 ${
                      visibleElements.has("text-section") ? "fade-in" : ""
                    }`}>
                    <h3 className="font-bold text-white group-hover:text-yellow-300">
                      Lowongan Kerja →
                    </h3>
                    <p className="text-xs text-gray-300 mt-1">
                      Peluang karir terbaru.
                    </p>
                  </div>
                </Link>
              </div>

              {/* Admin Action Buttons */}
              {user?.accountType === "admin" && (
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
                  <Link href="/newsandevents">
                    <div className="bg-white/10 hover:bg-white/20 border border-white/20 p-4 rounded-lg cursor-pointer transition-all group">
                      <h3 className="font-bold text-white group-hover:text-yellow-300">
                        Tambah Berita →
                      </h3>
                      <p className="text-xs text-gray-300 mt-1">
                        Tambahkan berita terbaru.
                      </p>
                    </div>
                  </Link>

                  <Link href="/newsletter">
                    <div className="bg-white/10 hover:bg-white/20 border border-white/20 p-4 rounded-lg cursor-pointer transition-all group">
                      <h3 className="font-bold text-white group-hover:text-yellow-300">
                        Tambah Newsletter →
                      </h3>
                      <p className="text-xs text-gray-300 mt-1">
                        Kelola edisi newsletter.
                      </p>
                    </div>
                  </Link>
                </div>
              )}
            </section>

            {/* --- BAGIAN KANAN: KARTU PROFIL --- */}
            <aside
              className={`flex justify-center lg:justify-end lg:pt-12 fade-in-right ${
                visibleElements.has("profile-card") ? "" : ""
              }`}
              ref={(el) => {
                if (el) {
                  el.id = "profile-card";
                  observeElement("profile-card", { current: el });
                }
              }}>
              <div
                className={`w-full max-w-sm bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-gray-200 fade-in-scale ${
                  visibleElements.has("profile-card") ? "fade-in-scale" : ""
                }`}>
                {/* Foto Profil Area */}
                <div className="p-8 bg-gradient-to-b from-blue-50 to-white flex items-center justify-center">
                  <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden border-4 border-white relative">
                    {user?.photo ? (
                      <img
                        src={user.photo}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-5xl font-bold text-[#1E3A8A]">
                        {user?.initials || "AA"}
                      </span>
                    )}
                  </div>
                </div>

                {/* Informasi User */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {user?.name || "Nama Pengguna"}
                  </h3>

                  {/* Jurusan */}
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600 font-medium mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-blue-600"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                    {user?.academic?.programStudi || "Program Studi"}
                  </div>

                  {/* Pekerjaan (Jika Ada) */}
                  {user?.job?.company && (
                    <div className="inline-block bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full font-semibold mb-6 border border-blue-100">
                      {user.job.position || "Staff"} at {user.job.company}
                    </div>
                  )}

                  {/* Tombol Aksi */}
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    <Link href="/homeuser/profile" className="w-full">
                      <button className="w-full py-2 bg-[#1E3A8A] hover:bg-[#152C6B] text-white text-sm font-semibold rounded-lg transition-colors shadow-md">
                        Lihat Profil
                      </button>
                    </Link>
                    <Link href="/homeuser/perbaruiprofil" className="w-full">
                      <button className="w-full py-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 text-sm font-semibold rounded-lg transition-colors">
                        Edit Profil
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* ABOUT SECTION*/}
      <AboutUs />
    </div>
  );
}
