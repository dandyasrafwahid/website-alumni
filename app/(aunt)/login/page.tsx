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

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Get existing user data from localStorage if available
    let existingUser: any = {};
    try {
      const storedData = localStorage.getItem("alumniUser");
      if (storedData) {
        existingUser = JSON.parse(storedData);
      }
    } catch {
      // ignore
    }

    // Determine account type based on email
    const accountType =
      email.trim().toLowerCase() === "admin@alumni.id" ? "admin" : "user";

    // Save user info to localStorage with account type
    const name = email.trim() || "Alumni User";
    const initials = name
      .split(" ")
      .map((n) => n[0]?.toUpperCase() || "")
      .slice(0, 2)
      .join("");

    try {
      localStorage.setItem(
        "alumniUser",
        JSON.stringify({
          name: name,
          email: email,
          initials: initials,
          accountType: accountType,
          nip: accountType === "admin" ? existingUser.nip || "" : "",
        }),
      );
    } catch {
      // ignore storage errors
    }

    // Redirect berdasarkan account type
    if (accountType === "admin") {
      router.push("/homeuser");
    } else {
      router.push("/homeuser");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form Login */}
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
                className="drop-shadow-lg"
              />
            </div>
            <h1 className="text-4xl font-bold text-red-500 mb-2">
              Portal Alumni
            </h1>
            <p className="elegant-text text-gray-300 text-base">
              Selamat datang di Portal Alumni Teknik Informatika
            </p>
          </div>

          {/* Form Login */}
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Input */}
            <div>
              <label className="block text-gray-300 text-sm mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan email Anda"
                className="w-full px-4 py-3 bg-white rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
              />
              <p className="text-gray-500 text-xs mt-2">
                Gunakan email admin@alumni.id untuk akses admin
              </p>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-gray-300 text-sm mb-2">
                Password
              </label>
              <PasswordToggle
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="focus:ring-blue-500"
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
                className="w-4 h-4 rounded border-gray-400 text-blue-600 focus:ring-2 focus:ring-blue-500"
              />
              <label
                htmlFor="remember"
                className="ml-2 text-gray-400 text-sm cursor-pointer">
                Ingat saya
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300 cursor-pointer">
              Masuk
            </button>
          </form>

          {/* Additional Links */}
          <div className="mt-8 text-center space-y-2">
            <p className="text-gray-400 text-sm">
              Lupa kata sandi Anda?{" "}
              <Link
                href="/reset-password"
                className="text-blue-400 hover:text-blue-300 font-semibold">
                Reset Password
              </Link>
            </p>
            <p className="text-gray-400 text-sm">
              Tidak punya akun? {/* 2. MENGGUNAKAN LINK UNTUK PINDAH HALAMAN */}
              <Link
                href="/register"
                className="text-blue-400 hover:text-blue-300 font-semibold">
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
            className="object-cover w-full h-full opacity-80"
            priority
          />
        </div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-12 z-10 text-center">
          <h2 className="text-5xl font-bold mb-6 drop-shadow-lg leading-tight">
            SELAMAT DATANG
            <br />
            <span className="text-red-500">KANDA</span>
          </h2>
          <p className="text-xl text-gray-200 font-light max-w-lg">
            Portal Alumni Teknik Informatika Universitas Hasanuddin untuk
            mempererat silaturahmi dan membangun koneksi profesional.
          </p>
        </div>
      </div>
    </div>
  );
}
