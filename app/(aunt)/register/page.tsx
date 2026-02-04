"use client";

// Next.js Image component untuk optimisasi gambar
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
// Menggunakan Link untuk navigasi internal yang lebih cepat
import Link from "next/link";
import PasswordToggle from "@/components/PasswordToggle";

export default function Register() {
  const router = useRouter();

  // State untuk menampung data form
  const [formData, setFormData] = useState({
    nama: "",
    nim: "",
    noHp: "",
    email: "",
    status: "",
    password: "",
    accountType: "user",
  });

  // Handler untuk perubahan input
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handler untuk submit form
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nim.trim()) {
      alert("NIM harus diisi");
      return;
    }

    console.log("Data Registrasi Dikirim:", formData);

    localStorage.setItem(
      "alumniUser",
      JSON.stringify({
        name: formData.nama,
        nim: formData.nim,
        email: formData.email,
        accountType: "user",
        initials: formData.nama
          .split(" ")
          .map((n) => n[0]?.toUpperCase() || "")
          .slice(0, 2)
          .join(""),
      }),
    );

    alert("Registrasi Berhasil! Silakan Login.");
    router.push("/login");
  };

  return (
    <div className="flex min-h-screen relative">
      {/* Background Image untuk keseluruhan halaman */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/halaman.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#1E3A8A] opacity-95"></div>
      </div>

      {/* Left Side - Form Registrasi */}
      {/* Menggunakan h-screen dan overflow-y-auto agar bisa discroll terpisah dari gambar */}
      <div className="w-full lg:w-1/2 flex flex-col h-screen overflow-y-auto px-8 py-12 lg:px-16 scrollbar-hide relative z-10">
        <div className="max-w-md mx-auto w-full bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
          {/* Logo & Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Image
                src="/unhas-logo.png"
                alt="Unhas Logo"
                width={70}
                height={70}
                priority
                className="drop-shadow-2xl"
              />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2 tracking-wide">
              Daftar Alumni
            </h1>
            <p className="text-gray-200 text-sm font-light">
              Lengkapi data diri Anda untuk bergabung
            </p>
          </div>

          {/* Form Start */}
          <form onSubmit={handleRegister} className="space-y-5">
            {/* Nama Input */}
            <div>
              <label className="block text-white text-sm mb-2 font-medium">
                Nama Lengkap
              </label>
              <input
                type="text"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                placeholder="Masukkan Nama Lengkap"
                className="w-full px-4 py-3 bg-white/90 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition shadow-sm"
                required
              />
            </div>

            {/* NIM & No HP Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-white text-sm mb-2 font-medium">
                  NIM
                </label>
                <input
                  type="text"
                  name="nim"
                  value={formData.nim}
                  onChange={handleChange}
                  placeholder="Contoh: D121..."
                  className="w-full px-4 py-3 bg-white/90 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition shadow-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-white text-sm mb-2 font-medium">
                  No HP / WA
                </label>
                <input
                  type="tel"
                  name="noHp"
                  value={formData.noHp}
                  onChange={handleChange}
                  placeholder="08xxxxxxxxxx"
                  className="w-full px-4 py-3 bg-white/90 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition shadow-sm"
                  required
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-white text-sm mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="nama@email.com"
                className="w-full px-4 py-3 bg-white/90 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition shadow-sm"
                required
              />
            </div>

            {/* Status Dropdown */}
            <div>
              <label className="block text-white text-sm mb-2 font-medium">
                Status Saat Ini
              </label>
              <div className="relative">
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/90 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition appearance-none cursor-pointer shadow-sm"
                  required>
                  <option value="" disabled>
                    -- Pilih Status --
                  </option>
                  <option value="Lanjut Study">Lanjut Study</option>
                  <option value="Wirausaha">Wirausaha</option>
                  <option value="Bekerja">Bekerja</option>
                  <option value="Belum Bekerja">Belum Bekerja</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
                {/* Custom Arrow Icon */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-600">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-white text-sm mb-2 font-medium">
                Password
              </label>
              <PasswordToggle
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Buat Password"
                className="focus:ring-yellow-400"
                required={true}
              />
            </div>

            {/* Register Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-[#1E3A8A] font-bold rounded-lg transition duration-300 cursor-pointer shadow-lg transform hover:scale-[1.02]">
                Daftar Sekarang
              </button>
            </div>
          </form>

          {/* Link to Login */}
          <div className="mt-6 text-center">
            <p className="text-gray-200 text-sm">
              Sudah punya akun?{" "}
              <Link
                href="/login"
                className="text-yellow-300 hover:text-yellow-200 font-semibold underline">
                Masuk disini
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Image & Gradient */}
      {/* Menggunakan implementasi yang sama dengan halaman Login untuk mengatasi gambar buram */}
      <div className="hidden lg:flex w-1/2 relative h-screen sticky top-0 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/kampus03.png"
            alt="kampus03"
            width={1200}
            height={800}
            className="object-cover w-full h-full opacity-40"
            priority
          />
        </div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/80 via-blue-900/60 to-[#1E3A8A]/80"></div>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-12 z-10 text-center">
          <h2 className="text-5xl font-bold mb-6 drop-shadow-2xl leading-tight">
            KELUARGA BESAR
            <br />
            <span className="text-yellow-300">TEKNIK INFORMATIKA</span>
          </h2>
          <p className="text-xl text-gray-100 font-light max-w-lg drop-shadow-lg">
            Bergabunglah untuk mempererat silaturahmi dan membangun koneksi
            profesional antar alumni Universitas Hasanuddin.
          </p>
        </div>
      </div>
    </div>
  );
}
