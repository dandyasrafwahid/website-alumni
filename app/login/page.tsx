"use client";

// Next.js Image component untuk optimisasi gambar
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [nim, setNim] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nim, password }),
        credentials: "include",
      });

      const data = await res.json();

      if (res.ok) {
        // console.log("Login attempt:", { nim, password, rememberMe });
        // localStorage.setItem("userToken", data.token);
        router.push("/dashboard");
      } else {
        setError(data.message || "Login Gagal");
      }
    } catch (err) {
      setError(error);
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
              />
            </div>
            <h1 className="text-4xl font-bold text-red-500 mb-2">
              Portal Alumni
            </h1>
            <p className="text-gray-400 text-sm">
              Selamat datang di Portal Alumni Teknik Informatika
            </p>
          </div>

          {/* Form Login */}
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Input */}
            <div>
              <label className="block text-gray-300 text-sm mb-2">NIM</label>
              <input
                type="text"
                value={nim}
                onChange={(e) => setNim(e.target.value)}
                placeholder="Enter NIM"
                className="w-full px-4 py-3 bg-white rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-gray-300 text-sm mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 bg-white rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
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
                className="ml-2 text-gray-400 text-sm cursor-pointer"
              >
                Ingat saya
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300 cursor-pointer"
            >
              Masuk
            </button>
          </form>

          {/* Additional Links */}
          <div className="mt-8 text-center space-y-2">
            <p className="text-gray-400 text-sm">
              Lupa kata sandi Anda?{" "}
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 font-semibold"
              >
                Reset Password
              </a>
            </p>
            <p className="text-gray-400 text-sm">
              Tidak punya akun?{" "}
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 font-semibold"
              >
                Daftar
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Image & Gradient */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden">
        {/* Decorative Shapes */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/tengkorak.jpeg"
            alt="Tengkorak"
            width={1200}
            height={800}
            className="object-cover w-full h-full opacity-80"
            priority
          />
        </div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-linear-to-t opacity-70"></div>

        {/* Navigation Arrows */}
        <button className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-3xl hover:bg-black/20 p-3 rounded-full transition">
          ❮
        </button>
        <button className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-3xl hover:bg-black/20 p-3 rounded-full transition">
          ❯
        </button>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-4">
              Bergabunglah Bersama Kami
            </h2>
            <p className="text-xl opacity-90">
              Alumni Teknik Informatika Universitas Hasanuddin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
