"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

// --- DATA WILAYAH (38 Provinsi) ---
const DATA_WILAYAH: Record<string, string[]> = {
  "Aceh": ["Banda Aceh", "Sabang", "Lhokseumawe", "Langsa", "Subulussalam", "Aceh Selatan", "Aceh Tenggara", "Aceh Timur", "Aceh Tengah", "Aceh Barat", "Aceh Besar", "Pidie", "Aceh Utara", "Simeulue", "Aceh Singkil", "Bireuen", "Aceh Barat Daya", "Gayo Lues", "Aceh Jaya", "Nagan Raya", "Aceh Tamiang", "Bener Meriah", "Pidie Jaya"],
  "Sumatera Utara": ["Medan", "Binjai", "Pematangsiantar", "Tanjungbalai", "Deli Serdang", "Langkat", "Karo", "Simalungun", "Asahan", "Labuhanbatu"],
  "Sumatera Barat": ["Padang", "Bukittinggi", "Payakumbuh", "Pariaman", "Solok", "Sawahlunto", "Padang Panjang"],
  "Riau": ["Pekanbaru", "Dumai", "Bengkalis", "Siak", "Kampar", "Indragiri Hulu", "Indragiri Hilir"],
  "Jambi": ["Jambi", "Sungai Penuh", "Batanghari", "Bungo", "Kerinci"],
  "Sumatera Selatan": ["Palembang", "Prabumulih", "Pagar Alam", "Lubuklinggau", "Banyuasin", "Ogan Ilir"],
  "Bengkulu": ["Bengkulu", "Rejang Lebong", "Mukomuko"],
  "Lampung": ["Bandar Lampung", "Metro", "Lampung Selatan", "Lampung Tengah", "Lampung Utara"],
  "Kepulauan Bangka Belitung": ["Pangkal Pinang", "Tanjung Pandan", "Sungailiat"],
  "Kepulauan Riau": ["Tanjung Pinang", "Batam", "Bintan", "Karimun", "Natuna"],
  "DKI Jakarta": ["Jakarta Pusat", "Jakarta Utara", "Jakarta Barat", "Jakarta Selatan", "Jakarta Timur", "Kepulauan Seribu"],
  "Jawa Barat": ["Bandung", "Bekasi", "Depok", "Bogor", "Cimahi", "Cirebon", "Sukabumi", "Tasikmalaya", "Karawang"],
  "Jawa Tengah": ["Semarang", "Surakarta", "Magelang", "Pekalongan", "Salatiga", "Tegal", "Banyumas"],
  "DI Yogyakarta": ["Yogyakarta", "Sleman", "Bantul", "Gunung Kidul", "Kulon Progo"],
  "Jawa Timur": ["Surabaya", "Malang", "Sidoarjo", "Gresik", "Banyuwangi", "Kediri", "Madiun", "Jember"],
  "Banten": ["Serang", "Cilegon", "Tangerang", "Tangerang Selatan", "Lebak", "Pandeglang"],
  "Bali": ["Denpasar", "Badung", "Gianyar", "Tabanan", "Buleleng"],
  "Nusa Tenggara Barat": ["Mataram", "Bima", "Lombok Barat", "Lombok Tengah", "Lombok Timur"],
  "Nusa Tenggara Timur": ["Kupang", "Ende", "Maumere", "Labuan Bajo"],
  "Kalimantan Barat": ["Pontianak", "Singkawang", "Sambas", "Ketapang"],
  "Kalimantan Tengah": ["Palangka Raya", "Kotawaringin Barat", "Kotawaringin Timur"],
  "Kalimantan Selatan": ["Banjarmasin", "Banjarbaru", "Martapura"],
  "Kalimantan Timur": ["Samarinda", "Balikpapan", "Bontang", "Kutai Kartanegara"],
  "Kalimantan Utara": ["Tarakan", "Bulungan", "Nunukan"],
  "Sulawesi Utara": ["Manado", "Bitung", "Tomohon", "Kotamobagu", "Minahasa"],
  "Sulawesi Tengah": ["Palu", "Donggala", "Poso", "Luwuk"],
  "Sulawesi Selatan": [
    "Makassar", "Parepare", "Palopo", "Bantaeng", "Barru", "Bone", 
    "Bulukumba", "Enrekang", "Gowa", "Jeneponto", "Kepulauan Selayar", 
    "Luwu", "Luwu Timur", "Luwu Utara", "Maros", "Pangkajene dan Kepulauan", 
    "Pinrang", "Sidenreng Rappang", "Sinjai", "Soppeng", "Takalar", 
    "Tana Toraja", "Toraja Utara", "Wajo"
  ],
  "Sulawesi Tenggara": ["Kendari", "Baubau", "Konawe", "Kolaka"],
  "Gorontalo": ["Gorontalo", "Limboto"],
  "Sulawesi Barat": ["Mamuju", "Majene", "Polewali"],
  "Maluku": ["Ambon", "Tual", "Maluku Tengah"],
  "Maluku Utara": ["Ternate", "Tidore", "Halmahera"],
  "Papua": ["Jayapura", "Biak", "Yapen"],
  "Papua Barat": ["Manokwari", "Fakfak", "Sorong"],
  "Papua Selatan": ["Merauke", "Asmat"],
  "Papua Tengah": ["Nabire", "Mimika"],
  "Papua Pegunungan": ["Jayawijaya", "Yahukimo"],
  "Papua Barat Daya": ["Sorong", "Raja Ampat"]
};

