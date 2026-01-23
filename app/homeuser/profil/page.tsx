"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ViewProfilePage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const stored = localStorage.getItem("alumniUser");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  if (!user) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      
      <div className="pt-32 pb-12 bg-[#0F3555] text-white text-center">
        <h1 className="text-4xl font-bold">Profil Saya</h1>
        <p className="text-blue-200 mt-2">Informasi detail akun alumni Anda</p>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            {/* Header Profil */}
            <div className="p-8 flex flex-col md:flex-row items-center gap-8 border-b border-gray-100">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-100 bg-gray-200">
                    {user.photo ? (
                        <img src={user.photo} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-gray-400">{user.initials}</div>
                    )}
                </div>
                <div className="text-center md:text-left flex-grow">
                    <h2 className="text-3xl font-bold text-gray-900">{user.name}</h2>
                    <p className="text-gray-500 mt-1">{user.email}</p>
                    <p className="text-gray-500">{user.phone}</p>
                </div>
                <div>
                    <Link href="/homeuser/perbaruiprofil">
                        <button className="bg-[#0F3555] text-white px-6 py-2 rounded-lg hover:bg-[#0a253c] transition">
                            Edit Profil
                        </button>
                    </Link>
                </div>
            </div>

            {/* Detail Info */}
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                    <h3 className="text-lg font-bold text-[#0F3555] mb-4 border-b pb-2">Akademik</h3>
                    <div className="space-y-3">
                        <div>
                            <p className="text-sm text-gray-500">Program Studi</p>
                            <p className="font-semibold text-gray-800">{user.academic?.programStudi}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Angkatan</p>
                            <p className="font-semibold text-gray-800">{user.academic?.angkatan}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Deskripsi Diri</p>
                            <p className="text-gray-700 italic">"{user.academic?.deskripsi || "-"}"</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-bold text-[#0F3555] mb-4 border-b pb-2">Pekerjaan</h3>
                    <div className="space-y-3">
                        <div>
                            <p className="text-sm text-gray-500">Perusahaan</p>
                            <p className="font-semibold text-gray-800">{user.job?.company || "-"}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Jabatan</p>
                            <p className="font-semibold text-gray-800">{user.job?.position || "-"}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Lokasi</p>
                            <p className="font-semibold text-gray-800">
                                {user.job?.city ? `${user.job.city}, ${user.job.province}` : "-"}
                            </p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Alamat</p>
                            <p className="text-gray-700">{user.job?.address || "-"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}