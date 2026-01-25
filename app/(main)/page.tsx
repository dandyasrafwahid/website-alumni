// Import ikon kustom
import LihatDaftarAlumniIcon from "@/components/icons/LihatDaftarAlumniIcon";
import TentangAlumniIcon from "@/components/icons/TentangAlumniIcon";

// Import Navbar komponen
import Navbar from "@/components/Navbar";

// Next.js components
import Image from "next/image";
import Link from "next/link"; // Import Link untuk navigasi

export default function Home() {
  // Data Mockup Singkat untuk Tampilan Home
  const homeNewsletters = [
    {
      id: 1,
      title: "ACTION 2025",
      edition: "Desember 2025",
      image: "/DSC09820.JPG",
    },
    {
      id: 2,
      title: "ACTION 2025",
      edition: "Oktober 2025",
      image: "/DSC09820.JPG",
    },
    {
      id: 3,
      title: "ACTION 2025",
      edition: "Agustus 2025",
      image: "/DSC09820.JPG",
    },
    {
      id: 4,
      title: "ACTION 2025",
      edition: "Mei 2025",
      image: "/DSC09820.JPG",
    },
  ];

  return (
    <div className="drawer">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div
        id="main-content"
        className="drawer-content flex flex-col bg-[#1E3A8A] min-h-screen">
        <Navbar />

        {/* --- HERO SECTION --- */}
        <div className="pt-20 lg:pt-24">
          <div className="min-h-[90vh] bg-[#1E3A8A] flex w-full h-full justify-center items-center pb-12">
            <div className="flex flex-col lg:flex-row px-6 lg:px-16 gap-10 lg:gap-x-32 items-center">
              {/* Kolom teks kiri */}
              <div className="flex flex-col flex-1 gap-y-10 lg:gap-y-16 text-center lg:text-left">
                <span className="font-bold text-4xl lg:text-5xl transition-all duration-300 ease-out text-white">
                  Website Resmi <br /> Alumni Teknik Informatika Universitas
                  Hasanuddin
                </span>

                <span className="font-medium text-lg lg:text-xl text-white opacity-90">
                  Sarana komunikasi dan kolaborasi alumni, mahasiswa, dan
                  civitas akademika dalam mewujudkan kontribusi nyata di bidang
                  teknologi dan pendidikan.
                </span>

                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                  <button className="bg-white rounded-md px-6 py-4 text-black font-medium text-lg lg:text-xl flex items-center justify-center gap-2 hover:scale-105 transition-transform">
                    <LihatDaftarAlumniIcon className="text-black" width={32} />
                    <span>Lihat Daftar Alumni</span>
                  </button>

                  <button className="border border-white rounded-md px-6 py-4 text-white font-medium text-lg lg:text-xl flex items-center justify-center gap-2 hover:scale-105 transition-transform hover:bg-white/10">
                    <TentangAlumniIcon className="text-white" width={32} />
                    <span>Tentang Alumni</span>
                  </button>
                </div>
              </div>

              {/* Kolom kanan — statistik */}
              <div className="flex flex-1 items-center justify-center w-full">
                <div className="bg-[#354E96] flex flex-col sm:flex-row rounded-2xl p-8 lg:p-16 gap-8 lg:gap-16 hover:scale-105 transition-transform text-center w-full justify-center">
                  <div className="flex flex-col items-center">
                    <span className="text-white font-bold text-3xl">1K+</span>
                    <span className="text-white font-normal text-base">
                      Alumni Terhubung
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-white font-bold text-3xl">450+</span>
                    <span className="text-white font-normal text-base">
                      Perusahaan
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-white font-bold text-3xl">92%</span>
                    <span className="text-white font-normal text-base">
                      Alumni Bekerja
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- AREA KONTEN PUTIH --- */}
        <div className="w-full bg-white pt-12 pb-12 rounded-t-3xl mt-[-20px] z-10 relative space-y-20">
          {/* 1. BAGIAN KARTU INFO (Dana Abadi & Survei) */}
          <div className="max-w-7xl mx-auto px-6 space-y-10">
            {/* Kartu Dana Abadi */}
            <section className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row items-stretch border border-gray-100">
              <div className="lg:w-2/3 p-10 md:p-16 flex flex-col justify-center">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
                  Dana Abadi Untuk Unhas Maju
                </h2>
                <p className="mt-6 text-gray-600 leading-relaxed max-w-2xl">
                  Dana Abadi yang terkumpul ditampung pada rekening bank Rektor
                  Universitas Hasanuddin...
                </p>
                <div className="mt-8 w-full lg:w-1/2">
                  <button className="w-full bg-[#0b3b57] hover:bg-[#0d4f6f] text-white py-4 rounded-lg font-semibold tracking-wide shadow-md transition-colors">
                    DONASI &nbsp; ➜
                  </button>
                </div>
              </div>
              <div className="lg:w-1/3 relative shrink-0">
                <div className="h-56 md:h-auto lg:h-full w-full overflow-hidden">
                  <Image
                    src="/DSC09820.JPG"
                    alt="Kampus"
                    width={1200}
                    height={800}
                    className="object-cover h-full w-full"
                  />
                </div>
              </div>
            </section>

            {/* Kartu Survei */}
            <section className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row items-stretch border border-gray-100">
              <div className="lg:w-1/3 relative shrink-0 order-2 lg:order-1">
                <div className="h-56 md:h-auto lg:h-full w-full overflow-hidden">
                  <Image
                    src="/DSC09820.JPG"
                    alt="Survei"
                    width={1200}
                    height={800}
                    className="object-cover h-full w-full"
                  />
                </div>
              </div>
              <div className="lg:w-2/3 p-10 md:p-16 flex flex-col justify-center order-1 lg:order-2">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">
                  Survei Penjaringan Alumni
                </h3>
                <p className="mt-6 text-gray-600 leading-relaxed max-w-2xl">
                  Survei ini ditujukan untuk para alumni unhas yang lulus pada
                  tahun 2010...
                </p>
                <div className="mt-8 w-full lg:w-1/2">
                  <button className="w-full bg-[#0b3b57] hover:bg-[#0d4f6f] text-white py-4 rounded-lg font-semibold tracking-wide shadow-md transition-colors">
                    ISI SURVEI &nbsp; ➜
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* 2. BAGIAN NEWS & EVENTS */}
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              News and Events
            </h2>
            <div className="flex flex-row gap-8 pb-4 overflow-x-auto scrollbar-hide">
              {/* Card News 1 */}
              <div className="flex-shrink-0 w-80 rounded-xl overflow-hidden shadow-md border border-gray-100 group cursor-pointer">
                <div className="relative h-48 w-full">
                  <Image
                    src="/DSC09820.JPG"
                    alt="News"
                    width={320}
                    height={192}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform"
                  />
                </div>
                <div className="bg-white p-5">
                  <h3 className="text-gray-800 font-semibold line-clamp-2 group-hover:text-blue-600">
                    Sosok Alumni Berprestasi
                  </h3>
                </div>
              </div>
              {/* Card News 2 */}
              <div className="flex-shrink-0 w-80 rounded-xl overflow-hidden shadow-md border border-gray-100 group cursor-pointer">
                <div className="relative h-48 w-full">
                  <Image
                    src="/DSC09820.JPG"
                    alt="News"
                    width={320}
                    height={192}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform"
                  />
                </div>
                <div className="bg-white p-5">
                  <h3 className="text-gray-800 font-semibold line-clamp-2 group-hover:text-blue-600">
                    Perayaan Maulid Universitas
                  </h3>
                </div>
              </div>
              {/* Card News 3 */}
              <div className="flex-shrink-0 w-80 rounded-xl overflow-hidden shadow-md border border-gray-100 group cursor-pointer">
                <div className="relative h-48 w-full">
                  <Image
                    src="/DSC09820.JPG"
                    alt="News"
                    width={320}
                    height={192}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform"
                  />
                </div>
                <div className="bg-white p-5">
                  <h3 className="text-gray-800 font-semibold line-clamp-2 group-hover:text-blue-600">
                    Employer Meeting
                  </h3>
                </div>
              </div>
            </div>

            {/* LINK KE HALAMAN NEWS */}
            <div className="flex justify-end mt-4">
              <Link
                href="/news"
                className="text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-2 transition-colors">
                Lihat Berita Selengkapnya <span>→</span>
              </Link>
            </div>
          </div>

          {/* 3. BAGIAN NEWSLETTER (BARU DITAMBAHKAN) */}
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Newsletter
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {homeNewsletters.map((item) => (
                <div
                  key={item.id}
                  className="relative group rounded-xl overflow-hidden shadow-lg aspect-[3/4] cursor-pointer">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.edition}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* LINK KE HALAMAN NEWSLETTER */}
            <div className="flex justify-end mt-6">
              <Link
                href="/newsletter"
                className="text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-2 transition-colors">
                Lihat Newsletter Selengkapnya <span>→</span>
              </Link>
            </div>
          </div>

          {/* 4. BAGIAN JOBS (BARU DITAMBAHKAN) */}
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Jobs and Vacancy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Job Card 1 */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-blue-600 font-bold text-lg uppercase">
                      Job Vacancy And Opportunities
                    </h3>
                    <p className="text-gray-800 font-semibold mt-1">
                      OPEN RECRUITMENT - ODP REGIONAL BUSINESS
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      BANK MANDIRI 🌏 Bank Mandiri membuka...
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                    ↗
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 mt-auto">
                  <span>📅 18-31 Jan 2026</span>
                  <span>📍 Tergantung Lokasi</span>
                </div>
              </div>

              {/* Job Card 2 */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-blue-600 font-bold text-lg uppercase">
                      Pengadaan PPPK
                    </h3>
                    <p className="text-gray-800 font-semibold mt-1">
                      Halo Alumni Universitas Hasanuddin...
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      Direktorat Hubungan Alumni ingin berbagi info...
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                    ↗
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 mt-auto">
                  <span>📅 01-31 Jan 2026</span>
                  <span>📍 Tergantung Lokasi</span>
                </div>
              </div>
            </div>

            {/* LINK KE HALAMAN JOBS (Sesuai Permintaan: "Lihat Berita Selengkapnya" tapi ke jobs) */}
            <div className="flex justify-end mt-6">
              <Link
                href="/jobs"
                className="text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-2 transition-colors">
                Lihat Berita Selengkapnya <span>→</span>
              </Link>
            </div>
          </div>

          {/* 5. BAGIAN ABOUT US (Scroll Target) */}
          <div
            id="about-section"
            className="w-full bg-gradient-to-b from-blue-50 to-white py-16 px-6 rounded-xl">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1">
                <span className="text-blue-600 font-bold text-sm tracking-widest uppercase bg-blue-100 px-3 py-1 rounded-full">
                  APA YANG KAMI BERIKAN?
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 mt-4 leading-tight">
                  <span className="text-blue-600">Tentang Kami</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Portal Alumni ini didirikan sebagai wadah untuk menjaga
                  hubungan antara alumni...
                </p>
                {/* Kontak Info */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <p className="text-gray-800 font-bold mb-3">
                    Info lebih lanjut silahkan menghubungi :
                  </p>
                  <p className="text-gray-600 text-sm flex items-center gap-2">
                    ✓ (+62) 812 5358 4528
                  </p>
                  <p className="text-gray-600 text-sm flex items-center gap-2 mt-2">
                    ✓ (+62) 812 4327 8997
                  </p>
                  <p className="text-gray-600 text-sm flex items-center gap-2 mt-4 font-semibold">
                    E-mail :{" "}
                    <span className="text-blue-600">
                      informatika@unhas.ac.id
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex-1 w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl relative">
                <Image
                  src="/kampus03.png"
                  alt="Unhas"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side z-50">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/news">News</Link>
          </li>
          <li>
            <Link href="/jobs">Jobs</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
