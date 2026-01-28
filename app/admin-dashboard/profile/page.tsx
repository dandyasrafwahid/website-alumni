"use client";

import Image from "next/image";
import Link from "next/link";
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

export default function AdminProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

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

                {/* Quick Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link
                    href="/admin-dashboard"
                    className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition">
                    <h3 className="font-semibold text-blue-900 mb-1">
                      Kelola Newsletter
                    </h3>
                    <p className="text-sm text-blue-700">
                      Upload dan kelola newsletter edisi terbaru
                    </p>
                  </Link>

                  <Link
                    href="/admin-dashboard?tab=news"
                    className="block p-4 bg-purple-50 hover:bg-purple-100 rounded-lg border border-purple-200 transition">
                    <h3 className="font-semibold text-purple-900 mb-1">
                      Kelola Berita & Acara
                    </h3>
                    <p className="text-sm text-purple-700">
                      Upload dan kelola berita serta acara departemen
                    </p>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
