"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Plus, X, Save, FileText } from "lucide-react";

// Mock Data untuk Newsletter
const NEWSLETTER_DATA = [
  {
    id: 1,
    title: "ACTION 2025",
    edition: "Desember 2025",
    image: "/DSC09820.JPG", // Ganti dengan gambar cover majalah Anda
    desc: "Syamsul Rizal, S.Pd., M.Si. - Membangun Negeri Melalui Pendidikan",
  },
  {
    id: 2,
    title: "ACTION 2025",
    edition: "Oktober 2025",
    image: "/DSC09820.JPG",
    desc: "Inovasi Teknologi Pangan untuk Ketahanan Nasional",
  },
  {
    id: 3,
    title: "ACTION 2025",
    edition: "Agustus 2025",
    image: "/DSC09820.JPG",
    desc: "Strategi Catur di Dunia Bisnis: Langkah Pionir Alumni",
  },
  {
    id: 4,
    title: "ACTION 2025",
    edition: "Mei 2025",
    image: "/DSC09820.JPG",
    desc: "Energi Terbarukan: Masa Depan di Tangan Kita",
  },
  {
    id: 5,
    title: "ACTION 2025",
    edition: "April 2025",
    image: "/DSC09820.JPG",
    desc: "Jejak Langkah di Jalur Kereta: Transformasi Transportasi",
  },
  {
    id: 6,
    title: "ACTION 2025",
    edition: "Februari 2025",
    image: "/DSC09820.JPG",
    desc: "Keindahan Senja dan Filosofi Kehidupan",
  },
  {
    id: 7,
    title: "ACTION 2024",
    edition: "Desember 2024",
    image: "/DSC09820.JPG",
    desc: "Ziaul Haq Nawawi - Upaya Menjembatani Pelestarian Lingkungan dengan Pemberdayaan Ekonomi",
  },
  {
    id: 8,
    title: "ACTION 2024",
    edition: "Oktober 2024",
    image: "/DSC09820.JPG",
    desc: "Cahaya Harapan dari Timur Indonesia",
  },
];

interface NewsletterItem {
  id: number;
  title: string;
  edition: string;
  image: string;
  desc: string;
  pdf?: string;
}

