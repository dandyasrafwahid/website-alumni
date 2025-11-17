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
      <div className="drawer-content flex flex-col pt-16">
        {/* Navbar atas — tetap (fixed) di bagian atas */}
        <div className="navbar bg-white w-full px-8 fixed top-0 left-0 z-50">
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
            <ul className="menu menu-horizontal text-black font-medium text-xl">
              <li>
                <span className="font-extrabold text-[#1E3A8A]">Home</span>
              </li>
              <li>
                <span>Alumni</span>
              </li>
              <li>
                <span>About</span>
              </li>
              <li>
                <span>Contact</span>
              </li>
              <li>
                <span>Survey</span>
              </li>
            </ul>
          </div>

          {/* Bagian kanan navbar: tombol Sign in / Register */}
          <div className="navbar-end gap-5">
            <button className="rounded-lg bg-[#E3E3E3] border border-[#767676] px-5 py-1 text-base text-[#1E1E1E]">
              Sign in
            </button>
            {/* Perbaikan: tambahkan spasi sebelum kelas utility tambahan untuk tombol Register */}
            <button className="rounded-lg bg-[#2C2C2C] px-12 py-1 text-base text-[#F5F5F5] btn btn-ghost btn-circle ">
              Register
            </button>
          </div>
        </div>

        {/* Hero / bagian utama halaman dengan latar biru tua */}
        <div className="">
          <div className="min-h-screen bg-[#1E3A8A] flex w-full h-full justify-center items-center">
            <div className="flex flex-row px-16 gap-x-32">
              {/* Kolom teks kiri — judul, deskripsi, dan tombol aksi */}
              <div className="flex flex-col flex-1 gap-y-16">
                <span className="font-bold text-5xl">
                  Website Resmi <br /> Alumni Teknik Informatika Universitas
                  Hasanuddin
                </span>

                <span className="font-medium text-xl">
                  Sarana komunikasi dan kolaborasi alumni, mahasiswa, dan
                  civitas akademika dalam mewujudkan kontribusi nyata di bidang
                  teknologi dan pendidikan.
                </span>

                {/* Tombol utama aksi: lihat daftar alumni & tentang alumni */}
                <div className="flex flex-row gap-6">
                  <button className="bg-white rounded-md px-6 py-4 text-black font-medium text-xl flex items-center gap-2">
                    {/* Ikon kustom — prop className/width diteruskan ke ikon */}
                    <LihatDaftarAlumniIcon className="text-black" width={32} />
                    <span>Lihat Daftar Alumni</span>
                  </button>

                  <button className="border border-white rounded-md px-6 py-4 text-white font-medium text-xl flex items-center gap-2">
                    <TentangAlumniIcon className="text-white" width={32} />
                    <span>Tentang Alumni</span>
                  </button>
                </div>
              </div>

              {/* Kolom kanan — statistik ringkas */}
              <div className="flex flex-1 items-center justify-center">
                <div className="bg-[#354E96] flex rounded-2xl p-16 gap-16">
                  {/* Setiap blok menampilkan angka dan label */}
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

        {/* Bagian hero tambahan dengan gambar dan teks */}
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <Image
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              alt="Hero image"
              width={380}
              height={260}
              className="max-w-sm rounded-lg shadow-2xl"
              unoptimized
            />
            <div>
              <h1 className="text-5xl font-bold">Box Office News!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>

        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <Image
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              alt="Hero image"
              width={380}
              height={260}
              className="max-w-sm rounded-lg shadow-2xl"
              unoptimized
            />
            <div>
              <h1 className="text-5xl font-bold">Box Office News!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>

        {/* Bagian konten tambahan di bawah hero — tampilkan kartu secara horizontal */}
        <div className="bg-white flex justify-center">
          <div className="flex flex-row gap-8 px-8 py-12 items-start">
            {/* Card 1 */}
            <div className="card bg-[#354E96] w-80 shadow-sm">
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
            <div className="card bg-[#354E96] w-80 shadow-sm">
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
            <div className="bg-[#354E96] w-80 shadow-sm">
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
            <div className="card bg-[#354E96] w-80 shadow-sm">
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

        {/* Footer halaman dengan dua bagian */}
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
