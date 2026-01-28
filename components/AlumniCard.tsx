"use client";

import React from "react";
import { Mail, MapPin, Briefcase, User } from "lucide-react";

interface AlumniCardProps {
  id: string;
  nama: string;
  angkatan: number;
  pekerjaan: string;
  perusahaan: string;
  lokasi: string;
  email: string;
  foto?: string;
}

export default function AlumniCard({
  nama,
  angkatan,
  pekerjaan,
  perusahaan,
  lokasi,
  email,
  foto,
}: AlumniCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Foto Alumni */}
      <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center overflow-hidden">
        {foto ? (
          <img src={foto} alt={nama} className="w-full h-full object-cover" />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-blue-500">
            <User className="w-20 h-20 text-white" />
          </div>
        )}
      </div>

      {/* Konten Kartu */}
      <div className="p-5 space-y-3">
        {/* Nama Alumni */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 truncate">
            {nama}
          </h3>
          <p className="text-sm text-blue-600 font-medium">
            Angkatan {angkatan}
          </p>
        </div>

        {/* Informasi Pekerjaan */}
        <div className="space-y-2 border-t pt-3">
          <div className="flex items-start gap-2">
            <Briefcase className="w-4 h-4 text-gray-600 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <p className="text-xs text-gray-500">Posisi</p>
              <p className="text-sm text-gray-800 font-medium truncate">
                {pekerjaan}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Briefcase className="w-4 h-4 text-gray-600 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <p className="text-xs text-gray-500">Perusahaan</p>
              <p className="text-sm text-gray-800 font-medium truncate">
                {perusahaan}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-gray-600 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <p className="text-xs text-gray-500">Lokasi</p>
              <p className="text-sm text-gray-800 font-medium truncate">
                {lokasi}
              </p>
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="border-t pt-3">
          <div className="flex items-start gap-2">
            <Mail className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
            <a
              href={`mailto:${email}`}
              className="text-sm text-blue-600 hover:text-blue-800 truncate">
              {email}
            </a>
          </div>
        </div>

        {/* Tombol */}
        <div className="flex gap-2 pt-2">
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded text-sm font-medium transition-colors">
            Lihat Profil
          </button>
          <button className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 py-2 px-3 rounded text-sm font-medium transition-colors">
            Kontak
          </button>
        </div>
      </div>
    </div>
  );
}
