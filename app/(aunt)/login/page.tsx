"use client";

// Next.js Image component untuk optimisasi gambar
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link"; // 1. IMPORT LINK DISINI
import PasswordToggle from "@/components/PasswordToggle";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      console.log("Login successful");
      router.push("/homeuser");
    } else {
      console.error("Login failed:", data);
      alert(data.error || "Login failed");
    }
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

      {/* Left Side - Form Login */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 py-12 lg:px-16 relative z-10">
        <div className="max-w-md mx-auto w-full bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
          {/* Logo & Header */}
          <div className="text-center mb-8">
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
            <p className="elegant-text text-gray-200 text-sm">
              Selamat datang di Portal Alumni Teknik Informatika
            </p>
          </div>

          {/* Form Login */}
          <form onSubmit={handleLogin} className="space-y-5">
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
              <p className="text-gray-300 text-xs mt-1.5">
                Gunakan email admin@alumni.id untuk akses admin
              </p>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-white font-medium text-sm mb-2">
                Password
              </label>
              <PasswordToggle
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan password"
                className="focus:ring-yellow-400"
                required={true}
              />
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 text-yellow-500 focus:ring-2 focus:ring-yellow-400"
              />
              <label
                htmlFor="remember"
                className="ml-2 text-white text-sm cursor-pointer"
              >
                Ingat saya
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-[#1E3A8A] font-bold rounded-lg transition duration-300 cursor-pointer shadow-lg transform hover:scale-[1.02]"
            >
              Masuk
            </button>
          </form>

          {/* Additional Links */}
          <div className="mt-6 text-center space-y-2">
            <p className="text-gray-200 text-sm">
              Lupa kata sandi Anda?{" "}
              <Link
                href="/reset-password"
                className="text-yellow-300 hover:text-yellow-200 font-semibold underline"
              >
                Reset Password
              </Link>
            </p>
            <p className="text-gray-200 text-sm">
              Tidak punya akun?{" "}
              <Link
                href="/register"
                className="text-yellow-300 hover:text-yellow-200 font-semibold underline"
              >
                Daftar
              </Link>
            </p>
          </div>
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
            SELAMAT DATANG
            <br />
            <span className="text-yellow-300">KANDA</span>
          </h2>
          <p className="text-xl text-gray-100 font-light max-w-lg drop-shadow-lg">
            Portal Alumni Teknik Informatika Universitas Hasanuddin untuk
            mempererat silaturahmi dan membangun koneksi profesional.
          </p>
        </div>
      </div>
    </div>
  );
}
