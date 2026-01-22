import React from "react";

const TabelAlumni = () => {
  // Definisi kolom agar kode lebih rapi dan mudah diedit nanti
  const columns = [
    "NIM",
    "NAMA",
    "PROGRAM STUDI",
    "FAKULTAS",
    "NOMOR TELEPON",
    "EMAIL",
  ];

  return (
    <div className="w-full">
      {/* Container Luar: 
         - Memberikan border tipis (border, border-gray-200)
         - Membuat sudut membulat (rounded-lg)
         - overflow-hidden penting agar sudut tabel di dalamnya ikut membulat
      */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-xs">
        {/* Wrapper untuk scroll horizontal jika layar terlalu kecil */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            {/* Bagian Header Tabel */}
            <thead className="bg-gray-50">
              {" "}
              {/* Warna latar belakang abu-abu sangat muda */}
              <tr>
                {columns.map((headerText, index) => (
                  <th
                    key={index}
                    scope="col"
                    // Styling Header:
                    // - px-6 py-3: Jarak padding
                    // - text-left: Rata kiri
                    // - text-xs: Ukuran font kecil
                    // - font-medium: Ketebalan huruf sedang
                    // - text-gray-500: Warna teks abu-abu medium
                    // - uppercase: Huruf kapital semua
                    // - tracking-wider: Jarak antar huruf sedikit direnggangkan
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {headerText}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Bagian Body Tabel */}
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Baris "Empty State" (Status Kosong) 
                Ini yang ditampilkan sesuai gambar Anda saat belum ada pencarian.
              */}
              <tr>
                {/* colSpan={6} artinya sel ini menggabungkan 6 kolom sekaligus.
                  py-12 memberikan padding vertikal yang besar agar terlihat lapang.
                */}
                <td colSpan={6} className="px-6 py-12 text-center">
                  <p className="text-gray-400 text-sm">
                    Ketik Nama/NIM untuk memulai pencarian.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TabelAlumni;
