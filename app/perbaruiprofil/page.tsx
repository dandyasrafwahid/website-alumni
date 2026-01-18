"use client";

import Image from "next/image";
import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function PerbartuiProfil() {
  const [nama, setNama] = useState("Alwan Indrawan Azis");
  const [email, setEmail] = useState("alwaaindrawan@gmail.com");
  const [showEmail, setShowEmail] = useState(false);
  const [telepon, setTelepon] = useState("");
  const [showTelepon, setShowTelepon] = useState(false);
  const [programStudi, setProgramStudi] = useState("Teknik Informatika");
  const [angkatan, setAngkatan] = useState("");
  const [instagram, setInstagram] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [tempatKerja, setTempatKerja] = useState("");
  const [namaPerusahaan, setNamaPerusahaan] = useState("");
  const [levelPerusahaan, setLevelPerusahaan] = useState("Multinasional");
  const [jenisPerusahaan, setJenisPerusahaan] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [provinsiTempatKerja, setProvinsiTempatKerja] = useState("Aceh");
  const [kotaKabupaten, setKotaKabupaten] = useState("");
  const [alamatPerusahaan, setAlamatPerusahaan] = useState("");
  const [kataSandiSaat, setKataSandiSaat] = useState("");
  const [kataSandiBaru, setKataSandiBaru] = useState("");
  const [konfirmasiKataSandi, setKonfirmasiKataSandi] = useState("");
  const [photoPreview, setPhotoPreview] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold">Profil</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Information Text */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Informasi Profil
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Perbarui informasi profil dan alamat Email akun Anda.
            </p>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {/* Photo Section */}
              <div>
                <label className="block text-gray-700 font-semibold mb-4">
                  Foto
                </label>
                <div className="flex flex-col items-start gap-6">
                  {/* Photo Preview */}
                  <div className="w-40 h-40 bg-blue-50 rounded-lg flex items-center justify-center shadow-sm">
                    {photoPreview ? (
                      <img
                        src={photoPreview}
                        alt="Profile preview"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <span className="text-6xl font-bold text-blue-400">
                        AA
                      </span>
                    )}
                  </div>

                  {/* Photo Upload Button */}
                  <label className="inline-block">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoChange}
                      className="hidden"
                    />
                    <button
                      onClick={(e) => {
                        e.currentTarget.parentElement
                          .querySelector("input")
                          .click();
                      }}
                      className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 font-semibold hover:bg-gray-50 transition-colors cursor-pointer">
                      PILIH FOTO BARU
                    </button>
                  </label>
                </div>
              </div>

              {/* Nama Field */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Nama
                </label>
                <input
                  type="text"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                  placeholder="Masukkan nama Anda"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                  placeholder="Masukkan email Anda"
                />
              </div>

              {/* Email Visibility */}
              <div className="flex items-center gap-3">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showEmail}
                    onChange={(e) => setShowEmail(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="relative w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
                <label
                  htmlFor="showEmail"
                  className="text-gray-700 font-semibold text-sm cursor-pointer">
                  Perihatkan Email di Database?
                </label>
              </div>

              {/* Nomor Telepon Field */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Nomor Telepon
                </label>
                <input
                  type="tel"
                  value={telepon}
                  onChange={(e) => setTelepon(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  placeholder=""
                />
                <p className="text-gray-400 text-sm mt-2">
                  Kode negara-Nomor (ex:62821234567)
                </p>
              </div>

              {/* Nomor Telepon Visibility */}
              <div className="flex items-center gap-3">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showTelepon}
                    onChange={(e) => setShowTelepon(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="relative w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
                <label className="text-gray-700 font-semibold text-sm cursor-pointer">
                  Perihatkan nomor di Database?
                </label>
              </div>

              {/* Save Button - Bottom Right */}
              <div className="flex justify-end mt-8 pt-6 ">
                <button className="px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-md transition-colors">
                  SIMPAN
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Profile Information Section */}
        <div className="mt-16 pt-12 border-t border-gray-300">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Information Text */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Additional Profile Information
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Update your account's additional profile information.
              </p>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {/* Program Studi Field */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Program Studi
                  </label>
                  <input
                    type="text"
                    value={programStudi}
                    onChange={(e) => setProgramStudi(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                    placeholder="Teknik Informatika"
                  />
                </div>

                {/* Angkatan Field */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Angkatan
                  </label>
                  <input
                    type="text"
                    value={angkatan}
                    onChange={(e) => setAngkatan(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    placeholder=""
                  />
                </div>

                {/* Akun Instagram Field */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Akun Instagram
                  </label>
                  <input
                    type="text"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    placeholder=""
                  />
                </div>

                {/* Deskripsi Profil Field */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Deskripsi Profil
                  </label>
                  <textarea
                    value={deskripsi}
                    onChange={(e) => setDeskripsi(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    placeholder=""
                    rows="4"
                  />
                </div>

                {/* Tempat Kerja Field */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Tempat Kerja
                  </label>
                  <input
                    type="text"
                    value={tempatKerja}
                    onChange={(e) => setTempatKerja(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    placeholder=""
                  />
                </div>

                {/* Nama Perusahaan Field */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Nama Perusahaan
                  </label>
                  <input
                    type="text"
                    value={namaPerusahaan}
                    onChange={(e) => setNamaPerusahaan(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    placeholder=""
                  />
                </div>

                {/* Level Perusahaan Dropdown */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Level Perusahaan
                  </label>
                  <select
                    value={levelPerusahaan}
                    onChange={(e) => setLevelPerusahaan(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 12px center",
                      paddingRight: "36px",
                    }}>
                    <option>Multinasional</option>
                    <option>Nasional</option>
                    <option>Lokal</option>
                    <option>Startup</option>
                  </select>
                </div>

                {/* Jenis Perusahaan Dropdown */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Jenis Perusahaan
                  </label>
                  <select
                    value={jenisPerusahaan}
                    onChange={(e) => setJenisPerusahaan(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 12px center",
                      paddingRight: "36px",
                    }}>
                    <option>Pilih Jenis Perusahaan</option>
                    <option>Teknologi</option>
                    <option>Finance</option>
                    <option>Manufaktur</option>
                    <option>Retail</option>
                    <option>Lainnya</option>
                  </select>
                </div>

                {/* Jabatan Dropdown */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Jabatan
                  </label>
                  <select
                    value={jabatan}
                    onChange={(e) => setJabatan(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 12px center",
                      paddingRight: "36px",
                    }}>
                    <option>Pilih Jabatan</option>
                    <option>Manager</option>
                    <option>Developer</option>
                    <option>Designer</option>
                    <option>Analyst</option>
                    <option>Lainnya</option>
                  </select>
                </div>

                {/* Provinsi Tempat Kerja Dropdown */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Provinsi Tempat Kerja
                  </label>
                  <select
                    value={provinsiTempatKerja}
                    onChange={(e) => setProvinsiTempatKerja(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 12px center",
                      paddingRight: "36px",
                    }}>
                    <option>Aceh</option>
                    <option>Sumatera Utara</option>
                    <option>Sumatera Barat</option>
                    <option>Riau</option>
                    <option>Jambi</option>
                    <option>Sumatera Selatan</option>
                    <option>Lampung</option>
                    <option>Jakarta</option>
                    <option>Jawa Barat</option>
                    <option>Jawa Tengah</option>
                    <option>Yogyakarta</option>
                    <option>Jawa Timur</option>
                    <option>Banten</option>
                    <option>Bali</option>
                    <option>Nusa Tenggara Barat</option>
                    <option>Nusa Tenggara Timur</option>
                    <option>Kalimantan Barat</option>
                    <option>Kalimantan Tengah</option>
                    <option>Kalimantan Selatan</option>
                    <option>Kalimantan Timur</option>
                    <option>Sulawesi Utara</option>
                    <option>Sulawesi Tengah</option>
                    <option>Sulawesi Selatan</option>
                    <option>Sulawesi Tenggara</option>
                    <option>Maluku</option>
                    <option>Papua</option>
                  </select>
                </div>

                {/* Kota/Kabupaten Tempat Kerja Field */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Kota/Kabupaten Tempat Kerja
                  </label>
                  <input
                    type="text"
                    value={kotaKabupaten}
                    onChange={(e) => setKotaKabupaten(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    placeholder=""
                  />
                </div>

                {/* Alamat Perusahaan Field */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Alamat Perusahaan
                  </label>
                  <input
                    type="text"
                    value={alamatPerusahaan}
                    onChange={(e) => setAlamatPerusahaan(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Save Button - Bottom Right */}
          <div className="flex justify-end mt-8 pt-6 ">
            <button className="px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-md transition-colors">
              SIMPAN
            </button>
          </div>
        </div>

        {/* Perbaui Kata Sandi Section */}
        <div className="mt-16 pt-12 border-t border-gray-300">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Information Text */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Perbaui Kata Sandi
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Pastikan akun Anda menggunakan kata sandi yang panjang dan acak
                agar tetap aman.
              </p>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {/* Kata Sandi Saat Ini */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Kata Sandi Saat Ini
                  </label>
                  <input
                    type="password"
                    value={kataSandiSaat}
                    onChange={(e) => setKataSandiSaat(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    placeholder=""
                  />
                </div>

                {/* Kata Sandi Baru */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Kata Sandi Baru
                  </label>
                  <input
                    type="password"
                    value={kataSandiBaru}
                    onChange={(e) => setKataSandiBaru(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    placeholder=""
                  />
                </div>

                {/* Konfirmasi Kata Sandi */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Konfirmasi Kata Sandi
                  </label>
                  <input
                    type="password"
                    value={konfirmasiKataSandi}
                    onChange={(e) => setKonfirmasiKataSandi(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Save Button - Bottom Right */}
          <div className="flex justify-end mt-8 pt-6 ">
            <button className="px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-md transition-colors">
              SIMPAN
            </button>
          </div>
        </div>

        {/* Autentikasi Dua Faktor Section */}
        <div className="mt-16 pt-12 border-t border-gray-300">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Information Text */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Autentikasi Dua Faktor
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Tambah keamanan pada akun Anda menggunakan autentikasi dua
                faktor.
              </p>
            </div>

            {/* Right Column - Content */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                <p className="text-gray-700 font-medium">
                  Anda belum menyalakan autentikasi dua faktor.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Ketika autentikasi dua faktor dinyalakan, Anda akan diminta
                  sebuah token aman dan acak ketika autentikasi. Anda bisa
                  mendapat token ini dari aplikasi Google Authenticator pada
                  handphone Anda.
                </p>
                <div className="pt-4">
                  <button className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-md transition-colors">
                    NYALAKAN
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sesi Browser Section */}
        <div className="mt-16 pt-12 border-t border-gray-300">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Information Text */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Sesi Browser
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Kelola dan keluar dari sesi aktif Anda di browser dan perangkat
                lain.
              </p>
            </div>

            {/* Right Column - Content */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Jika perlu, Anda dapat keluar dari semua sesi browser lainnya
                  di semua perangkat Anda. Beberapa sesi terakhir Anda tercantum
                  di bawah ini; namun, daftar ini mungkin tidak lengkap. Jika
                  Anda merasa akun Anda telah disusup, Anda juga harus
                  memperbaui kata sandi Anda.
                </p>

                {/* Browser Session Item */}
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-gray-600"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z" />
                    </svg>
                    <div>
                      <p className="text-gray-800 font-semibold">
                        Windows - Chrome
                      </p>
                      <p className="text-gray-600 text-sm">
                        114.10.135.142{" "}
                        <span className="text-blue-600 font-semibold">
                          Perangkat ini
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Logout Button */}
                <div className="pt-4">
                  <button className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-md transition-colors">
                    KELUARKAN SESI BROWSER LAIN
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hapus Akun Section */}
        <div className="mt-16 pt-12 border-t border-gray-300">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Information Text */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Hapus Akun
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Hapus permanen akun Anda.
              </p>
            </div>

            {/* Right Column - Content */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Setelah akun dihapus, seluruh sumber daya dan datanya akan
                  dihapus secara permanen. Sebelum menghapus akun ini, harap
                  unduh data atau informasi apapun yang berkaitan dengan akun
                  ini yang ingin disimpan.
                </p>

                {/* Delete Account Button */}
                <div className="pt-4">
                  <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition-colors">
                    HAPUS AKUN
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
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
  );
}
