// Import ikon kustom dari folder components/icons
import LihatDaftarAlumniIcon from "@/components/icons/LihatDaftarAlumniIcon";
import TentangAlumniIcon from "@/components/icons/TentangAlumniIcon";

// Next.js Image component untuk optimisasi gambar
import Image from "next/image";

// Halaman utama (Home) aplikasi — komponen fungsional Next.js
export default function Home() {
  // Render struktur layout utama menggunakan class Tailwind/DaisyUI
  return (
    <div className="drawer">
      {/* Checkbox kontrol untuk drawer (sidebar) pada layout */}
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      {/* Konten utama halaman */}
      <div className="drawer-content flex flex-col bg-white pt-3 min-h-screen">
        {/* Navbar atas — tetap (fixed) di bagian atas */}
        <div className="navbar bg-white w-full px-6 py-3 sticky top-0 left-0 z-50">
          {/* Tombol hamburger hanya tampil di layar kecil */}
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost">
              {/* Icon hamburger (SVG) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div>

          {/* Bagian kiri navbar: logo dan nama institusi */}
          <div className="navbar-start">
            <div className="flex flex-row items-center gap-x-4">
              {/* Logo universitas — menggunakan Next.js Image untuk optimisasi */}
              <Image
                src="/unhas-logo.png"
                alt="Unhas Logo"
                width={40}
                height={10}
                priority
              />

              {/* Teks identitas institusi */}
              <div className="flex flex-col text-black">
                <span className="font-normal text-sm">
                  Universitas Hasanuddin
                </span>
                <span className="font-bold text-sm">
                  Department of Informatics
                </span>
              </div>
            </div>
          </div>

          {/* Menu navigasi tengah */}
          <div className="navbar-center">
            <ul className="menu menu-horizontal text-black font-medium text-xl flex items-center gap-4">
              <li className="relative group px-2">
                <span className="font-extrabold text-[#1E3A8A] transition-transform duration-200 group-hover:scale-110 cursor-pointer">
                  Home
                </span>
                <div className="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max rounded-md bg-white text-black text-sm px-3 py-1 shadow-lg opacity-0 scale-95 transform transition-all duration-200 group-hover:opacity-100 group-hover:scale-100">
                  Menu Home
                </div>
              </li>

              <li className="relative group px-2">
                <span className="transition-transform duration-200 group-hover:scale-110 cursor-pointer">
                  Alumni
                </span>
                <div className="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max rounded-md bg-white text-black text-sm px-3 py-1 shadow-lg opacity-0 scale-95 transform transition-all duration-200 group-hover:opacity-100 group-hover:scale-100">
                  Daftar Alumni & Profil
                </div>
              </li>

              <li className="relative group px-2">
                <a
                  href="#about-section"
                  className="transition-transform duration-200 group-hover:scale-110 cursor-pointer">
                  About
                </a>
                <div className="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max rounded-md bg-white text-black text-sm px-3 py-1 shadow-lg opacity-0 scale-95 transform transition-all duration-200 group-hover:opacity-100 group-hover:scale-100">
                  Tentang kami
                </div>
              </li>

              <li className="relative group px-2">
                <span className="transition-transform duration-200 group-hover:scale-110 cursor-pointer">
                  Contact
                </span>
                <div className="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max rounded-md bg-white text-black text-sm px-3 py-1 shadow-lg opacity-0 scale-95 transform transition-all duration-200 group-hover:opacity-100 group-hover:scale-100">
                  Hubungi kami
                </div>
              </li>

              <li className="relative group px-2">
                <span className="transition-transform duration-200 group-hover:scale-110 cursor-pointer">
                  Survey
                </span>
                <div className="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max rounded-md bg-white text-black text-sm px-3 py-1 shadow-lg opacity-0 scale-95 transform transition-all duration-200 group-hover:opacity-100 group-hover:scale-100">
                  Ikuti Survey
                </div>
              </li>
            </ul>
          </div>

          {/* Bagian kanan navbar: tombol Sign in / Register */}
          <div className="navbar-end gap-5">
            <div className="relative group">
              <a href="/login" aria-label="Login">
                <button className="rounded-lg bg-[#E3E3E3] border border-[#767676] px-3 py-1 text-base text-[#1E1E1E] flex items-center gap-3 transition-transform duration-200 group-hover:scale-105 hover:shadow-md">
                  <Image
                    src="/logo login.png"
                    alt="Login logo"
                    width={28}
                    height={28}
                    className="rounded-full"
                    priority
                  />
                  <span className="font-medium">Login</span>
                </button>
              </a>

              <div className="pointer-events-none absolute top-full right-0 mt-2 w-max rounded-md bg-white text-black text-sm px-3 py-1 shadow-lg opacity-0 scale-95 transform transition-all duration-200 group-hover:opacity-100 group-hover:scale-100">
                Masuk ke akun
              </div>
            </div>
          </div>
        </div>

        {/* Hero / bagian utama halaman dengan latar biru tua */}
        <div className="">
          <div className="min-h-screen bg-[#1E3A8A] flex w-full h-full justify-center items-center">
            <div className="flex flex-row px-16 gap-x-32">
              {/* Kolom teks kiri — judul, deskripsi, dan tombol aksi */}
              <div className="flex flex-col flex-1 gap-y-16">
                <span className="font-bold text-5xl transition-all duration-300 ease-out cursor-pointer hover:scale-105 hover:drop-shadow-2xl">
                  Website Resmi <br /> Alumni Teknik Informatika Universitas
                  Hasanuddin
                </span>

                <span className="font-medium text-xl transition-all duration-300 ease-out cursor-pointer hover:scale-105 hover:drop-shadow-lg hover:text-white">
                  Sarana komunikasi dan kolaborasi alumni, mahasiswa, dan
                  civitas akademika dalam mewujudkan kontribusi nyata di bidang
                  teknologi dan pendidikan.
                </span>

                {/* Tombol utama aksi: lihat daftar alumni & tentang alumni */}
                <div className="flex flex-row gap-6">
                  <button className="bg-white rounded-md px-6 py-4 text-black font-medium text-xl flex items-center gap-2 transition-all duration-300 ease-out cursor-pointer hover:scale-105 hover:drop-shadow-lg hover:text-black">
                    {/* Ikon kustom — prop className/width diteruskan ke ikon */}
                    <LihatDaftarAlumniIcon className="text-black" width={32} />
                    <span>Lihat Daftar Alumni</span>
                  </button>

                  <button className="border border-white rounded-md px-6 py-4 text-white font-medium text-xl flex items-center gap-2 transition-all duration-300 ease-out cursor-pointer hover:scale-105 hover:drop-shadow-lg hover:text-white">
                    <TentangAlumniIcon className="text-white" width={32} />
                    <span>Tentang Alumni</span>
                  </button>
                </div>
              </div>

              {/* Kolom kanan — statistik ringkas */}
              <div className="flex flex-1 items-center justify-center">
                <div className="bg-[#354E96] flex rounded-2xl p-16 gap-16 transition-all duration-300 ease-out cursor-pointer hover:scale-105 hover:drop-shadow-lg hover:text-white">
                  {/* Setiap blok menampilkan angka dan label */}
                  <div className="flex flex-col items-center ">
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

        {/* Bagian hero tambahan dengan gambar dan teks - besar, bergaya kartu */}
        <div className="w-full bg-white">
          <div className="max-w-7xl mx-auto px-6 py-12 space-y-10">
            {/* Kartu 1 - Dana Abadi (teks kiri, gambar kanan) */}
            <section className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row items-stretch">
              <div className="lg:w-2/3 p-10 md:p-16 flex flex-col justify-center">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
                  Dana Abadi Untuk Unhas Maju
                </h2>
                <p className="mt-6 text-gray-600 leading-relaxed max-w-2xl">
                  Dana Abadi yang terkumpul ditampung pada rekening bank Rektor
                  Universitas Hasanuddin. Selanjutnya, dana tersebut dikelola
                  dan dikembangkan secara terus-menerus dalam berbagai instrumen
                  investasi.
                </p>

                <div className="mt-8 w-full lg:w-1/2">
                  <button className="w-full bg-[#0b3b57] hover:bg-[#0d4f6f] text-white py-4 rounded-lg font-semibold tracking-wide shadow-md">
                    DONASI &nbsp; ➜
                  </button>
                </div>
              </div>

              <div className="lg:w-1/3 relative shrink-0">
                <div className="h-56 md:h-auto lg:h-full w-full overflow-hidden">
                  <Image
                    src="/DSC09820.JPG"
                    alt="Kampus Unhas"
                    width={1200}
                    height={800}
                    className="object-cover h-full w-full"
                    unoptimized
                  />
                </div>
              </div>
            </section>

            {/* Kartu 2 - Survei (gambar kiri, teks kanan) */}
            <section className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row items-stretch">
              <div className="lg:w-1/3 relative shrink-0">
                <div className="h-56 md:h-auto lg:h-full w-full overflow-hidden">
                  <Image
                    src="/DSC09820.JPG"
                    alt="Wisuda / Survei"
                    width={1200}
                    height={800}
                    className="object-cover h-full w-full"
                    unoptimized
                  />
                </div>
              </div>

              <div className="lg:w-2/3 p-10 md:p-16 flex flex-col justify-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">
                  Survei Penjaringan Alumni
                </h3>
                <p className="mt-6 text-gray-600 leading-relaxed max-w-2xl">
                  Survei ini ditujukan untuk para alumni unhas yang lulus pada
                  tahun 2010 dan tahun-tahun sebelumnya.
                </p>

                <div className="mt-8 w-full lg:w-1/2">
                  <button className="w-full bg-[#0b3b57] hover:bg-[#0d4f6f] text-white py-4 rounded-lg font-semibold tracking-wide shadow-md">
                    ISI SURVEI &nbsp; ➜
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Bagian konten tambahan di bawah hero — tampilkan kartu secara horizontal */}
        <div className="bg-white flex justify-center">
          <div className="flex flex-row gap-8 px-8 py-12 items-start">
            {/* Card 1 */}
            <div className="card bg-[#354E96] w-80 shadow-sm rounded-xl overflow-hidden">
              <figure>
                <Image
                  src="/DSC09820.JPG"
                  alt="Alumni 1"
                  width={320}
                  height={176}
                  className="object-cover h-44 w-full"
                  unoptimized
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Title</button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card bg-[#354E96] w-80 shadow-sm rounded-xl overflow-hidden">
              <figure>
                <Image
                  src="/DSC09820.JPG"
                  alt="Alumni 2"
                  width={320}
                  height={176}
                  className="object-cover h-44 w-full"
                  unoptimized
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Title</button>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-[#354E96] w-80 shadow-sm rounded-xl overflow-hidden">
              <figure>
                <Image
                  src="/DSC09820.JPG"
                  alt="Alumni 1"
                  width={320}
                  height={176}
                  className="object-cover h-44 w-full"
                  unoptimized
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Title</button>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="card bg-[#354E96] w-80 shadow-sm rounded-xl overflow-hidden">
              <figure>
                <Image
                  src="/DSC09820.JPG"
                  alt="Alumni 2"
                  width={320}
                  height={176}
                  className="object-cover h-44 w-full"
                  unoptimized
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Title</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bagian konten about us*/}
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
                  Portal Alumni ini didirikan sebagai wadah untuk menjaga
                  hubungan antara alumni, universitas, dan mahasiswa saat ini.
                  Tujuan kami adalah memfasilitasi interaksi dan kolaborasi
                  antara alumni, berbagi pengalaman, informasi karir, dan
                  membangun jejaring yang bermanfaat.
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
                    <span className="text-gray-700 font-medium">
                      Profil Alumni
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
                      (+62)81253584528
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-blue-500 font-medium">✓</span>
                      (+62)81243278997
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
                      <span className="font-semibold text-gray-700">
                        E-mail :
                      </span>
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

        <footer className="footer sm:footer-horizontal bg-[#1E3A8A] text-white p-10">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
        <footer className="footer bg-[#1E3A8A] text-white border-t border-[#2A4A86] px-10 py-4">
          <aside className="flex items-center gap-4">
            <Image
              src="/unhas-logo.png"
              alt="Unhas Logo"
              width={48}
              height={48}
              priority
            />
            <p>
              DEPARTEMEN TEKNIK INFORMATIKA
              <br />
              AZZAMBLER 22
            </p>
          </aside>
          <nav className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </nav>
        </footer>
      </div>

      {/* Sidebar (drawer-side) yang muncul ketika checkbox drawer aktif */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>

      {/* Placeholder tambahan — saat ini kosong; bisa dihapus bila tidak digunakan */}
      <div className="">
        <div></div>
      </div>
    </div>
  );
}
