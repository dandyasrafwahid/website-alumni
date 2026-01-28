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
    accountType: "user", // 'user' atau 'admin'
    nip: "", // Khusus admin
  });

  const [nipError, setNipError] = useState("");

  // Handler untuk perubahan input
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handler untuk submit form
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    // Validasi NIM untuk user biasa
    if (formData.accountType === "user") {
      if (!formData.nim.trim()) {
        alert("NIM harus diisi untuk user biasa");
        return;
      }
    }

    // Validasi NIP untuk admin
    if (formData.accountType === "admin") {
      if (!formData.nip.trim()) {
        setNipError("NIP harus diisi untuk akun Admin");
        return;
      }
      if (!/^\d{18}$/.test(formData.nip.trim())) {
        setNipError("NIP harus 18 digit angka");
        return;
      }
    }

    setNipError("");
    console.log("Data Registrasi Dikirim:", formData);

    // Simpan ke localStorage dengan accountType
    localStorage.setItem(
      "alumniUser",
      JSON.stringify({
        name: formData.nama,
        nim: formData.accountType === "user" ? formData.nim : "",
        email: formData.email,
        accountType: formData.accountType,
        nip: formData.accountType === "admin" ? formData.nip : "",
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
    <div className="flex min-h-screen bg-black">
      {/* Left Side - Form Registrasi */}
      {/* Menggunakan h-screen dan overflow-y-auto agar bisa discroll terpisah dari gambar */}
      <div className="w-full lg:w-1/2 flex flex-col h-screen overflow-y-auto px-8 py-12 lg:px-16 scrollbar-hide">
        <div className="max-w-md mx-auto w-full">
          {/* Logo & Header */}
          <div className="text-center mb-10">
            <div className="flex justify-center mb-4">
              <Image
                src="/unhas-logo.png"
                alt="Unhas Logo"
                width={70}
                height={70}
                priority
                className="drop-shadow-lg"
              />
            </div>
            <h1 className="text-3xl font-bold text-red-600 mb-2 tracking-wide">
              Daftar Alumni
            </h1>
            <p className="text-gray-400 text-sm font-light">
              Lengkapi data diri Anda untuk bergabung
            </p>
          </div>

          {/* Form Start */}
          <form onSubmit={handleRegister} className="space-y-5">
            {/* Nama Input */}
            <div>
              <label className="block text-gray-300 text-sm mb-2 font-medium">
                Nama Lengkap
              </label>
              <input
                type="text"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                placeholder="Masukkan Nama Lengkap"
                className="w-full px-4 py-3 bg-white rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition shadow-sm"
                required
              />
            </div>

            {/* NIM & No HP Grid - NIM hanya untuk user biasa */}
            {formData.accountType === "user" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-300 text-sm mb-2 font-medium">
                    NIM
                  </label>
                  <input
                    type="text"
                    name="nim"
                    value={formData.nim}
                    onChange={handleChange}
                    placeholder="Contoh: D121..."
                    className="w-full px-4 py-3 bg-white rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition shadow-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm mb-2 font-medium">
                    No HP / WA
                  </label>
                  <input
                    type="tel"
                    name="noHp"
                    value={formData.noHp}
                    onChange={handleChange}
                    placeholder="08xxxxxxxxxx"
                    className="w-full px-4 py-3 bg-white rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition shadow-sm"
                    required
                  />
                </div>
              </div>
            ) : (
              <div>
                <label className="block text-gray-300 text-sm mb-2 font-medium">
                  No HP / WA
                </label>
                <input
                  type="tel"
                  name="noHp"
                  value={formData.noHp}
                  onChange={handleChange}
                  placeholder="08xxxxxxxxxx"
                  className="w-full px-4 py-3 bg-white rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition shadow-sm"
                  required
                />
              </div>
            )}

            {/* Email Input */}
            <div>
              <label className="block text-gray-300 text-sm mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="nama@email.com"
                className="w-full px-4 py-3 bg-white rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition shadow-sm"
                required
              />
            </div>

            {/* Status Dropdown */}
            <div>
              <label className="block text-gray-300 text-sm mb-2 font-medium">
                Status Saat Ini
              </label>
              <div className="relative">
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 transition appearance-none cursor-pointer shadow-sm"
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

            {/* Account Type Selection */}
            <div>
              <label className="block text-gray-300 text-sm mb-3 font-medium">
                Tipe Akun
              </label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="accountUser"
                    name="accountType"
                    value="user"
                    checked={formData.accountType === "user"}
                    onChange={handleChange}
                    className="w-4 h-4 text-red-500 bg-white border-gray-300 cursor-pointer"
                  />
                  <label
                    htmlFor="accountUser"
                    className="ml-3 text-gray-300 text-sm font-medium cursor-pointer">
                    User Biasa (Alumni)
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="accountAdmin"
                    name="accountType"
                    value="admin"
                    checked={formData.accountType === "admin"}
                    onChange={handleChange}
                    className="w-4 h-4 text-red-500 bg-white border-gray-300 cursor-pointer"
                  />
                  <label
                    htmlFor="accountAdmin"
                    className="ml-3 text-gray-300 text-sm font-medium cursor-pointer">
                    Admin (Staff Departemen)
                  </label>
                </div>
              </div>
            </div>

            {/* NIP Input - Hanya tampil jika Admin */}
            {formData.accountType === "admin" && (
              <div>
                <label className="block text-gray-300 text-sm mb-2 font-medium">
                  NIP (Nomor Induk Pegawai) *
                </label>
                <input
                  type="text"
                  name="nip"
                  value={formData.nip}
                  onChange={handleChange}
                  placeholder="Contoh: 197001011994031001 (18 digit)"
                  className={`w-full px-4 py-3 bg-white rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 transition shadow-sm ${
                    nipError
                      ? "focus:ring-red-500 border-2 border-red-500"
                      : "focus:ring-red-500"
                  }`}
                />
                {nipError && (
                  <p className="text-red-400 text-xs mt-1">{nipError}</p>
                )}
                <p className="text-gray-400 text-xs mt-1">
                  NIP harus 18 digit angka untuk verifikasi staff
                </p>
              </div>
            )}

            {/* Password Input */}
            <div>
              <label className="block text-gray-300 text-sm mb-2 font-medium">
                Password
              </label>
              <PasswordToggle
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Buat Password"
                className="focus:ring-red-500"
                required={true}
              />
            </div>

            {/* Register Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition duration-300 cursor-pointer shadow-lg hover:shadow-red-900/50">
                Daftar Sekarang
              </button>
            </div>
          </form>

          {/* Link to Login */}
          <div className="mt-8 text-center pb-8">
            <p className="text-gray-400 text-sm">
              Sudah punya akun?{" "}
              <Link
                href="/login"
                className="text-red-400 hover:text-red-300 font-semibold underline decoration-transparent hover:decoration-red-300 transition-all">
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
            width={1200} // Menggunakan width eksplisit
            height={800} // Menggunakan height eksplisit
            className="object-cover w-full h-full opacity-80"
            priority
          />
        </div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-12 z-10 text-center">
          <h2 className="text-5xl font-bold mb-6 drop-shadow-lg leading-tight">
            KELUARGA BESAR
            <br />
            <span className="text-red-500">TEKNIK INFORMATIKA</span>
          </h2>
          <p className="text-xl text-gray-200 font-light max-w-lg">
            Bergabunglah untuk mempererat silaturahmi dan membangun koneksi
            profesional antar alumni Universitas Hasanuddin.
          </p>
        </div>
      </div>
    </div>
  );
}
