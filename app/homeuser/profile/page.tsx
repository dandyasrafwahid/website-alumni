"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type JobFormPayload = {
  title: string;
  company: string;
  description: string;
  location: string;
  jobType: string;
  startDate: string;
  endDate: string;
  link: string;
  pdfUrl?: string;
};

type StoredJob = JobFormPayload & {
  id: number;
  image: string;
  postedBy?: string;
  education?: string;
  experience?: string;
  language?: string;
  pdfUrl?: string;
};

const defaultJobForm: JobFormPayload = {
  title: "",
  company: "",
  description: "",
  location: "",
  jobType: "Full Time",
  startDate: "",
  endDate: "",
  link: "",
  pdfUrl: "",
};

export default function ViewProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [jobForm, setJobForm] = useState<JobFormPayload>(defaultJobForm);
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);
  const [jobFeedback, setJobFeedback] = useState<string | null>(null);
  const [pdfFileName, setPdfFileName] = useState<string>("");

  useEffect(() => {
    const stored = localStorage.getItem("alumniUser");
    if (stored) {
      setUser(JSON.parse(stored));
    }
    setLoading(false);
  }, []);

  const handleJobFieldChange = (field: keyof JobFormPayload, value: string) => {
    setJobForm((prev) => ({ ...prev, [field]: value }));
  };

  const handlePdfUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      const reader = new FileReader();
      reader.onloadend = () => {
        setJobForm((prev) => ({ ...prev, pdfUrl: reader.result as string }));
        setPdfFileName(file.name);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Silakan pilih file PDF yang valid");
      setPdfFileName("");
    }
  };

  const deriveLocation = () => {
    if (jobForm.location.trim()) return jobForm.location.trim();
    if (user?.job?.city && user?.job?.province) {
      return `${user.job.city}, ${user.job.province}`;
    }
    return "-";
  };

  const handleSubmitJob = () => {
    setJobFeedback(null);

    if (!jobForm.title.trim() || !jobForm.company.trim()) {
      setJobFeedback("Judul dan nama perusahaan wajib diisi.");
      return;
    }

    const newJob: StoredJob = {
      id: Date.now(),
      title: jobForm.title.trim(),
      company: jobForm.company.trim(),
      description: jobForm.description.trim() || user?.job?.position || "",
      image: "",
      startDate: jobForm.startDate.trim() || "Segera",
      endDate: jobForm.endDate.trim() || "Tanpa batas",
      location: deriveLocation(),
      jobType: jobForm.jobType || "Full Time",
      link: jobForm.link.trim() || "#",
      postedBy: user?.email || user?.name || "alumni",
    };

    const storedJobs = localStorage.getItem("jobs");
    let existingJobs: StoredJob[] = [];

    if (storedJobs) {
      try {
        const parsed = JSON.parse(storedJobs);
        if (Array.isArray(parsed)) existingJobs = parsed;
      } catch (error) {
        console.error("Gagal memuat jobs sebelumnya", error);
      }
    }

    localStorage.setItem("jobs", JSON.stringify([newJob, ...existingJobs]));
    setJobFeedback("Lowongan berhasil diunggah ke Jobs.");
    setIsJobModalOpen(false);
    setJobForm({ ...defaultJobForm });
    setPdfFileName("");
  };

  // Tampilan Loading
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-[#0F3555] font-bold animate-pulse">
          Memuat Data Profil...
        </div>
      </div>
    );
  }

  // Tampilan Jika Data Kosong (Belum Login/Simpan)
  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 font-sans">
        <Navbar />
        <div className="text-center p-8">
          <p className="mb-6 text-gray-600 text-lg">
            Data profil belum tersedia.
          </p>
          <Link href="/homeuser/perbaruiprofil">
            <button className="px-8 py-3 bg-[#0F3555] text-white font-bold rounded-lg shadow-lg hover:bg-[#0a253c] transition-colors">
              Buat Profil Sekarang
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <div className="relative bg-[#0F3555] pt-32 pb-24 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Image
            src="/DSC09820.JPG"
            alt="bg-texture"
            fill
            className="object-cover grayscale"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Profil Saya
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-3xl leading-relaxed">
            Informasi lengkap mengenai data diri, akademik, dan riwayat
            pekerjaan Anda.
          </p>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full leading-none text-gray-50">
          <svg
            className="w-full h-12 md:h-24"
            viewBox="0 0 1440 320"
            fill="currentColor"
            preserveAspectRatio="none">
            <path
              fillOpacity="1"
              d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,202.7C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* --- MAIN CONTENT CARD --- */}
      <div className="container mx-auto px-6 py-12 flex-grow -mt-20 relative z-20">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {/* 1. Header Profil (Foto, Nama, Kontak) */}
          <div className="p-8 md:p-12 border-b border-gray-100 flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-blue-50/30 to-white">
            {/* Foto Profil */}
            <div className="relative shrink-0">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-[6px] border-white shadow-lg bg-gray-200 flex items-center justify-center">
                {user.photo ? (
                  <img
                    src={user.photo}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-6xl font-bold text-[#0F3555]">
                    {user.initials}
                  </span>
                )}
              </div>
            </div>

            {/* Nama & Email */}
            <div className="flex-grow text-center md:text-left space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {user.name}
              </h2>
              <div className="flex flex-col md:flex-row gap-3 md:gap-6 text-gray-600 text-sm md:text-base justify-center md:justify-start">
                <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm">
                  <span className="text-blue-600">✉️</span> {user.email}
                </div>
                {user.phone && (
                  <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm">
                    <span className="text-green-600">📞</span> {user.phone}
                  </div>
                )}
              </div>
            </div>

            {/* Tombol Edit */}
            <div className="shrink-0 mt-4 md:mt-0">
              <Link href="/homeuser/perbaruiprofil">
                <button className="px-8 py-3 bg-[#0F3555] text-white font-bold rounded-lg shadow-md hover:bg-[#082035] hover:shadow-lg transition-all flex items-center gap-2 transform hover:-translate-y-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5">
                    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                  </svg>
                  Edit Profil
                </button>
              </Link>
            </div>
          </div>

          {/* 2. Detail Informasi (Grid Layout) */}
          <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {/* Kolom Kiri: Akademik */}
            <div>
              <h3 className="text-xl font-bold text-[#0F3555] mb-6 flex items-center gap-3 border-b-2 border-blue-100 pb-3">
                <span className="bg-blue-100 text-[#0F3555] p-2 rounded-lg">
                  🎓
                </span>
                Informasi Akademik
              </h3>
              <div className="space-y-6 pl-2">
                <div className="group">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 group-hover:text-[#0F3555] transition-colors">
                    Program Studi
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    {user.academic?.programStudi || "-"}
                  </p>
                </div>
                <div className="group">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 group-hover:text-[#0F3555] transition-colors">
                    Angkatan
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    {user.academic?.angkatan || "-"}
                  </p>
                </div>
                <div className="group">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 group-hover:text-[#0F3555] transition-colors">
                    Instagram
                  </p>
                  <p className="text-lg font-medium text-blue-600 hover:underline cursor-pointer">
                    {user.academic?.instagram
                      ? `@${user.academic.instagram.replace("@", "")}`
                      : "-"}
                  </p>
                </div>
                <div className="group">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 group-hover:text-[#0F3555] transition-colors">
                    Deskripsi Diri
                  </p>
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 mt-1">
                    <p className="text-base text-gray-700 leading-relaxed italic">
                      "{user.academic?.deskripsi || "Belum ada deskripsi."}"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Kolom Kanan: Pekerjaan */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
                <h3 className="text-xl font-bold text-[#0F3555] flex items-center gap-3 border-b-2 border-blue-100 pb-3">
                  <span className="bg-blue-100 text-[#0F3555] p-2 rounded-lg">
                    💼
                  </span>
                  Informasi Pekerjaan
                </h3>
                <button
                  onClick={() => {
                    setJobFeedback(null);
                    setIsJobModalOpen(true);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#0F3555] text-white text-sm font-bold rounded-lg shadow-md hover:bg-[#082035] transition-all">
                  Upload ke Jobs
                </button>
              </div>

              {jobFeedback && (
                <div className="mb-4 px-4 py-3 bg-green-50 text-green-800 border border-green-200 rounded-lg text-sm">
                  {jobFeedback}
                </div>
              )}

              <div className="space-y-6 pl-2">
                <div className="grid grid-cols-2 gap-6">
                  <div className="group">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 group-hover:text-[#0F3555] transition-colors">
                      Perusahaan
                    </p>
                    <p className="text-lg font-semibold text-gray-900">
                      {user.job?.company || "-"}
                    </p>
                  </div>
                  <div className="group">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 group-hover:text-[#0F3555] transition-colors">
                      Jabatan
                    </p>
                    <p className="text-lg font-semibold text-gray-900">
                      {user.job?.position || "-"}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="group">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 group-hover:text-[#0F3555] transition-colors">
                      Level
                    </p>
                    <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold border border-gray-200">
                      {user.job?.level || "-"}
                    </span>
                  </div>
                  <div className="group">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 group-hover:text-[#0F3555] transition-colors">
                      Industri
                    </p>
                    <span className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold border border-blue-100">
                      {user.job?.industry || "-"}
                    </span>
                  </div>
                </div>

                <div className="group">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 group-hover:text-[#0F3555] transition-colors">
                    Lokasi Kerja
                  </p>
                  <p className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <span className="text-red-500">📍</span>
                    {user.job?.city
                      ? `${user.job.city}, ${user.job.province}`
                      : "-"}
                  </p>
                </div>
                <div className="group">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 group-hover:text-[#0F3555] transition-colors">
                    Alamat Lengkap
                  </p>
                  <p className="text-base text-gray-700">
                    {user.job?.address || "-"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isJobModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-gray-200 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Upload Lowongan
                </p>
                <h4 className="text-xl font-bold text-[#0F3555]">
                  Kirim informasi pekerjaan ke Jobs
                </h4>
              </div>
              <button
                onClick={() => setIsJobModalOpen(false)}
                className="text-gray-500 hover:text-gray-800"
                aria-label="Tutup">
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">
                  Judul Lowongan
                </label>
                <input
                  type="text"
                  value={jobForm.title}
                  onChange={(e) =>
                    handleJobFieldChange("title", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F3555]"
                  placeholder="Contoh: Frontend Developer"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">
                  Nama Perusahaan
                </label>
                <input
                  type="text"
                  value={jobForm.company}
                  onChange={(e) =>
                    handleJobFieldChange("company", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F3555]"
                  placeholder="Masukkan nama perusahaan"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">
                  Tanggal Mulai
                </label>
                <input
                  type="text"
                  value={jobForm.startDate}
                  onChange={(e) =>
                    handleJobFieldChange("startDate", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F3555]"
                  placeholder="Misal: 01 Feb 2026"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">
                  Tanggal Berakhir
                </label>
                <input
                  type="text"
                  value={jobForm.endDate}
                  onChange={(e) =>
                    handleJobFieldChange("endDate", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F3555]"
                  placeholder="Misal: 28 Feb 2026"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">
                  Lokasi
                </label>
                <input
                  type="text"
                  value={jobForm.location}
                  onChange={(e) =>
                    handleJobFieldChange("location", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F3555]"
                  placeholder="Kota, Provinsi"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">
                  Jenis Pekerjaan
                </label>
                <select
                  value={jobForm.jobType}
                  onChange={(e) =>
                    handleJobFieldChange("jobType", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F3555] bg-white">
                  <option>Full Time</option>
                  <option>Part Time</option>
                  <option>Internship</option>
                  <option>Contract</option>
                  <option>Freelance</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1">
                Link Pendaftaran (opsional)
              </label>
              <input
                type="text"
                value={jobForm.link}
                onChange={(e) => handleJobFieldChange("link", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F3555]"
                placeholder="https://..."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1">
                Deskripsi Singkat
              </label>
              <textarea
                value={jobForm.description}
                onChange={(e) =>
                  handleJobFieldChange("description", e.target.value)
                }
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F3555]"
                placeholder="Jelaskan posisi, persyaratan utama, atau kontak HR."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1">
                Upload PDF Job Posting (Opsional)
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={handlePdfUpload}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg file:bg-[#0F3555] file:text-white file:border-0 file:px-4 file:py-2 file:rounded file:cursor-pointer hover:file:bg-[#082035]"
                />
              </div>
              {pdfFileName && (
                <p className="text-sm text-green-600 mt-2 flex items-center gap-2">
                  ✓ {pdfFileName} berhasil diunggah
                </p>
              )}
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setIsJobModalOpen(false)}
                className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100">
                Batal
              </button>
              <button
                onClick={handleSubmitJob}
                className="px-6 py-2.5 rounded-lg bg-[#0F3555] text-white font-bold shadow hover:bg-[#082035]">
                Unggah ke Jobs
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