export default function EditProfilePage() {
  const router = useRouter();

  // --- STATE MANAGEMENT ---
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [showEmail, setShowEmail] = useState(false);
  const [telepon, setTelepon] = useState("");
  const [showTelepon, setShowTelepon] = useState(false);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const [programStudi, setProgramStudi] = useState("");
  const [angkatan, setAngkatan] = useState("");
  const [instagram, setInstagram] = useState("");
  const [deskripsi, setDeskripsi] = useState("");

  const [namaPerusahaan, setNamaPerusahaan] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [levelPerusahaan, setLevelPerusahaan] = useState("Multinasional");
  const [jenisPerusahaan, setJenisPerusahaan] = useState("");
  const [alamatPerusahaan, setAlamatPerusahaan] = useState("");
  
  const [provinsiTempatKerja, setProvinsiTempatKerja] = useState("Sulawesi Selatan");
  const [kotaKabupaten, setKotaKabupaten] = useState("Makassar");
  const [daftarKota, setDaftarKota] = useState<string[]>(DATA_WILAYAH["Sulawesi Selatan"]);

  const [kataSandiSaat, setKataSandiSaat] = useState("");
  const [kataSandiBaru, setKataSandiBaru] = useState("");
  const [konfirmasiKataSandi, setKonfirmasiKataSandi] = useState("");

  // --- LOAD DATA ---
  useEffect(() => {
    const storedData = localStorage.getItem("alumniUser");
    if (storedData) {
      const data = JSON.parse(storedData);
      
      setNama(data.name || "");
      setEmail(data.email || "");
      setTelepon(data.phone || "");
      setPhotoPreview(data.photo || null);
      
      setProgramStudi(data.academic?.programStudi || "");
      setAngkatan(data.academic?.angkatan || "");
      setInstagram(data.academic?.instagram || "");
      setDeskripsi(data.academic?.deskripsi || "");

      setNamaPerusahaan(data.job?.company || "");
      setJabatan(data.job?.position || "");
      setLevelPerusahaan(data.job?.level || "Multinasional");
      setJenisPerusahaan(data.job?.industry || "");
      setAlamatPerusahaan(data.job?.address || "");
      
      if (data.job?.province && DATA_WILAYAH[data.job.province]) {
          setProvinsiTempatKerja(data.job.province);
          setDaftarKota(DATA_WILAYAH[data.job.province]);
          setKotaKabupaten(data.job.city || DATA_WILAYAH[data.job.province][0]);
      }
    }
  }, []);

  // --- HANDLERS ---
  const handleProvinsiChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const prov = e.target.value;
    setProvinsiTempatKerja(prov);
    const kotaList = DATA_WILAYAH[prov] || [];
    setDaftarKota(kotaList);
    setKotaKabupaten(kotaList[0] || "");
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPhotoPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSaveAll = () => {
    const updatedData = {
        name: nama,
        email: email,
        phone: telepon,
        photo: photoPreview,
        initials: nama ? nama.substring(0, 2).toUpperCase() : "US",
        isLoggedIn: true,
        academic: { programStudi, angkatan, instagram, deskripsi },
        job: {
            company: namaPerusahaan,
            position: jabatan,
            level: levelPerusahaan,
            industry: jenisPerusahaan,
            province: provinsiTempatKerja,
            city: kotaKabupaten,
            address: alamatPerusahaan
        }
    };

    localStorage.setItem("alumniUser", JSON.stringify(updatedData));
    alert("Profil berhasil diperbarui!");
    router.push("/homeuser"); 
  };

  const handleUpdatePassword = () => {
    if (kataSandiBaru !== konfirmasiKataSandi) {
      alert("Kata sandi baru tidak cocok!");
      return;
    }
    alert("Kata sandi berhasil diperbarui!");
    setKataSandiSaat(""); setKataSandiBaru(""); setKonfirmasiKataSandi("");
  };

  // --- FUNGSI HAPUS AKUN DENGAN KONFIRMASI POPUP ---
  const handleDeleteAccount = () => {
    // Popup Konfirmasi Bawaan Browser
    const isConfirmed = window.confirm(
        "PERINGATAN PENTING:\n\n" +
        "Apakah Anda yakin ingin menghapus akun ini secara permanen?\n" +
        "Tindakan ini tidak dapat dibatalkan dan semua data Anda akan hilang."
    );

    if (isConfirmed) {
        localStorage.removeItem("alumniUser");
        alert("Akun Anda telah dihapus.");
        router.push("/");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <div className="relative bg-[#0F3555] pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Image src="/DSC09820.JPG" alt="bg-texture" fill className="object-cover grayscale" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Perbarui Profil</h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-3xl leading-relaxed">
            Perbarui data diri, karir, dan informasi akun Anda agar tetap relevan.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full leading-none">
          <svg className="w-full h-12 md:h-24 text-gray-50" viewBox="0 0 1440 320" fill="currentColor" preserveAspectRatio="none">
            <path fillOpacity="1" d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,202.7C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* --- FORM CONTENT --- */}
      <div className="container mx-auto px-6 py-12 flex-grow">
        
        {/* SECTION 1: Informasi Dasar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-[#0F3555] mb-3">Informasi Dasar</h2>
            <p className="text-gray-700 text-sm leading-relaxed font-medium">
              Perbarui foto profil, nama, dan kontak yang dapat dihubungi.
            </p>
          </div>

          <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-md border border-gray-200">
            <div className="space-y-8">
              {/* Foto */}
              <div>
                <label className="block text-gray-900 font-bold mb-4">Foto Profil</label>
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center shadow-inner overflow-hidden border-4 border-white ring-2 ring-gray-200 relative">
                    {photoPreview ? (
                      <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-4xl font-bold text-gray-400">{nama ? nama.charAt(0) : "U"}</span>
                    )}
                  </div>
                  <label className="cursor-pointer">
                    <input type="file" accept="image/*" onChange={handlePhotoChange} className="hidden" />
                    <span className="px-6 py-2.5 border-2 border-gray-300 rounded-lg text-gray-800 font-bold hover:bg-gray-100 transition-colors text-sm uppercase tracking-wide">
                      Ganti Foto
                    </span>
                  </label>
                </div>
              </div>

              {/* Info Dasar Input */}
              <div className="space-y-4">
                <div>
                    <label className="block text-gray-900 font-bold mb-2">Nama Lengkap</label>
                    <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F3555] text-gray-900 font-medium placeholder-gray-500 bg-white" placeholder="Masukkan nama Anda"/>
                </div>
                <div>
                    <label className="block text-gray-900 font-bold mb-2">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F3555] text-gray-900 font-medium bg-white"/>
                </div>
                <div>
                    <label className="block text-gray-900 font-bold mb-2">Nomor Telepon</label>
                    <input type="tel" value={telepon} onChange={(e) => setTelepon(e.target.value)} className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F3555] text-gray-900 font-medium bg-white" placeholder="628xxxxxxxxxx"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: Data Akademik & Pekerjaan */}
        <div className="mt-16 pt-12 border-t-2 border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-[#0F3555] mb-3">Data Akademik & Pekerjaan</h2>
              <p className="text-gray-700 text-sm leading-relaxed font-medium">
                Lengkapi data akademik dan riwayat pekerjaan Anda.
              </p>
            </div>

            <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-900 font-bold mb-2">Program Studi</label>
                    <input type="text" value={programStudi} onChange={(e) => setProgramStudi(e.target.value)} className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F3555] text-gray-900 bg-white"/>
                  </div>
                  <div>
                    <label className="block text-gray-900 font-bold mb-2">Angkatan</label>
                    <input type="text" value={angkatan} onChange={(e) => setAngkatan(e.target.value)} className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F3555] text-gray-900 bg-white" placeholder="Contoh: 2018"/>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-900 font-bold mb-2">Username Instagram</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 font-bold">@</span>
                    <input type="text" value={instagram} onChange={(e) => setInstagram(e.target.value)} className="w-full pl-8 pr-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F3555] text-gray-900 bg-white"/>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-900 font-bold mb-2">Deskripsi Singkat</label>
                  <textarea value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)} className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F3555] text-gray-900 bg-white" rows={3} placeholder="Ceritakan sedikit tentang diri Anda..."/>
                </div>

                <hr className="border-gray-300 my-8 border-dashed" />
                <h3 className="text-xl font-bold text-[#0F3555] mb-4">Informasi Pekerjaan</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-900 font-bold mb-2">Nama Perusahaan</label>
                        <input type="text" value={namaPerusahaan} onChange={(e) => setNamaPerusahaan(e.target.value)} className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F3555] text-gray-900 bg-white"/>
                    </div>
                    <div>
                        <label className="block text-gray-900 font-bold mb-2">Jabatan</label>
                        <select value={jabatan} onChange={(e) => setJabatan(e.target.value)} className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F3555] bg-white text-gray-900 cursor-pointer">
                            <option value="">Pilih Jabatan</option>
                            <option>Manager</option>
                            <option>Developer</option>
                            <option>Designer</option>
                            <option>Analyst</option>
                            <option>Lainnya</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-900 font-bold mb-2">Level Perusahaan</label>
                        <select value={levelPerusahaan} onChange={(e) => setLevelPerusahaan(e.target.value)} className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F3555] bg-white text-gray-900 cursor-pointer">
                            <option>Multinasional</option>
                            <option>Nasional</option>
                            <option>Lokal</option>
                            <option>Startup</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-900 font-bold mb-2">Jenis Industri</label>
                        <select value={jenisPerusahaan} onChange={(e) => setJenisPerusahaan(e.target.value)} className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F3555] bg-white text-gray-900 cursor-pointer">
                            <option value="">Pilih Industri</option>
                            <option>Teknologi</option>
                            <option>Finance</option>
                            <option>Manufaktur</option>
                            <option>Retail</option>
                        </select>
                    </div>
                </div>

                {/* --- LOKASI DINAMIS --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-900 font-bold mb-2">Provinsi</label>
                        <select value={provinsiTempatKerja} onChange={handleProvinsiChange} className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F3555] bg-white text-gray-900 cursor-pointer">
                            {Object.keys(DATA_WILAYAH).sort().map((prov) => (
                                <option key={prov} value={prov}>{prov}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-900 font-bold mb-2">Kota/Kabupaten</label>
                        <select value={kotaKabupaten} onChange={(e) => setKotaKabupaten(e.target.value)} className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F3555] bg-white text-gray-900 cursor-pointer" disabled={!provinsiTempatKerja}>
                            {daftarKota.length > 0 ? (
                                daftarKota.sort().map((kota) => (
                                    <option key={kota} value={kota}>{kota}</option>
                                ))
                            ) : (
                                <option>Tidak ada data kota</option>
                            )}
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-gray-900 font-bold mb-2">Alamat Lengkap Perusahaan</label>
                    <input type="text" value={alamatPerusahaan} onChange={(e) => setAlamatPerusahaan(e.target.value)} className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F3555] text-gray-900 bg-white" placeholder="Nama jalan, gedung, dll."/>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: Keamanan */}
        <div className="mt-16 pt-12 border-t-2 border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-[#0F3555] mb-3">Keamanan Akun</h2>
              <p className="text-gray-700 text-sm leading-relaxed font-medium">
                Kelola kata sandi, autentikasi dua faktor, dan sesi login Anda.
              </p>
            </div>

            <div className="lg:col-span-2 space-y-8">
              {/* Ganti Password */}
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Ganti Kata Sandi</h3>
                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-900 font-bold mb-2">Kata Sandi Saat Ini</label>
                        <input type="password" value={kataSandiSaat} onChange={(e) => setKataSandiSaat(e.target.value)} className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F3555] bg-white text-gray-900"/>
                    </div>
                    <div>
                        <label className="block text-gray-900 font-bold mb-2">Kata Sandi Baru</label>
                        <input type="password" value={kataSandiBaru} onChange={(e) => setKataSandiBaru(e.target.value)} className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F3555] bg-white text-gray-900"/>
                    </div>
                    <div>
                        <label className="block text-gray-900 font-bold mb-2">Konfirmasi Kata Sandi</label>
                        <input type="password" value={konfirmasiKataSandi} onChange={(e) => setKonfirmasiKataSandi(e.target.value)} className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F3555] bg-white text-gray-900"/>
                    </div>
                    <div className="pt-4 text-right">
                        <button onClick={handleUpdatePassword} className="px-6 py-2.5 bg-gray-800 hover:bg-black text-white font-bold rounded-lg transition-colors shadow-md">
                            Update Kata Sandi
                        </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- GLOBAL BUTTONS (Simpan / Batal) --- */}
        <div className="mt-16 flex justify-end gap-6 border-t border-gray-300 pt-8 pb-4">
            <button 
                onClick={() => router.push("/homeuser")}
                className="px-8 py-3 bg-white border-2 border-gray-300 hover:bg-gray-100 text-gray-700 font-bold rounded-lg transition-colors shadow-sm text-sm tracking-wide">
                BATAL
            </button>
            <button 
                onClick={handleSaveAll}
                className="px-8 py-3 bg-[#0F3555] hover:bg-[#082035] text-white font-bold rounded-lg transition-colors shadow-lg transform hover:scale-105 active:scale-95 duration-200 text-sm tracking-wide">
                SIMPAN SEMUA PERUBAHAN
            </button>
        </div>

        {/* --- ZONA BAHAYA (DIPINDAHKAN KE PALING BAWAH) --- */}
        <div className="mt-12 pt-8 border-t-2 border-red-100">
            <div className="bg-red-50 p-8 rounded-xl border border-red-200 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <h3 className="text-lg font-bold text-red-700 mb-2">Zona Bahaya</h3>
                    <p className="text-red-600 text-sm font-medium">
                        Menghapus akun bersifat permanen dan tidak dapat dibatalkan. Semua data Anda akan hilang.
                    </p>
                </div>
                <button 
                    onClick={handleDeleteAccount}
                    className="px-6 py-3 bg-white hover:bg-red-600 hover:text-white text-red-600 border-2 border-red-600 font-bold rounded-lg transition-all shadow-sm whitespace-nowrap">
                    Hapus Akun
                </button>
            </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}