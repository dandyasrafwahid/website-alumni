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
    <div className="min-h-screen flex">
      {/* Left Side - Form Reset Password */}
      <div className="w-full lg:w-1/2 bg-black flex flex-col justify-center px-8 py-12 lg:px-16">
        <div className="max-w-md mx-auto w-full">
          {/* Logo & Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Image
                src="/unhas-logo.png"
                alt="Unhas Logo"
                width={60}
                height={60}
                priority
              />
            </div>
            <h1 className="text-4xl font-bold text-red-500 mb-2">
              Portal Alumni
            </h1>
            <p className="text-gray-300 text-base">
              Selamat datang di Portal Alumni Teknik Informatika
            </p>
          </div>

          {!isSubmitted ? (
            <>
              {/* Informasi */}
              <div className="mb-6 text-gray-300 text-sm">
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
                  <label className="block text-gray-300 text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Masukkan email Anda"
                    className="w-full px-4 py-3 bg-white rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300 cursor-pointer">
                  Kirim Link Pengaturan Ulang Kata Sandi
                </button>
              </form>

              {/* Back to Login Link */}
              <div className="mt-8 text-center">
                <Link
                  href="/login"
                  className="text-gray-400 hover:text-gray-300 text-sm transition-colors">
                  ← Kembali ke Login
                </Link>
              </div>
            </>
          ) : (
            /* Success Message */
            <div className="bg-green-500/20 border border-green-500 rounded-lg p-6 text-center">
              <div className="text-green-400 text-5xl mb-4">✓</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Link Berhasil Dikirim!
              </h3>
              <p className="text-gray-300 text-sm">
                Kami telah mengirimkan link pengaturan ulang kata sandi ke email{" "}
                <span className="font-semibold text-white">{email}</span>
              </p>
              <p className="text-gray-400 text-xs mt-4">
                Silakan cek inbox atau folder spam Anda
              </p>
              <Link
                href="/login"
                className="inline-block mt-6 text-blue-400 hover:text-blue-300 font-semibold">
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
            className="object-cover w-full h-full opacity-80"
            priority
          />
        </div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-12 z-10 text-center">
          <h2 className="text-5xl font-bold mb-6 drop-shadow-lg leading-tight">
            <span className="text-red-500">RESET PASSWORD</span>
          </h2>
          <p className="text-xl text-gray-200 font-light max-w-lg">
            Pulihkan akses Anda dengan mudah. Kami siap membantu Anda kembali
            terhubung dengan keluarga besar Teknik Informatika.
          </p>
        </div>
      </div>
    </div>
  );
}
