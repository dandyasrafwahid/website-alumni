"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

type AdminProfileData = {
  nama: string;
  nip: string;
  email: string;
  noHp: string;
  departemen: string;
  jabatan: string;
  foto?: string;
};

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

export default function AdminProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState<"profile" | "newsletter" | "news">(
    "profile",
  );

  const [profileData, setProfileData] = useState<AdminProfileData>({
    nama: "",
    nip: "",
    email: "",
    noHp: "",
    departemen: "Teknik Informatika",
    jabatan: "",
    foto: "",
  });

  const [fotoPreview, setFotoPreview] = useState<string>("");

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

  useEffect(() => {
    const storedData = localStorage.getItem("alumniUser");
    if (storedData) {
      const userData = JSON.parse(storedData);
      if (userData.accountType !== "admin") {
        router.push("/homeuser");
        return;
      }
      setUser(userData);

      // Load admin profile data
      const adminProfile = localStorage.getItem(`adminProfile_${userData.nip}`);
      if (adminProfile) {
        const profile = JSON.parse(adminProfile);
        setProfileData(profile);
        if (profile.foto) {
          setFotoPreview(profile.foto);
        }
      } else {
        // Initialize with user data
        setProfileData((prev) => ({
          ...prev,
          nama: userData.name,
          nip: userData.nip,
          email: userData.email || "",
        }));
      }
    } else {
      router.push("/login");
      return;
    }
    setLoading(false);
  }, [router]);

  const handleFotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) return;

    const updatedProfile = {
      ...profileData,
      foto: fotoPreview,
    };

    localStorage.setItem(
      `adminProfile_${user.nip}`,
      JSON.stringify(updatedProfile),
    );

    setIsEditing(false);
    alert("Profil berhasil disimpan!");
  };

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

  // Load data on mount
  useEffect(() => {
    const storedNewsletters = localStorage.getItem("newsletters");
    if (storedNewsletters) {
      setNewsletters(JSON.parse(storedNewsletters));
    }

    const storedNews = localStorage.getItem("newsEvents");
    if (storedNews) {
      setNewsEvents(JSON.parse(storedNews));
    }
  }, []);

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
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="mb-8">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  Profil Admin
                </h1>
                <p className="text-gray-600">
                  Kelola informasi profil admin departemen
                </p>
              </div>
              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition">
                  Edit Profil
                </button>
              )}
            </div>
          </div>

          {/* Profile Card */}
          <div className="bg-white rounded-lg shadow-md p-8">
            {isEditing ? (
              // Edit Mode
              <form onSubmit={handleSaveProfile} className="space-y-6">
                {/* Foto Section */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Foto Profil
                  </label>
                  <div className="flex gap-6">
                    <div className="relative w-32 h-32 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0">
                      {fotoPreview ? (
                        <Image
                          src={fotoPreview}
                          alt="Foto"
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          <span>Belum Ada Foto</span>
                        </div>
                      )}
                    </div>
                    <div className="flex-grow">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFotoChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <p className="text-xs text-gray-500 mt-2">
                        Ukuran maksimal 5MB. Format: JPG, PNG
                      </p>
                    </div>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      name="nama"
                      value={profileData.nama}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      NIP
                    </label>
                    <input
                      type="text"
                      name="nip"
                      value={profileData.nip}
                      onChange={handleInputChange}
                      disabled
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed text-gray-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      No HP / WA
                    </label>
                    <input
                      type="tel"
                      name="noHp"
                      value={profileData.noHp}
                      onChange={handleInputChange}
                      placeholder="08xxxxxxxxxx"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Departemen
                    </label>
                    <input
                      type="text"
                      name="departemen"
                      value={profileData.departemen}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Jabatan
                    </label>
                    <input
                      type="text"
                      name="jabatan"
                      value={profileData.jabatan}
                      onChange={handleInputChange}
                      placeholder="Contoh: Kepala Departemen, Sekretaris, dll"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition">
                    Simpan Perubahan
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-6 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded-lg font-semibold transition">
                    Batal
                  </button>
                </div>
              </form>
            ) : (
              // View Mode
              <div>
                {/* Profile Header */}
                <div className="flex gap-8 mb-8 pb-8 border-b border-gray-200">
                  <div className="relative w-40 h-40 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0">
                    {fotoPreview ? (
                      <Image
                        src={fotoPreview}
                        alt="Foto"
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <span>Belum Ada Foto</span>
                      </div>
                    )}
                  </div>

                  <div className="flex-grow">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {profileData.nama}
                    </h2>
                    <div className="space-y-2 text-gray-600">
                      <p>
                        <span className="font-semibold">Jabatan:</span>{" "}
                        {profileData.jabatan || "Belum diisi"}
                      </p>
                      <p>
                        <span className="font-semibold">Departemen:</span>{" "}
                        {profileData.departemen}
                      </p>
                      <p>
                        <span className="font-semibold">NIP:</span>{" "}
                        {profileData.nip}
                      </p>
                      <p>
                        <span className="font-semibold">Email:</span>{" "}
                        {profileData.email}
                      </p>
                      <p>
                        <span className="font-semibold">No HP:</span>{" "}
                        {profileData.noHp || "Belum diisi"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tab Navigation */}
                <div className="flex gap-4 mb-8 border-b border-gray-200">
                  <button
                    onClick={() => setActiveTab("profile")}
                    className={`pb-4 px-2 font-semibold transition-colors ${
                      activeTab === "profile"
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-600 hover:text-gray-900"
                    }`}>
                    Data Profil
                  </button>
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

                {/* Tab Content */}
                {activeTab === "profile" && (
                  <div className="text-center text-gray-500 py-8">
                    Klik Edit Profil untuk mengubah data
                  </div>
                )}

                {/* Newsletter Tab */}
                {activeTab === "newsletter" && (
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Upload Form */}
                    <div className="lg:col-span-1">
                      <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          Upload Newsletter
                        </h3>
                        <form
                          onSubmit={handleNewsletterSubmit}
                          className="space-y-4">
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
                                <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
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
                                  onClick={() =>
                                    deleteNewsletter(newsletter.id)
                                  }
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
                      <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          Upload Berita & Acara
                        </h3>
                        <form onSubmit={handleNewsSubmit} className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Judul
                            </label>
                            <input
                              type="text"
                              value={newsForm.title}
                              onChange={(e) =>
                                setNewsForm({
                                  ...newsForm,
                                  title: e.target.value,
                                })
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
                                setNewsForm({
                                  ...newsForm,
                                  content: e.target.value,
                                })
                              }
                              placeholder="Isi berita/acara"
                              rows={3}
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
                                setNewsForm({
                                  ...newsForm,
                                  date: e.target.value,
                                })
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
                                <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
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
                                    {new Date(news.date).toLocaleDateString(
                                      "id-ID",
                                    )}
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
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