export default function Newsletter() {
  const [user, setUser] = useState<any>(null);
  const [newsletter, setNewsletter] = useState<NewsletterItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showPdfViewer, setShowPdfViewer] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    edition: "",
    desc: "",
    image: null as File | null,
    pdf: null as File | null,
  });
  const [imagePreview, setImagePreview] = useState("");

  // Load user and newsletter data
  useEffect(() => {
    const storedUser = localStorage.getItem("alumniUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    // Load newsletter from localStorage
    const storedNewsletter = localStorage.getItem("newsletters");
    if (storedNewsletter) {
      try {
        const parsedNewsletter = JSON.parse(storedNewsletter);
        console.log("Loaded newsletter from localStorage:", parsedNewsletter);
        setNewsletter([...parsedNewsletter, ...NEWSLETTER_DATA]);
      } catch (error) {
        console.error("Error parsing newsletter:", error);
        setNewsletter(NEWSLETTER_DATA);
      }
    } else {
      setNewsletter(NEWSLETTER_DATA);
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

  const handlePdfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, pdf: file });
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.edition ||
      !formData.desc ||
      !formData.image
    ) {
      alert("Mohon lengkapi semua field");
      return;
    }

    const reader = new FileReader();
    const readPdf = () => {
      if (formData.pdf) {
        reader.onloadend = () => {
          const pdfBase64 = reader.result as string;
          const newNewsletter: NewsletterItem = {
            id: Date.now(),
            title: formData.title,
            edition: formData.edition,
            desc: formData.desc,
            image: imagePreview,
            pdf: pdfBase64,
          };
          saveNewsletter(newNewsletter);
        };
        reader.readAsDataURL(formData.pdf);
      } else {
        const newNewsletter: NewsletterItem = {
          id: Date.now(),
          title: formData.title,
          edition: formData.edition,
          desc: formData.desc,
          image: imagePreview,
        };
        saveNewsletter(newNewsletter);
      }
    };
    readPdf();
  };

  const saveNewsletter = (newNewsletter: NewsletterItem) => {
    const storedNewsletter = localStorage.getItem("newsletters");
    const existingNewsletter = storedNewsletter
      ? JSON.parse(storedNewsletter)
      : [];
    const updatedNewsletter = [newNewsletter, ...existingNewsletter];

    localStorage.setItem("newsletters", JSON.stringify(updatedNewsletter));
    console.log("Newsletter tersimpan:", newNewsletter);
    console.log("Total newsletter di localStorage:", updatedNewsletter.length);

    // Update state newsletter dengan data terbaru
    setNewsletter([newNewsletter, ...newsletter]);

    // Reset form
    setFormData({
      title: "",
      edition: "",
      desc: "",
      image: null,
      pdf: null,
    });
    setImagePreview("");
    setShowModal(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <div className="relative bg-[#1E3A8A] pt-32 pb-24 overflow-hidden">
        {/* Background Image Overlay (Optional, biar ada tekstur seperti di gambar) */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Image
            src="/halaman.png"
            alt="bg-texture"
            fill
            className="object-cover grayscale"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Newsletter
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-3xl leading-relaxed">
            Jelajahi E-Bulletin dan temukan kisah-kisah menarik dari para alumni
            inspiratif yang memperkaya perjalanan hidupmu.
          </p>
        </div>

        {/* Wave SVG Divider at Bottom */}
        <div className="absolute bottom-0 left-0 w-full leading-none">
          <svg
            className="w-full h-12 md:h-24 text-gray-50"
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
      <div className="container mx-auto px-6 py-12 flex-grow">
        {/* Admin Floating Action Button */}
        {user && user.accountType === "admin" && (
          <button
            onClick={() => setShowModal(true)}
            className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl z-50 flex items-center gap-2 transition-all hover:scale-110">
            <Plus className="w-6 h-6" />
            <span className="font-semibold pr-2">Tambah Newsletter</span>
          </button>
        )}

        {/* Modal Form */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex items-center justify-center p-4 pt-24 overflow-y-auto">
            <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full my-8 mt-4 animate-fadeIn">
              <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-5 flex justify-between items-center rounded-t-2xl z-10">
                <h2 className="text-2xl font-bold text-white">
                  📧 Tambah Newsletter
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
                    📰 Judul Newsletter *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    className="w-full px-4 py-3 text-gray-900 font-medium border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-400"
                    placeholder="Contoh: ACTION 2026"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2">
                    📅 Edisi *
                  </label>
                  <input
                    type="text"
                    value={formData.edition}
                    onChange={(e) =>
                      setFormData({ ...formData, edition: e.target.value })
                    }
                    className="w-full px-4 py-3 text-gray-900 font-medium border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-400"
                    placeholder="Contoh: Januari 2026"
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
                    className="w-full px-4 py-3 text-gray-900 font-medium border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-400 resize-none"
                    placeholder="Tuliskan deskripsi atau highlight dari newsletter ini..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2">
                    🖼️ Gambar Cover *
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full px-4 py-3 text-gray-900 font-medium border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
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

                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2">
                    📄 File PDF (Opsional)
                  </label>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handlePdfChange}
                    className="w-full px-4 py-3 text-gray-900 font-medium border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                  />
                  {formData.pdf && (
                    <div className="mt-2 flex items-center gap-2 text-orange-600 font-medium">
                      <FileText className="w-5 h-5" />
                      <span>{formData.pdf.name}</span>
                    </div>
                  )}
                </div>

                <div className="flex gap-4 pt-6 border-t-2 border-gray-100">
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-4 rounded-lg transition-all font-bold text-lg shadow-lg hover:shadow-xl">
                    <Save className="w-6 h-6" />
                    <span>Simpan Newsletter</span>
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

        {/* PDF Viewer Modal */}
        {showPdfViewer && selectedPdf && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[80vh] flex flex-col">
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800">
                  📄 Lihat PDF
                </h2>
                <button
                  onClick={() => {
                    setShowPdfViewer(false);
                    setSelectedPdf(null);
                  }}
                  className="text-gray-600 hover:text-gray-800 transition-colors p-1 hover:bg-gray-100 rounded-lg">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <iframe src={selectedPdf} className="flex-1" title="PDF Viewer" />
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
              placeholder="Cari Judul/Nama Seri/Sosok Alumni..."
              className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm text-gray-700 bg-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Grid Newsletter */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newsletter
            .filter(
              (item) =>
                item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.edition.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.desc.toLowerCase().includes(searchTerm.toLowerCase()),
            )
            .map((item) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 h-[450px]">
                {/* Image Cover */}
                <div className="absolute inset-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay Gradient Default (Bottom only) */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-300"></div>
                </div>

                {/* Default Text (Title & Edition) */}
                <div className="absolute bottom-0 left-0 p-6 w-full text-white transform transition-transform duration-300 group-hover:translate-y-full opacity-100 group-hover:opacity-0">
                  <h3 className="text-2xl font-bold uppercase tracking-wider">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium mt-1 text-gray-200">
                    {item.edition}
                  </p>
                </div>

                {/* Hover Overlay (Full Dark Overlay with Details) */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center cursor-pointer">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4 font-light">
                    {item.edition}
                  </p>

                  {/* Deskripsi (Hanya muncul saat hover seperti gambar referensi) */}
                  <p className="text-white text-sm leading-relaxed mb-6 italic line-clamp-4">
                    "{item.desc}"
                  </p>

                  <button
                    onClick={() => {
                      if (item.pdf) {
                        setSelectedPdf(item.pdf);
                        setShowPdfViewer(true);
                      } else {
                        alert("PDF tidak tersedia untuk newsletter ini");
                      }
                    }}
                    className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full text-sm font-medium border border-orange-700 transition-colors flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    {item.pdf ? "Lihat PDF" : "Tidak Ada PDF"}
                  </button>
                </div>
              </div>
            ))}
        </div>

        {/* Pagination & Result Count */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between border-t border-gray-200 pt-8">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            Menampilkan 1 kepada 8 dari 55 hasil
          </p>

          <div className="flex items-center gap-1">
            <button className="px-3 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-100 disabled:opacity-50">
              ❮
            </button>
            <button className="px-3 py-1 rounded border border-blue-500 bg-blue-50 text-blue-600 font-medium">
              1
            </button>
            <button className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-50">
              3
            </button>
            <button className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-50">
              4
            </button>
            <button className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-50">
              5
            </button>
            <button className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-50">
              6
            </button>
            <button className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-50">
              7
            </button>
            <button className="px-3 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-100">
              ❯
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
