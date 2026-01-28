"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Plus, X, Save } from "lucide-react";

// --- TIPE DATA ---
interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
  desc: string;
  tags: string[]; // Array untuk menampung tag seperti "News", "Event"
  isFeatured?: boolean; // Penanda untuk berita utama yang besar
}

// --- DATA MOCKUP (Sesuai Gambar) ---
const NEWS_DATA: NewsItem[] = [
  {
    id: 1,
    title: "Sosok Alumni",
    date: "November 24, 2025",
    image: "/DSC09820.JPG", // Ganti dengan gambar yang sesuai
    desc: "Sosok Alumni adalah segmen untuk merayakan mereka yang menginspirasi—alumni Universitas Hasanuddin yang berkarya, mengabdi, dan membawa nilai-nilai almamater ke berbagai penjuru. Sosok alumni kali ini adalah William Sabandar, alumnus program Sarjana...",
    tags: ["News"],
    isFeatured: true,
  },
  {
    id: 2,
    title: "Perayaan Maulid Universitas Hasanuddin, di tepi danau UNHAS",
    date: "September 16, 2025",
    image: "/DSC09820.JPG",
    desc: "Universitas Hasanuddin menggelar perayaan Maulid di Tepi Danau Unhas. Kegiatan perdana ini tidak hanya menghadirkan nuansa spiritual dan budaya, tetapi juga menjadi ruang strategis antara alumni dan almamater untuk memperkuat...",
    tags: ["Event", "News"],
  },
  {
    id: 3,
    title:
      "Employer Meeting: Memperkuat Kesiapan Lulusan Universitas Hasanuddin di Dunia Industri",
    date: "September 15, 2025",
    image: "/DSC09820.JPG",
    desc: "Universitas Hasanuddin melalui Wakil Rektor III Bidang SDM, Alumni, dan Sistem Informasi, Prof. Dr. Farida Patittingi, S.H., M.Hum., bersama Direktorat Hubungan Alumni, menyelenggarakan Employer Meeting di Hotel Unhas. Kegiatan ini...",
    tags: ["Event", "News"],
  },
  {
    id: 4,
    title: "Lomba Kaddo’ Minnya’, Meriahkan Dies Natalis ke-69 Unhas!",
    date: "September 11, 2025",
    image: "/DSC09820.JPG",
    desc: "Lomba Kaddo’ Minnya’, Meriahkan Dies Natalis ke-69 Unhas! Universitas Hasanuddin (Unhas) melalui Pengurus Pusat IKA Unhas dan Panitia Dies Natalis akan menggelar Lomba Kaddo’ Minnya’ sebagai bagian dari rangkaian perayaan Maulid...",
    tags: ["Event"],
  },
];

