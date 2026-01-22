// Import ikon kustom dari folder components/icons
import LihatDaftarAlumniIcon from "@/components/icons/LihatDaftarAlumniIcon";
import TentangAlumniIcon from "@/components/icons/TentangAlumniIcon";

// Import Navbar komponen
import Navbar from "@/components/Navbar";

// Next.js Image component untuk optimisasi gambar
import Image from "next/image";

export default function Home() {
  return (
    <div className="drawer">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      {/* PERBAIKAN 1: 
          - Hapus 'bg-white' ganti jadi 'bg-[#1E3A8A]' (agar saat discroll/ditarik backgroundnya biru, bukan putih).
          - Hapus 'pt-3' (ini yang bikin celah putih).
      */}
      <div
        id="main-content"
        className="drawer-content flex flex-col bg-[#1E3A8A] min-h-screen">
        
        <Navbar />

        {/* Hero Section */}
        {/* PERBAIKAN 2: Tambahkan 'pt-20' atau 'pt-24' disini agar tulisan tidak ketutup Navbar */}
        <div className="pt-20 lg:pt-24">
          <div className="min-h-[90vh] bg-[#1E3A8A] flex w-full h-full justify-center items-center pb-12">
            <div className="flex flex-col lg:flex-row px-6 lg:px-16 gap-10 lg:gap-x-32 items-center">
              
              {/* Kolom teks kiri */}
              <div className="flex flex-col flex-1 gap-y-10 lg:gap-y-16 text-center lg:text-left">
                <span className="font-bold text-4xl lg:text-5xl transition-all duration-300 ease-out cursor-pointer hover:scale-105 hover:drop-shadow-2xl text-white">
                  Website Resmi <br /> Alumni Teknik Informatika Universitas
                  Hasanuddin
                </span>

                <span className="font-medium text-lg lg:text-xl transition-all duration-300 ease-out cursor-pointer hover:scale-105 hover:drop-shadow-lg hover:text-white text-white opacity-90">
                  Sarana komunikasi dan kolaborasi alumni, mahasiswa, dan
                  civitas akademika dalam mewujudkan kontribusi nyata di bidang
                  teknologi dan pendidikan.
                </span>

                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                  <button className="bg-white rounded-md px-6 py-4 text-black font-medium text-lg lg:text-xl flex items-center justify-center gap-2 transition-all duration-300 ease-out cursor-pointer hover:scale-105 hover:drop-shadow-lg hover:text-black hover:bg-gray-100">
                    <LihatDaftarAlumniIcon className="text-black" width={32} />
                    <span>Lihat Daftar Alumni</span>
                  </button>

                  <button className="border border-white rounded-md px-6 py-4 text-white font-medium text-lg lg:text-xl flex items-center justify-center gap-2 transition-all duration-300 ease-out cursor-pointer hover:scale-105 hover:drop-shadow-lg hover:text-white hover:bg-white/10">
                    <TentangAlumniIcon className="text-white" width={32} />
                    <span>Tentang Alumni</span>
                  </button>
                </div>
              </div>

              {/* Kolom kanan — statistik ringkas */}
              <div className="flex flex-1 items-center justify-center w-full">
                <div className="bg-[#354E96] flex flex-col sm:flex-row rounded-2xl p-8 lg:p-16 gap-8 lg:gap-16 transition-all duration-300 ease-out cursor-pointer hover:scale-105 hover:drop-shadow-lg text-center w-full justify-center">
                  <div className="flex flex-col items-center">
                    <span className="text-white font-bold text-3xl">1K+</span>
                    <span className="text-white font-normal text-base">Alumni Terhubung</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <span className="text-white font-bold text-3xl">450+</span>
                    <span className="text-white font-normal text-base">Perusahaan</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <span className="text-white font-bold text-3xl">92%</span>
                    <span className="text-white font-normal text-base">Alumni Bekerja</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* --- KONTEN SISANYA TETAP SAMA --- */}
        {/* Bagian Dana Abadi (Background Putih dimulainya dari sini) */}
        <div className="w-full bg-white pt-12 pb-12 rounded-t-3xl mt-[-20px] z-10 relative">
          <div className="max-w-7xl mx-auto px-6 space-y-10">
            {/* Kartu 1 - Dana Abadi */}
            <section className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row items-stretch border border-gray-100">
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
                  <button className="w-full bg-[#0b3b57] hover:bg-[#0d4f6f] text-white py-4 rounded-lg font-semibold tracking-wide shadow-md transition-colors">
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
                    className="object-cover h-full w-full hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                </div>
              </div>
            </section>

            {/* Kartu 2 - Survei */}
            <section className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row items-stretch border border-gray-100">
              <div className="lg:w-1/3 relative shrink-0 order-2 lg:order-1">
                <div className="h-56 md:h-auto lg:h-full w-full overflow-hidden">
                  <Image
                    src="/DSC09820.JPG"
                    alt="Wisuda / Survei"
                    width={1200}
                    height={800}
                    className="object-cover h-full w-full hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                </div>
              </div>

              <div className="lg:w-2/3 p-10 md:p-16 flex flex-col justify-center order-1 lg:order-2">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">
                  Survei Penjaringan Alumni
                </h3>
                <p className="mt-6 text-gray-600 leading-relaxed max-w-2xl">
                  Survei ini ditujukan untuk para alumni unhas yang lulus pada
                  tahun 2010 dan tahun-tahun sebelumnya.
                </p>

                <div className="mt-8 w-full lg:w-1/2">
                  <button className="w-full bg-[#0b3b57] hover:bg-[#0d4f6f] text-white py-4 rounded-lg font-semibold tracking-wide shadow-md transition-colors">
                    ISI SURVEI &nbsp; ➜
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Bagian Newsletter */}
        <div className="bg-white flex justify-center pb-12">
          <div className="w-full max-w-7xl relative">
            <div className="flex flex-row gap-8 px-8 py-8 items-start overflow-x-auto pb-8 scrollbar-hide">
              {/* Card 1 */}
              <div className="flex-shrink-0 w-80 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer bg-white border border-gray-100 group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/DSC09820.JPG"
                    alt="Sosok Alumni"
                    width={320}
                    height={192}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                </div>
                <div className="bg-white p-5">
                  <h3 className="text-gray-800 font-semibold text-base line-clamp-2 group-hover:text-blue-600 transition-colors">
                    Sosok Alumni Berprestasi di Kancah Internasional
                  </h3>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex-shrink-0 w-80 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer bg-white border border-gray-100 group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/DSC09820.JPG"
                    alt="Perayaan Maulid"
                    width={320}
                    height={192}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                </div>
                <div className="bg-white p-5">
                  <h3 className="text-gray-800 font-semibold text-base line-clamp-2 group-hover:text-blue-600 transition-colors">
                    Perayaan Maulid Universitas Hasanuddin, di tepi danau UNHAS
                  </h3>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex-shrink-0 w-80 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer bg-white border border-gray-100 group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/DSC09820.JPG"
                    alt="Employer Meeting"
                    width={320}
                    height={192}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                </div>
                <div className="bg-white p-5">
                  <h3 className="text-gray-800 font-semibold text-base line-clamp-2 group-hover:text-blue-600 transition-colors">
                    Employer Meeting: Memperkuat Kesiapan Lulusan
                  </h3>
                </div>
              </div>

              {/* Card 4 */}
              <div className="flex-shrink-0 w-80 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer bg-white border border-gray-100 group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/DSC09820.JPG"
                    alt="Lomba Kaddo"
                    width={320}
                    height={192}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                </div>
                <div className="bg-white p-5">
                  <h3 className="text-gray-800 font-semibold text-base line-clamp-2 group-hover:text-blue-600 transition-colors">
                    Lomba Kaddo Minnya, Meriahkan Dies Natalis ke-69 Unhas!
                  </h3>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end px-8 py-2">
              <a href="#" className="text-blue-600 font-semibold text-base hover:text-blue-800 transition-colors flex items-center gap-2">
                Lihat Berita Selengkapnya <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bagian About Us */}
        <div id="about-section" className="w-full bg-gradient-to-b from-blue-50 to-white py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              {/* Kolom kiri */}
              <div className="flex-1">
                <div className="mb-6">
                  <span className="text-blue-600 font-bold text-sm tracking-widest uppercase bg-blue-100 px-3 py-1 rounded-full">
                    APA YANG KAMI BERIKAN?
                  </span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                  <span className="text-blue-600">Tentang Kami</span>
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl">
                  Portal Alumni ini didirikan sebagai wadah untuk menjaga
                  hubungan antara alumni, universitas, dan mahasiswa saat ini.
                  Tujuan kami adalah memfasilitasi interaksi dan kolaborasi
                  antara alumni, berbagi pengalaman, informasi karir, dan
                  membangun jejaring yang bermanfaat.
                </p>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mt-8 hover:shadow-md transition-shadow">
                  <p className="text-gray-800 font-bold mb-4 text-lg">
                    Info lebih lanjut silahkan menghubungi :
                  </p>
                  <div className="space-y-3 text-gray-600">
                    <p className="flex items-center gap-3">
                      <span className="text-green-500 font-bold bg-green-50 rounded-full w-6 h-6 flex items-center justify-center text-xs">✓</span>
                      (+62) 812 5358 4528
                    </p>
                    <p className="flex items-center gap-3">
                      <span className="text-green-500 font-bold bg-green-50 rounded-full w-6 h-6 flex items-center justify-center text-xs">✓</span>
                      (+62) 812 4327 8997
                    </p>
                    <div className="border-t border-gray-100 my-3"></div>
                    <p className="flex items-center gap-3 mt-3">
                      <span className="font-semibold text-gray-800">E-mail :</span>
                      <a href="mailto:informatika@unhas.ac.id" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                        informatika@unhas.ac.id
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Kolom kanan - Gambar */}
              <div className="flex-1 w-full">
                <div className="rounded-2xl overflow-hidden shadow-2xl relative group h-[400px]">
                  <Image
                    src="/kampus03.png"
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

        {/* Footer 1 */}
        <footer className="footer sm:footer-horizontal bg-[#1E3A8A] text-white p-10 lg:px-20 border-b border-blue-800/30">
          <nav>
            <h6 className="footer-title text-blue-200 opacity-100">Services</h6>
            <a href="https://unhas.ac.id" target="_blank" className="link link-hover hover:text-blue-200 transition-colors">unhas.ac.id</a>
            <a href="https://sso.unhas.ac.id" target="_blank" className="link link-hover hover:text-blue-200 transition-colors">sso.unhas.ac.id</a>
            <a href="https://neosia.unhas.ac.id" target="_blank" className="link link-hover hover:text-blue-200 transition-colors">neosia.unhas.ac.id</a>
          </nav>
          <nav>
            <h6 className="footer-title text-blue-200 opacity-100">Company</h6>
            <a className="link link-hover hover:text-blue-200 transition-colors">About us</a>
            <a className="link link-hover hover:text-blue-200 transition-colors">Contact</a>
            <a className="link link-hover hover:text-blue-200 transition-colors">Jobs</a>
          </nav>
          <nav>
            <h6 className="footer-title text-blue-200 opacity-100">Legal</h6>
            <a className="link link-hover hover:text-blue-200 transition-colors">Terms of use</a>
            <a className="link link-hover hover:text-blue-200 transition-colors">Privacy policy</a>
          </nav>
        </footer>

        {/* Footer 2 */}
        <footer className="footer bg-[#152C6B] text-white px-10 py-6 lg:px-20 items-center">
          <aside className="flex items-center gap-4">
            <Image
              src="/unhas-logo.png"
              alt="Unhas Logo"
              width={48}
              height={48}
              priority
              className="brightness-110"
            />
            <p className="font-medium text-sm text-blue-100">
              DEPARTEMEN TEKNIK INFORMATIKA <br />
              <span className="font-bold text-white">UNIVERSITAS HASANUDDIN</span>
            </p>
          </aside>
          <nav className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-6">
              <a className="cursor-pointer hover:text-blue-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
              </a>
              <a className="cursor-pointer hover:text-blue-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
              </a>
              <a className="cursor-pointer hover:text-blue-300 transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
              </a>
            </div>
          </nav>
        </footer>
      </div>

      {/* Sidebar (drawer-side) */}
      <div className="drawer-side z-50">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
        </ul>
      </div>
    </div>
  );
}