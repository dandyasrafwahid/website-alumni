"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function HomeUser() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="relative min-h-screen">
        {/* Background image + overlay */}
        <div className="">
          <Image
            src="/DSC09820.JPG"
            alt="bg"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#0f3a4f] opacity-80"></div>
        </div>

        <div className="relative z-10 max-w-5x1mx-auto px-6 lg:px-12 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8">
            {/* Left: Text block */}
            <section className="text-white lg:pt-12">
              <p className="text-lg text-gray-200">
                Selamat datang di Portal Alumni,
              </p>
              <h1 className="text-4xl lg:text-6xl font-extrabold uppercase tracking-wide mt-4 leading-tight">
                ALWAN INDRAWAN
                <br />
                AZIS!   
              </h1>

              <p className="mt-6 text-base lg:text-lg text-gray-200 max-w-xl leading-relaxed">
                Mari terhubung kembali dengan teman sejawat, menjaga hubungan
                dengan alma mater, dan menjalin jaringan yang kuat.
                Bersama-sama, mari kita terus menginspirasi, berbagi
                pengetahuan, dan merayakan prestasi dalam komunitas alumni
              </p>

              <div className="mt-16">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Get in touch,
                </h2>
                <p className="text-base text-gray-200 mt-2">
                  Saling terhubung antar sesama Alumni.
                </p>
                <button className="mt-8 bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg shadow-lg">
                  Cari Alumni
                </button>
              </div>
            </section>

            {/* Right: Profile card */}
            <aside className="flex justify-center lg:justify-end lg:pt-12">
              <div className="w-full max-w-sm bg-white/90 backdrop-blur rounded-2xl shadow-2xl overflow-hidden">
                <div className="p-6 bg-white/70 flex items-center justify-center">
                  <div className="w-44 h-44 bg-slate-100 rounded-lg flex items-center justify-center shadow-inner">
                    <span className="text-6xl font-bold text-indigo-400">
                      AA
                    </span>
                  </div>
                </div>

                <div className="p-6 bg-white/80">
                  <h3 className="text-lg font-semibold text-slate-700">
                    Alwan Indrawan Azis
                  </h3>
                  <p className="text-sm text-slate-400 mt-2 flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-slate-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    Teknik Informatika
                  </p>

                  <div className="mt-6">
                    <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md">
                      Perbarui Profil
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
