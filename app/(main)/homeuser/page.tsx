"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

export default function HomeUser() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [newsletters, setNewsletters] = useState<any[]>([]);
  const [newsEvents, setNewsEvents] = useState<any[]>([]);
  const [activeAdminTab, setActiveAdminTab] = useState<"newsletter" | "news">(
    "newsletter",
  );

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
      <Navbar />

      <main className="relative min-h-screen">
        {/* --- BACKGROUND IMAGE & OVERLAY --- */}
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/DSC09820.JPG" // Pastikan gambar ini ada di folder public
            alt="bg"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#1E3A8A] opacity-90"></div>
        </div>

        {/* --- ADMIN MANAGEMENT SECTION (Hanya untuk admin) --- */}
        {user?.accountType === "admin" && (
          <div
            id="admin-section"
            className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-12">
            <div className="bg-white/95 rounded-2xl shadow-xl p-8 border-2 border-yellow-300">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">⚙️</span>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Admin Dashboard
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Kelola konten newsletter dan berita departemen
                  </p>
                </div>
              </div>

              {/* Admin Tabs */}
              <div className="flex gap-4 mb-6 border-b border-gray-200">
                <button
                  onClick={() => setActiveAdminTab("newsletter")}
                  id="newsletter"
                  className={`pb-4 px-4 font-semibold transition-colors ${
                    activeAdminTab === "newsletter"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}>
                  Newsletter ({newsletters.length})
                </button>
                <button
                  onClick={() => setActiveAdminTab("news")}
                  id="news"
                  className={`pb-4 px-4 font-semibold transition-colors ${
                    activeAdminTab === "news"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}>
                  Berita & Acara ({newsEvents.length})
                </button>
              </div>

              {/* Tab Content */}
              {activeAdminTab === "newsletter" && (
                <div className="space-y-4">
                  {newsletters.length === 0 ? (
                    <p className="text-center text-gray-500 py-6">
                      Belum ada newsletter
                    </p>
                  ) : (
                    newsletters.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition">
                        <div className="relative w-16 h-16 flex-shrink-0 rounded overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-bold text-gray-900">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-600">
                            Edisi: {item.edition}
                          </p>
                          <p className="text-xs text-gray-500">
                            Upload: {item.uploadDate}
                          </p>
                        </div>
                      </div>
                    ))
                  )}
                  <Link
                    href="/homeuser/profile"
                    className="inline-block mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-sm transition">
                    Kelola Newsletter Lengkap →
                  </Link>
                </div>
              )}

              {activeAdminTab === "news" && (
                <div className="space-y-4">
                  {newsEvents.length === 0 ? (
                    <p className="text-center text-gray-500 py-6">
                      Belum ada berita
                    </p>
                  ) : (
                    newsEvents.slice(0, 3).map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition">
                        <div className="relative w-16 h-16 flex-shrink-0 rounded overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-bold text-gray-900">
                            {item.title}
                          </h4>
                          <p className="text-xs text-gray-600 line-clamp-1">
                            {item.content}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            Upload: {item.uploadDate}
                          </p>
                        </div>
                      </div>
                    ))
                  )}
                  <Link
                    href="/homeuser/profile"
                    className="inline-block mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-sm transition">
                    Kelola Berita Lengkap →
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-12">
            {/* --- BAGIAN KIRI: TEKS SAMBUTAN --- */}
            <section className="text-white pt-4 lg:pt-12">
              <p className="text-lg text-blue-200 font-medium mb-2">
                Selamat datang kembali,
              </p>

              {/* Nama User Dinamis */}
              <h1 className="text-4xl lg:text-6xl font-extrabold uppercase tracking-wide leading-tight">
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

              <p className="mt-6 text-base lg:text-lg text-gray-200 max-w-xl leading-relaxed">
                Mari terhubung kembali dengan teman sejawat, menjaga hubungan
                dengan almamater, dan menjalin jaringan yang kuat. Bersama-sama,
                mari kita terus menginspirasi.
              </p>

              {/* Menu Cepat (Quick Access) */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
                <Link href="/alumni">
                  <div className="bg-white/10 hover:bg-white/20 border border-white/20 p-4 rounded-lg cursor-pointer transition-all group">
                    <h3 className="font-bold text-white group-hover:text-yellow-300">
                      Cari Alumni →
                    </h3>
                    <p className="text-xs text-gray-300 mt-1">
                      Temukan teman seangkatan.
                    </p>
                  </div>
                </Link>
                <Link href="/jobs">
                  <div className="bg-white/10 hover:bg-white/20 border border-white/20 p-4 rounded-lg cursor-pointer transition-all group">
                    <h3 className="font-bold text-white group-hover:text-yellow-300">
                      Lowongan Kerja →
                    </h3>
                    <p className="text-xs text-gray-300 mt-1">
                      Peluang karir terbaru.
                    </p>
                  </div>
                </Link>
              </div>
            </section>

            {/* --- BAGIAN KANAN: KARTU PROFIL --- */}
            <aside className="flex justify-center lg:justify-end lg:pt-12">
              <div className="w-full max-w-sm bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-gray-200">
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

      {/* --- ABOUT SECTION (Dari Desain Awal) --- */}
      <div
        id="about-section"
        className="w-full bg-gradient-to-b from-blue-50 to-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Kolom Kiri: Teks About */}
            <div className="flex-1">
              <div className="mb-6">
                <span className="text-blue-600 font-bold text-xs tracking-widest uppercase bg-blue-100 px-3 py-1 rounded-full">
                  APA YANG KAMI BERIKAN?
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                <span className="text-[#1E3A8A]">Tentang Kami</span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl">
                Portal Alumni ini didirikan sebagai wadah untuk menjaga hubungan
                antara alumni, universitas, dan mahasiswa saat ini. Tujuan kami
                adalah memfasilitasi interaksi dan kolaborasi antara alumni,
                berbagi pengalaman, informasi karir, dan membangun jejaring yang
                bermanfaat.
              </p>

              {/* Info Kontak */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
                <p className="text-gray-800 font-bold mb-4 text-lg">
                  Info lebih lanjut silahkan menghubungi :
                </p>
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-center gap-3">
                    <span className="text-green-500 font-bold bg-green-50 rounded-full w-6 h-6 flex items-center justify-center text-xs">
                      ✓
                    </span>
                    (+62) 812 5358 4528
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-green-500 font-bold bg-green-50 rounded-full w-6 h-6 flex items-center justify-center text-xs">
                      ✓
                    </span>
                    (+62) 812 4327 8997
                  </p>
                  <div className="border-t border-gray-100 my-3"></div>
                  <p className="flex items-center gap-3 mt-3">
                    <span className="font-semibold text-gray-800">
                      E-mail :
                    </span>
                    <a
                      href="mailto:informatika@unhas.ac.id"
                      className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                      informatika@unhas.ac.id
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Kolom Kanan: Gambar */}
            <div className="flex-1 w-full">
              <div className="rounded-2xl overflow-hidden shadow-2xl relative group h-[400px]">
                <Image
                  src="/kampus03.png" // Pastikan gambar ini ada
                  alt="Universitas Hasanuddin"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
