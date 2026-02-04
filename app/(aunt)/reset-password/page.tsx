"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulasi pengiriman link reset password
    setIsSubmitted(true);

    // Reset after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
    }, 5000);
  };

  return (
    <div className="min-h-screen flex relative">
      {/* Background Image untuk keseluruhan halaman */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/halaman.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#1E3A8A] opacity-95"></div>
      </div>

      {/* Left Side - Form Reset Password */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 py-12 lg:px-16 relative z-10">
        <div className="max-w-md mx-auto w-full bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
          {/* Logo & Header */}
          <div className="text-center mb-10">
            <div className="flex justify-center mb-4">
              <Image
                src="/unhas-logo.png"
                alt="Unhas Logo"
                width={70}
                height={70}
                priority
                className="drop-shadow-2xl"
              />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Portal Alumni
            </h1>
            <p className="text-gray-200 text-sm">
              Selamat datang di Portal Alumni Teknik Informatika
            </p>
          </div>

          {!isSubmitted ? (
            <>
              {/* Informasi */}
              <div className="mb-6 text-gray-200 text-sm">
                <p>
                  Lupa kata sandi Anda? Tidak masalah. Beri tahu kami alamat
                  Email Anda dan kami akan mengirimkan Email berisi Link
                  pengaturan ulang kata sandi yang memungkinkan Anda memilih
                  kata sandi yang baru.
                </p>
              </div>

              {/* Form Reset Password */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Input */}
                <div>
                  <label className="block text-white font-medium text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Masukkan email Anda"
                    className="w-full px-4 py-3 bg-white/90 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition shadow-sm"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-[#1E3A8A] font-bold rounded-lg transition duration-300 cursor-pointer shadow-lg transform hover:scale-[1.02]">
                  Kirim Link Pengaturan Ulang Kata Sandi
                </button>
              </form>

              {/* Back to Login Link */}
              <div className="mt-6 text-center">
                <Link
                  href="/login"
                  className="text-gray-200 hover:text-yellow-300 text-sm transition-colors font-medium">
                  ← Kembali ke Login
                </Link>
              </div>
            </>
          ) : (
            /* Success Message */
            <div className="bg-green-500/20 border-2 border-green-400 rounded-xl p-6 text-center">
              <div className="text-green-400 text-5xl mb-4">✓</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Link Berhasil Dikirim!
              </h3>
              <p className="text-gray-200 text-sm">
                Kami telah mengirimkan link pengaturan ulang kata sandi ke email{" "}
                <span className="font-semibold text-yellow-300">{email}</span>
              </p>
              <p className="text-gray-300 text-xs mt-4">
                Silakan cek inbox atau folder spam Anda
              </p>
              <Link
                href="/login"
                className="inline-block mt-6 text-yellow-300 hover:text-yellow-200 font-semibold underline">
                Kembali ke Login
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Right Side - Image & Gradient */}
      <div className="hidden lg:flex w-1/2 relative h-screen sticky top-0 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/kampus03.png"
            alt="kampus03"
            width={1200}
            height={800}
            className="object-cover w-full h-full opacity-40"
            priority
          />
        </div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/80 via-blue-900/60 to-[#1E3A8A]/80"></div>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-12 z-10 text-center">
          <h2 className="text-5xl font-bold mb-6 drop-shadow-2xl leading-tight">
            <span className="text-yellow-300">RESET PASSWORD</span>
          </h2>
          <p className="text-xl text-gray-100 font-light max-w-lg drop-shadow-lg">
            Pulihkan akses Anda dengan mudah. Kami siap membantu Anda kembali
            terhubung dengan keluarga besar Teknik Informatika.
          </p>
        </div>
      </div>
    </div>
  );
}
