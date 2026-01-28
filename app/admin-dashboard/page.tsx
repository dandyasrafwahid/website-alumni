"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

type NewsletterItem = {
  id: number;
  title: string;
  edition: string;
  image: string;
  uploadDate: string;
};

type NewsEventItem = {
  id: number;
  title: string;
  content: string;
  image: string;
  date: string;
  uploadDate: string;
};

export default function AdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"newsletter" | "news">(
    "newsletter",
  );

  // Newsletter State
  const [newsletters, setNewsletters] = useState<NewsletterItem[]>([]);
  const [newsletterForm, setNewsletterForm] = useState({
    title: "",
    edition: "",
    image: null as File | null,
  });
  const [newsletterPreview, setNewsletterPreview] = useState<string>("");

  // News & Events State
  const [newsEvents, setNewsEvents] = useState<NewsEventItem[]>([]);
  const [newsForm, setNewsForm] = useState({
    title: "",
    content: "",
    image: null as File | null,
    date: "",
  });
  const [newsPreview, setNewsPreview] = useState<string>("");

  // Check user and load data
  useEffect(() => {
    const storedData = localStorage.getItem("alumniUser");
    if (storedData) {
      const userData = JSON.parse(storedData);
      // Redirect if not admin
      if (userData.accountType !== "admin") {
        router.push("/homeuser");
        return;
      }
      setUser(userData);

      // Load newsletters and news from localStorage
      const storedNewsletters = localStorage.getItem("newsletters");
      if (storedNewsletters) {
        setNewsletters(JSON.parse(storedNewsletters));
      }

      const storedNews = localStorage.getItem("newsEvents");
      if (storedNews) {
        setNewsEvents(JSON.parse(storedNews));
      }
    } else {
      router.push("/login");
      return;
    }
    setLoading(false);
  }, [router]);

  // Newsletter Handlers
  const handleNewsletterImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setNewsletterForm({ ...newsletterForm, image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewsletterPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !newsletterForm.title ||
      !newsletterForm.edition ||
      !newsletterForm.image
    ) {
      alert("Mohon lengkapi semua field");
      return;
    }

    const newNewsletter: NewsletterItem = {
      id: Date.now(),
      title: newsletterForm.title,
      edition: newsletterForm.edition,
      image: newsletterPreview,
      uploadDate: new Date().toLocaleDateString("id-ID"),
    };

    const updatedNewsletters = [...newsletters, newNewsletter];
    setNewsletters(updatedNewsletters);
    localStorage.setItem("newsletters", JSON.stringify(updatedNewsletters));

    setNewsletterForm({ title: "", edition: "", image: null });
    setNewsletterPreview("");
    alert("Newsletter berhasil diunggah!");
  };

  const deleteNewsletter = (id: number) => {
    const updatedNewsletters = newsletters.filter((n) => n.id !== id);
    setNewsletters(updatedNewsletters);
    localStorage.setItem("newsletters", JSON.stringify(updatedNewsletters));
  };

  // News & Events Handlers
  const handleNewsImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setNewsForm({ ...newsForm, image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewsPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !newsForm.title ||
      !newsForm.content ||
      !newsForm.image ||
      !newsForm.date
    ) {
      alert("Mohon lengkapi semua field");
      return;
    }

    const newNewsEvent: NewsEventItem = {
      id: Date.now(),
      title: newsForm.title,
      content: newsForm.content,
      image: newsPreview,
      date: newsForm.date,
      uploadDate: new Date().toLocaleDateString("id-ID"),
    };

    const updatedNewsEvents = [...newsEvents, newNewsEvent];
    setNewsEvents(updatedNewsEvents);
    localStorage.setItem("newsEvents", JSON.stringify(updatedNewsEvents));

    setNewsForm({ title: "", content: "", image: null, date: "" });
    setNewsPreview("");
    alert("Berita berhasil diunggah!");
  };

  const deleteNewsEvent = (id: number) => {
    const updatedNewsEvents = newsEvents.filter((n) => n.id !== id);
    setNewsEvents(updatedNewsEvents);
    localStorage.setItem("newsEvents", JSON.stringify(updatedNewsEvents));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-[#1E3A8A] font-bold animate-pulse">
          Memuat Data...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />

      <main className="relative min-h-screen pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Admin Dashboard
            </h1>
            <p className="text-gray-600">
              Kelola Newsletter dan Berita & Acara untuk Alumni
            </p>
            {user && (
              <p className="text-sm text-gray-500 mt-2">
                Selamat datang,{" "}
                <span className="font-semibold">{user.name}</span> (Admin)
              </p>
            )}
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-4 mb-8 border-b border-gray-200">
            <button
              onClick={() => setActiveTab("newsletter")}
              className={`pb-4 px-2 font-semibold transition-colors ${
                activeTab === "newsletter"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}>
              Newsletter
            </button>
            <button
              onClick={() => setActiveTab("news")}
              className={`pb-4 px-2 font-semibold transition-colors ${
                activeTab === "news"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}>
              Berita & Acara
            </button>
          </div>

          {/* Newsletter Tab */}
          {activeTab === "newsletter" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Upload Form */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Upload Newsletter
                  </h2>
                  <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Judul
                      </label>
                      <input
                        type="text"
                        value={newsletterForm.title}
                        onChange={(e) =>
                          setNewsletterForm({
                            ...newsletterForm,
                            title: e.target.value,
                          })
                        }
                        placeholder="Contoh: ACTION 2025"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Edisi
                      </label>
                      <input
                        type="text"
                        value={newsletterForm.edition}
                        onChange={(e) =>
                          setNewsletterForm({
                            ...newsletterForm,
                            edition: e.target.value,
                          })
                        }
                        placeholder="Contoh: Desember 2025"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Gambar Cover
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleNewsletterImageChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      {newsletterPreview && (
                        <div className="mt-3 relative w-full h-40 rounded-lg overflow-hidden">
                          <Image
                            src={newsletterPreview}
                            alt="Preview"
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition">
                      Upload Newsletter
                    </button>
                  </form>
                </div>
              </div>

              {/* Newsletter List */}
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  {newsletters.length === 0 ? (
                    <div className="bg-gray-100 rounded-lg p-8 text-center text-gray-500">
                      Belum ada newsletter. Mulai upload sekarang!
                    </div>
                  ) : (
                    newsletters.map((newsletter) => (
                      <div
                        key={newsletter.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                        <div className="flex gap-4 p-4">
                          <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                            <Image
                              src={newsletter.image}
                              alt={newsletter.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-grow">
                            <h3 className="font-bold text-gray-900">
                              {newsletter.title}
                            </h3>
                            <p className="text-sm text-gray-600">
                              Edisi: {newsletter.edition}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              Diupload: {newsletter.uploadDate}
                            </p>
                          </div>
                          <button
                            onClick={() => deleteNewsletter(newsletter.id)}
                            className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition h-fit">
                            Hapus
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}

          {/* News & Events Tab */}
          {activeTab === "news" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Upload Form */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Upload Berita & Acara
                  </h2>
                  <form onSubmit={handleNewsSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Judul
                      </label>
                      <input
                        type="text"
                        value={newsForm.title}
                        onChange={(e) =>
                          setNewsForm({ ...newsForm, title: e.target.value })
                        }
                        placeholder="Judul berita/acara"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Konten
                      </label>
                      <textarea
                        value={newsForm.content}
                        onChange={(e) =>
                          setNewsForm({ ...newsForm, content: e.target.value })
                        }
                        placeholder="Isi berita/acara"
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Tanggal Acara
                      </label>
                      <input
                        type="date"
                        value={newsForm.date}
                        onChange={(e) =>
                          setNewsForm({ ...newsForm, date: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Gambar
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleNewsImageChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      {newsPreview && (
                        <div className="mt-3 relative w-full h-40 rounded-lg overflow-hidden">
                          <Image
                            src={newsPreview}
                            alt="Preview"
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition">
                      Upload Berita
                    </button>
                  </form>
                </div>
              </div>

              {/* News & Events List */}
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  {newsEvents.length === 0 ? (
                    <div className="bg-gray-100 rounded-lg p-8 text-center text-gray-500">
                      Belum ada berita. Mulai upload sekarang!
                    </div>
                  ) : (
                    newsEvents.map((news) => (
                      <div
                        key={news.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                        <div className="flex gap-4 p-4">
                          <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                            <Image
                              src={news.image}
                              alt={news.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-grow">
                            <h3 className="font-bold text-gray-900">
                              {news.title}
                            </h3>
                            <p className="text-sm text-gray-600 line-clamp-2">
                              {news.content}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              Tanggal:{" "}
                              {new Date(news.date).toLocaleDateString("id-ID")}
                            </p>
                            <p className="text-xs text-gray-500">
                              Diupload: {news.uploadDate}
                            </p>
                          </div>
                          <button
                            onClick={() => deleteNewsEvent(news.id)}
                            className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition h-fit">
                            Hapus
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