export default function NewsEventsPage() {
  const [user, setUser] = useState<any>(null);
  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    date: "",
    tags: [] as string[],
    isFeatured: false,
    image: null as File | null,
  });
  const [imagePreview, setImagePreview] = useState("");

  // Load user and news data
  useEffect(() => {
    const storedUser = localStorage.getItem("alumniUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    // Load news from localStorage
    const storedNews = localStorage.getItem("newsEvents");
    if (storedNews) {
      try {
        const parsedNews = JSON.parse(storedNews);
        console.log("Loaded news from localStorage:", parsedNews);
        // Gabungkan news dari admin dengan data default
        setNewsData([...parsedNews, ...NEWS_DATA]);
      } catch (error) {
        console.error("Error parsing news:", error);
        setNewsData(NEWS_DATA);
      }
    } else {
      // Jika tidak ada data di localStorage, gunakan data default
      setNewsData(NEWS_DATA);
    }
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTagToggle = (tag: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter((t) => t !== tag)
        : [...prev.tags, tag],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.desc ||
      !formData.date ||
      formData.tags.length === 0 ||
      !formData.image
    ) {
      alert("Mohon lengkapi semua field");
      return;
    }

    const newNews: NewsItem = {
      id: Date.now(),
      title: formData.title,
      desc: formData.desc,
      date: new Date(formData.date).toLocaleDateString("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      tags: formData.tags,
      isFeatured: formData.isFeatured,
      image: imagePreview,
    };

    const storedNews = localStorage.getItem("newsEvents");
    const existingNews = storedNews ? JSON.parse(storedNews) : [];
    const updatedNews = [newNews, ...existingNews];

    localStorage.setItem("newsEvents", JSON.stringify(updatedNews));
    console.log("Berita tersimpan:", newNews);
    console.log("Total berita di localStorage:", updatedNews.length);

    // Reset form
    setFormData({
      title: "",
      desc: "",
      date: "",
      tags: [],
      isFeatured: false,
      image: null,
    });
    setImagePreview("");
    setShowModal(false);

    alert("Berita berhasil ditambahkan! Halaman akan dimuat ulang.");

    // Reload halaman untuk menampilkan data terbaru
    window.location.reload();
  };

  // Pisahkan data Featured dan Regular
  const featuredNews = newsData.find((item) => item.isFeatured);
  const regularNews = newsData.filter((item) => !item.isFeatured);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
      <Navbar />

      {/* --- HERO SECTION --- */}
      {/* Background biru tua dengan judul dan deskripsi */}
      <div className="relative bg-[#1E3A8A] pt-32 pb-32 overflow-hidden">
        {/* Overlay Gambar Background (Opsional) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Image
            src="/DSC09820.JPG"
            alt="bg-texture"
            fill
            className="object-cover grayscale"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            News & Events
          </h1>
          <p className="text-blue-100 text-lg">
            Dapatkan info terkini tentang berita dan acara terbaru di portal
            alumni.
          </p>
        </div>

        {/* Wave SVG Divider (Lekukan Putih di Bawah) */}
        <div className="absolute bottom-0 left-0 w-full leading-none">
          <svg
            className="w-full h-12 md:h-20 text-gray-50"
            viewBox="0 0 1440 320"
            fill="currentColor"
            preserveAspectRatio="none">
            <path
              fillOpacity="1"
              d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,202.7C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="container mx-auto px-6 py-12 flex-grow -mt-20 relative z-20">
        {/* Admin Floating Action Button */}
        {user && user.accountType === "admin" && (
          <button
            onClick={() => setShowModal(true)}
            className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl z-50 flex items-center gap-2 transition-all hover:scale-110">
            <Plus className="w-6 h-6" />
            <span className="font-semibold pr-2">Tambah Berita</span>
          </button>
        )}

        {/* Modal Form */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex items-center justify-center p-4 pt-24 overflow-y-auto">
            <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full my-8 mt-4 animate-fadeIn">
              <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-5 flex justify-between items-center rounded-t-2xl z-10">
                <h2 className="text-2xl font-bold text-white">
                  ✨ Tambah Berita & Acara
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-white hover:text-gray-200 transition-colors p-1 hover:bg-white hover:bg-opacity-20 rounded-lg">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form
                onSubmit={handleSubmit}
                className="p-8 space-y-6 max-h-[calc(90vh-80px)] overflow-y-auto">
                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2">
                    📰 Judul Berita *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    className="w-full px-4 py-3 text-gray-900 font-medium border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                    placeholder="Contoh: Perayaan Dies Natalis UNHAS"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2">
                    📝 Deskripsi *
                  </label>
                  <textarea
                    value={formData.desc}
                    onChange={(e) =>
                      setFormData({ ...formData, desc: e.target.value })
                    }
                    rows={6}
                    className="w-full px-4 py-3 text-gray-900 font-medium border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 resize-none"
                    placeholder="Tuliskan deskripsi lengkap berita atau acara..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2">
                    📅 Tanggal *
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    className="w-full px-4 py-3 text-gray-900 font-medium border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-3">
                    🏷️ Tags * (Pilih minimal 1)
                  </label>
                  <div className="flex gap-3 flex-wrap">
                    {["News", "Event", "Announcement"].map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => handleTagToggle(tag)}
                        className={`px-5 py-2.5 rounded-lg border-2 font-semibold transition-all ${
                          formData.tags.includes(tag)
                            ? "bg-blue-600 text-white border-blue-600 shadow-md scale-105"
                            : "bg-white text-gray-800 border-gray-300 hover:border-blue-600 hover:text-blue-600"
                        }`}>
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.isFeatured}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          isFeatured: e.target.checked,
                        })
                      }
                      className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="text-sm font-bold text-gray-800">
                      ⭐ Jadikan Berita Utama (Featured)
                    </span>
                  </label>
                  <p className="text-xs text-gray-600 mt-1 ml-8">
                    Berita akan ditampilkan di bagian paling atas
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2">
                    🖼️ Gambar *
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full px-4 py-3 text-gray-900 font-medium border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                  {imagePreview && (
                    <div className="mt-4 relative w-full h-56 rounded-xl overflow-hidden border-2 border-gray-200">
                      <Image
                        src={imagePreview}
                        alt="Preview"
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>

                <div className="flex gap-4 pt-6 border-t-2 border-gray-100">
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-4 rounded-lg transition-all font-bold text-lg shadow-lg hover:shadow-xl">
                    <Save className="w-6 h-6" />
                    <span>Simpan Berita</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-8 py-4 border-2 border-gray-300 text-gray-800 rounded-lg hover:bg-gray-100 transition-all font-bold text-lg">
                    Batal
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-16 relative">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Cari berita atau acara..."
              className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm text-gray-700 bg-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* 1. FEATURED NEWS (Card Besar) */}
        {featuredNews &&
          (featuredNews.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
            featuredNews.desc
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            featuredNews.tags.some((tag) =>
              tag.toLowerCase().includes(searchTerm.toLowerCase()),
            )) && (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row mb-16 border border-gray-100">
              {/* Image Side */}
              <div className="md:w-1/2 h-64 md:h-auto relative">
                <Image
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Content Side */}
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {featuredNews.title}
                </h2>
                <p className="text-gray-500 text-sm mb-4">
                  {featuredNews.date}
                </p>

                {/* Tags */}
                <div className="flex gap-2 mb-4">
                  {featuredNews.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {featuredNews.desc}
                </p>
              </div>
            </div>
          )}

        {/* 2. NEWS GRID (Daftar Berita Lainnya) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularNews
            .filter(
              (item) =>
                item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.tags.some((tag) =>
                  tag.toLowerCase().includes(searchTerm.toLowerCase()),
                ),
            )
            .map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setSelectedNews(item);
                  setShowDetailModal(true);
                }}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all overflow-hidden border border-gray-100 flex flex-col cursor-pointer hover:scale-[1.02]">
                {/* Card Image */}
                <div className="h-56 relative w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{item.date}</p>

                  {/* Tags */}
                  <div className="flex gap-2 mb-4">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
        </div>

        {/* 3. LOAD MORE BUTTON */}
        {regularNews.filter(
          (item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.tags.some((tag) =>
              tag.toLowerCase().includes(searchTerm.toLowerCase()),
            ),
        ).length > 0 && (
          <div className="flex justify-center mt-16">
            <button className="bg-[#1A1A1A] hover:bg-black text-white text-sm font-semibold px-8 py-3 rounded-md transition-colors tracking-wide">
              LOAD MORE
            </button>
          </div>
        )}

        {/* Pesan Jika Tidak Ada Hasil */}
        {regularNews.filter(
          (item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.tags.some((tag) =>
              tag.toLowerCase().includes(searchTerm.toLowerCase()),
            ),
        ).length === 0 &&
          searchTerm !== "" && (
            <div className="flex flex-col items-center justify-center py-16">
              <svg
                className="w-16 h-16 text-gray-300 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Tidak ada hasil
              </h3>
              <p className="text-gray-500 text-center">
                Maaf, kami tidak menemukan berita atau acara yang sesuai dengan
                pencarian Anda.
              </p>
            </div>
          )}

        {/* DETAIL MODAL */}
        {showDetailModal && selectedNews && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
            <div className="min-h-screen flex items-start justify-center pt-0">
              <div className="bg-white w-full relative">
                {/* Close Button */}
                <button
                  onClick={() => setShowDetailModal(false)}
                  className="fixed top-8 right-8 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 z-50 border border-gray-200">
                  <X className="w-6 h-6 text-gray-800" />
                </button>

                {/* Content Container */}
                <div className="container mx-auto px-6 py-12 max-w-5xl pt-32">
                  {/* Title */}
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    {selectedNews.title}
                  </h1>

                  {/* Date & Time */}
                  <div className="flex items-center gap-4 text-gray-600 mb-4 text-sm">
                    <span className="flex items-center gap-2">
                      📅 {selectedNews.date}
                    </span>
                    <span className="flex items-center gap-2">
                      ⏱️ 05:27 pagi
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex gap-2 mb-8">
                    {selectedNews.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-500 text-white text-sm font-bold px-4 py-1.5 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Image - Smaller Size */}
                  <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
                    <Image
                      src={selectedNews.image}
                      alt={selectedNews.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Description */}
                  <div className="prose prose-lg max-w-none mb-8">
                    <p className="text-gray-700 leading-relaxed text-justify">
                      {selectedNews.desc}
                    </p>
                  </div>

                  {/* Source Section */}
                  <div className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-white rounded-xl p-8 mb-12">
                    <h3 className="text-xl font-bold mb-4">📌 Sumber:</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span>Instagram @kedubesaustralia</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <a
                          href="https://www.instagram.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white underline hover:text-cyan-100">
                          https://www.instagram.com/kedubesaustralia/
                        </a>
                      </li>
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span>
                          Unhas TV, William Sabandar: Dari Teknik Unhas hingga
                          Alumni Australia Terbaik.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Related News Section */}
                  <div className="py-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">
                      Latest Articles
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {newsData.slice(0, 3).map((article) => (
                        <div
                          key={article.id}
                          onClick={() => setSelectedNews(article)}
                          className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-gray-100">
                          <div className="relative h-48 w-full">
                            <Image
                              src={article.image}
                              alt={article.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-4">
                            <h3 className="font-bold text-gray-900 text-sm line-clamp-2 mb-2">
                              {article.title}
                            </h3>
                            <p className="text-gray-600 text-xs line-clamp-2">
                              {article.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
