// Import ikon kustom dari folder components/icons
import LihatDaftarAlumniIcon from "@/components/icons/LihatDaftarAlumniIcon";
import TentangAlumniIcon from "@/components/icons/TentangAlumniIcon";

// Import Navbar komponen
import Navbar from "@/components/Navbar";

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
      <div
        id="main-content"
        className="drawer-content flex flex-col bg-white pt-3 min-h-screen">
        {/* Navbar atas — menggunakan komponen Navbar */}
        <Navbar />

        {/* Hero / bagian utama halaman dengan latar biru tua */}
        <div className="">
          <div className="min-h-screen bg-[#1E3A8A] flex w-full h-full justify-center items-center">
            <div className="flex flex-row px-16 gap-x-32">
              {/* Kolom teks kiri — judul, deskripsi, dan tombol aksi */}
              <div className="flex flex-col flex-1 gap-y-16">
                <span className="font-bold text-5xl transition-all duration-300 ease-out cursor-pointer hover:scale-105 hover:drop-shadow-2xl text-white">
                  Website Resmi <br /> Alumni Teknik Informatika Universitas
                  Hasanuddin
                </span>

                <span className="font-medium text-xl transition-all duration-300 ease-out cursor-pointer hover:scale-105 hover:drop-shadow-lg hover:text-white text-white">
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

        {/* Bagian newslatter */}
        <div className="bg-white flex justify-center">
          <div className="w-full max-w-7xl relative">
            <div className="flex flex-row gap-8 px-8 py-12 items-start overflow-x-auto">
              {/* Card 1 - Sosok Alumni */}
              <div className="flex-shrink-0 w-80 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative h-48 w-full">
                  <Image
                    src="/DSC09820.JPG"
                    alt="Sosok Alumni"
                    width={320}
                    height={192}
                    className="object-cover w-full h-full"
                    unoptimized
                  />
                </div>
                <div className="bg-white p-4">
                  <h3 className="text-gray-800 font-semibold text-base line-clamp-2">
                    Sosok Alumni
                  </h3>
                </div>
              </div>

              {/* Card 2 - Perayaan Maulid */}
              <div className="flex-shrink-0 w-80 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative h-48 w-full">
                  <Image
                    src="/DSC09820.JPG"
                    alt="Perayaan Maulid Universitas Hasanuddin"
                    width={320}
                    height={192}
                    className="object-cover w-full h-full"
                    unoptimized
                  />
                </div>
                <div className="bg-white p-4">
                  <h3 className="text-gray-800 font-semibold text-base line-clamp-2">
                    Perayaan Maulid Universitas Hasanuddin, di tepi danau UNHAS
                  </h3>
                </div>
              </div>

              {/* Card 3 - Employer Meeting */}
              <div className="flex-shrink-0 w-80 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative h-48 w-full">
                  <Image
                    src="/DSC09820.JPG"
                    alt="Employer Meeting"
                    width={320}
                    height={192}
                    className="object-cover w-full h-full"
                    unoptimized
                  />
                </div>
                <div className="bg-white p-4">
                  <h3 className="text-gray-800 font-semibold text-base line-clamp-2">
                    Employer Meeting: Memperkuat Kesiapan Lulusan Universitas
                    Hasanuddin di Dunia Industri
                  </h3>
                </div>
              </div>

              {/* Card 4 - Lomba Kaddo' */}
              <div className="flex-shrink-0 w-80 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative h-48 w-full">
                  <Image
                    src="/DSC09820.JPG"
                    alt="Lomba Kaddo' Minnya'"
                    width={320}
                    height={192}
                    className="object-cover w-full h-full"
                    unoptimized
                  />
                </div>
                <div className="bg-white p-4">
                  <h3 className="text-gray-800 font-semibold text-base line-clamp-2">
                    Lomba Kaddo' Minnya', Meriahkan Dies Natalis ke-69 Unhas!
                  </h3>
                </div>
              </div>
            </div>
            {/* Tombol Lihat Berita Selengkapnya */}
            <div className="flex justify-end px-8 py-4">
              <a
                href="#"
                className="text-blue-500 font-semibold text-base hover:text-blue-600 transition-colors">
                Lihat Berita Selengkapnya →
              </a>
            </div>
          </div>
        </div>

        {/* Bagian konten about us*/}
        <div
          id="about-section"
          className="w-full bg-linear-to-b from-blue-50 to-white py-16 px-6">
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
                        informatika@unhas.ac.id
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Kolom kanan - Gambar */}
              <div className="flex-1">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/kampus03.png"
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
            <a className="link link-hover">https://unhas.ac.id</a>
            <a className="link link-hover">https://sso.unhas.ac.id</a>
            <a className="link link-hover">https://neosia.unhas.ac.id</a>
            <a className="link link-hover">https://digilib.unhas.ac.id</a>
            <a className="link link-hover">https://repository.unhas.ac.id</a>
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
