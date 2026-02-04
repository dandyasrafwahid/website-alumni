"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AlumniCard from "@/components/AlumniCard";
import { alumniData, Alumni } from "@/lib/alumniData";
import {
  Search,
  Filter,
  X,
  Mail,
  Briefcase,
  MapPin,
  Calendar,
} from "lucide-react";

export default function AlumniPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterAngkatan, setFilterAngkatan] = useState<number | "all">("all");
  const [filterPerusahaan, setFilterPerusahaan] = useState<string>("all");
  const [selectedAlumni, setSelectedAlumni] = useState<Alumni | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(
    new Set(),
  );
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Ambil list angkatan unik
  const tahunAngkatanList = useMemo(() => {
    return Array.from(new Set(alumniData.map((a) => a.angkatan))).sort(
      (a, b) => b - a,
    );
  }, []);

  // Ambil list perusahaan unik
  const perusahaanList = useMemo(() => {
    return Array.from(new Set(alumniData.map((a) => a.perusahaan))).sort();
  }, []);

  // Filter data alumni
  const filteredAlumni = useMemo(() => {
    return alumniData.filter((alumni) => {
      const matchSearch =
        alumni.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alumni.pekerjaan.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alumni.perusahaan.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alumni.email.toLowerCase().includes(searchTerm.toLowerCase());

      const matchAngkatan =
        filterAngkatan === "all" || alumni.angkatan === filterAngkatan;

      const matchPerusahaan =
        filterPerusahaan === "all" || alumni.perusahaan === filterPerusahaan;

      return matchSearch && matchAngkatan && matchPerusahaan;
    });
  }, [searchTerm, filterAngkatan, filterPerusahaan]);

  // --- FADE-IN/REVEAL EFFECT DENGAN INTERSECTION OBSERVER ---
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const observeElement = (id: string, ref: React.RefObject<HTMLElement>) => {
    if (ref.current && observerRef.current) {
      ref.current.id = id;
      observerRef.current.observe(ref.current);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .fade-in {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .fade-in-scale {
          animation: fadeInScale 0.8s ease-out forwards;
          opacity: 0;
        }

        .fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
      <Navbar />

      {/* --- HERO SECTION --- */}
      <div className="relative bg-[#1E3A8A] pt-32 pb-24 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Image
            src="/halaman.png"
            alt="bg-texture"
            fill
            className="object-cover grayscale"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center lg:text-left">
          <h1
            className={`text-4xl md:text-5xl font-bold text-white mb-4 fade-in-left ${visibleElements.has("hero-title") ? "fade-in-left" : ""}`}>
            Direktori Alumni
          </h1>
          <p
            className={`text-blue-100 text-lg md:text-xl max-w-3xl leading-relaxed fade-in-left animation-delay-200 ${visibleElements.has("hero-title") ? "fade-in-left" : ""}`}>
            Terhubung dengan lebih dari {alumniData.length} alumni Informatika
            Hasanuddin yang telah berkarya di berbagai bidang.
          </p>
        </div>
        <div
          ref={(el) => {
            if (el) {
              el.id = "hero-title";
              observeElement("hero-title", { current: el as HTMLElement });
            }
          }}
          className="absolute"
        />

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

      <div className="flex-grow bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header Section - Hidden karena sudah ada di Hero */}
          <div className="text-center mb-10 hidden">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Direktori Alumni
            </h1>
            <p className="text-lg text-gray-600">
              Terhubung dengan lebih dari {alumniData.length} alumni Informatika
            </p>
          </div>

          {/* Search & Filter Section */}
          <div
            className={`bg-white rounded-lg shadow-md p-6 mb-8 fade-in ${visibleElements.has("search-filter") ? "fade-in" : ""}`}
            ref={(el) => {
              if (el) {
                el.id = "search-filter";
                observeElement("search-filter", { current: el as HTMLElement });
              }
            }}>
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-600" />
                <input
                  type="text"
                  placeholder="Cari nama alumni, pekerjaan, atau perusahaan..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 font-medium placeholder-gray-500"
                />
              </div>
            </div>

            {/* Filter Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Filter Angkatan */}
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">
                  <Filter className="w-4 h-4 inline mr-1" />
                  Filter Angkatan
                </label>
                <select
                  value={filterAngkatan}
                  onChange={(e) =>
                    setFilterAngkatan(
                      e.target.value === "all"
                        ? "all"
                        : parseInt(e.target.value),
                    )
                  }
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 font-medium bg-white cursor-pointer hover:border-blue-400">
                  <option value="all">Semua Angkatan</option>
                  {tahunAngkatanList.map((tahun) => (
                    <option key={tahun} value={tahun}>
                      Angkatan {tahun}
                    </option>
                  ))}
                </select>
              </div>

              {/* Filter Perusahaan */}
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">
                  <Filter className="w-4 h-4 inline mr-1" />
                  Filter Perusahaan
                </label>
                <select
                  value={filterPerusahaan}
                  onChange={(e) => setFilterPerusahaan(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 font-medium bg-white cursor-pointer hover:border-blue-400">
                  <option value="all">Semua Perusahaan</option>
                  {perusahaanList.map((perusahaan) => (
                    <option key={perusahaan} value={perusahaan}>
                      {perusahaan}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-sm text-gray-600">
              Menampilkan {filteredAlumni.length} dari {alumniData.length}{" "}
              alumni
            </div>
          </div>

          {/* Alumni Grid */}
          {filteredAlumni.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAlumni.map((alumni, index) => (
                <div
                  key={alumni.id}
                  onClick={() => {
                    setSelectedAlumni(alumni);
                    setShowDetailModal(true);
                  }}
                  className={`cursor-pointer fade-in-scale ${visibleElements.has(`alumni-${alumni.id}`) ? "fade-in-scale" : ""}`}
                  style={{ animationDelay: `${(index % 3) * 100}ms` }}
                  ref={(el) => {
                    if (el) {
                      el.id = `alumni-${alumni.id}`;
                      observeElement(`alumni-${alumni.id}`, {
                        current: el as HTMLElement,
                      });
                    }
                  }}>
                  <AlumniCard {...alumni} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-2">
                <Search className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-1">
                Tidak ada alumni ditemukan
              </h3>
              <p className="text-gray-600">Coba ubah filter pencarian Anda</p>
            </div>
          )}

          {/* Detail Modal */}
          {showDetailModal && selectedAlumni && (
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
              onClick={() => {
                setShowDetailModal(false);
                setSelectedAlumni(null);
              }}>
              <div
                className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full my-8 animate-fadeIn"
                onClick={(event) => event.stopPropagation()}>
                {/* Header */}
                <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-8 flex justify-between items-start rounded-t-2xl">
                  <div className="text-white">
                    <h2 className="text-3xl font-bold mb-2">
                      {selectedAlumni.nama}
                    </h2>
                    <p className="text-blue-100 text-lg font-medium">
                      {selectedAlumni.pekerjaan}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setShowDetailModal(false);
                      setSelectedAlumni(null);
                    }}
                    className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition-colors">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  {/* Profile Section */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 border-b border-gray-200">
                    {/* Avatar / Photo */}
                    <div className="md:col-span-1 flex justify-center">
                      {selectedAlumni.foto ? (
                        <div className="relative w-40 h-40 rounded-lg overflow-hidden shadow-lg">
                          <Image
                            src={selectedAlumni.foto}
                            alt={selectedAlumni.nama}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-40 h-40 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg">
                          <div className="text-white text-6xl font-bold">
                            {selectedAlumni.nama.charAt(0)}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Info Grid */}
                    <div className="md:col-span-2 space-y-4">
                      {/* Email */}
                      <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-gray-600">
                            Email
                          </p>
                          <a
                            href={`mailto:${selectedAlumni.email}`}
                            className="text-blue-600 hover:underline font-medium">
                            {selectedAlumni.email}
                          </a>
                        </div>
                      </div>

                      {/* Perusahaan */}
                      <div className="flex items-start gap-3">
                        <Briefcase className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-gray-600">
                            Perusahaan
                          </p>
                          <p className="text-gray-900 font-medium">
                            {selectedAlumni.perusahaan}
                          </p>
                        </div>
                      </div>

                      {/* Lokasi */}
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-gray-600">
                            Lokasi
                          </p>
                          <p className="text-gray-900 font-medium">
                            {selectedAlumni.lokasi}
                          </p>
                        </div>
                      </div>

                      {/* Angkatan */}
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-gray-600">
                            Angkatan
                          </p>
                          <p className="text-gray-900 font-medium">
                            {selectedAlumni.angkatan}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Summary Info */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600 font-medium">
                        Jabatan
                      </p>
                      <p className="text-lg font-bold text-gray-900">
                        {selectedAlumni.pekerjaan}
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600 font-medium">
                        Tahun Masuk
                      </p>
                      <p className="text-lg font-bold text-gray-900">
                        {selectedAlumni.angkatan}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-6 border-t border-gray-200">
                    <a
                      href={`mailto:${selectedAlumni.email}`}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors text-center">
                      Hubungi via Email
                    </a>
                    <button
                      onClick={() => {
                        setShowDetailModal(false);
                        setSelectedAlumni(null);
                      }}
                      className="flex-1 border-2 border-gray-300 hover:border-gray-400 text-gray-800 font-bold py-3 rounded-lg transition-colors">
                      Tutup
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
