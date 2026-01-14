"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isAboutActive, setIsAboutActive] = useState(false);
  const [user, setUser] = useState(() => {
    if (typeof window === "undefined") return null;
    try {
      const raw = localStorage.getItem("alumniUser");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about-section");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        setIsAboutActive(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function logout() {
    try {
      localStorage.removeItem("alumniUser");
    } catch {
      /* ignore */
    }
    setUser(null);
    setMenuOpen(false);
    router.push("/login");
  }

  return (
    <div className="navbar bg-white w-full px-6 py-3 sticky top-0 left-0 z-50">
      {/* Tombol hamburger hanya tampil di layar kecil */}
      <div className="flex-none lg:hidden">
        <label
          htmlFor="my-drawer-2"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost">
          {/* Icon hamburger (SVG) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>
      </div>

      {/* Bagian kiri navbar: logo dan nama institusi */}
      <div className="navbar-start">
        <div className="flex flex-row items-center gap-x-4">
          <Image src="/unhas-logo.png" alt="Unhas Logo" width={40} height={10} priority />

          <div className="flex flex-col text-black">
            <span className="font-normal text-sm">Universitas Hasanuddin</span>
            <span className="font-bold text-sm">Department of Informatics</span>
          </div>
        </div>
      </div>

      {/* Menu navigasi tengah */}
      <div className="navbar-center">
        <ul className="menu menu-horizontal text-black font-medium text-xl flex items-center gap-4">
          <li className="relative group px-2">
            <a href="#main-content" className="font-extrabold text-[#1E3A8A] transition-transform duration-200 group-hover:scale-110 cursor-pointer">
              Home
            </a>
          </li>

          <li className="relative group px-2">
            <span className="transition-transform duration-200 group-hover:scale-110 cursor-pointer">Alumni</span>
          </li>

          <li className="relative group px-2">
            <a
              href="#about-section"
              className={`transition-transform duration-200 group-hover:scale-110 cursor-pointer ${
                isAboutActive ? "font-extrabold text-[#1E3A8A]" : "text-black"
              }`}>
              About
            </a>
          </li>

          <li className="relative group px-2">
            <span className="transition-transform duration-200 group-hover:scale-110 cursor-pointer">Contact</span>
          </li>

          <li className="relative group px-2">
            <span className="transition-transform duration-200 group-hover:scale-110 cursor-pointer">Survey</span>
          </li>
        </ul>
      </div>

      {/* Bagian kanan navbar: account / login */}
      <div className="navbar-end gap-5">
        {!user && (
          <div className="relative group">
            <a href="/login" aria-label="Login">
              <button className="rounded-lg bg-[#E3E3E3] border border-[#767676] px-3 py-1 text-base text-[#1E1E1E] flex items-center gap-3 transition-transform duration-200 group-hover:scale-105 hover:shadow-md">
                <Image src="/logo login.png" alt="Login logo" width={28} height={28} className="rounded-full" priority />
                <span className="font-medium">Login</span>
              </button>
            </a>
          </div>
        )}

        {user && (
          <div className="relative">
            <button
              onClick={() => setMenuOpen((s) => !s)}
              className="flex items-center gap-3 bg-white border rounded-lg px-3 py-1 shadow-sm">
              <span className="text-sm font-medium text-gray-800">{user.name.split(' ')[0]}</span>
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">{user.initials}</div>
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border">
                <div className="px-4 py-3 text-xs text-gray-400">Kelola Akun</div>
                <ul>
                  <li>
                    <Link href="/profile" className="block px-4 py-3 hover:bg-gray-50">Profil</Link>
                  </li>
                  <li>
                    <button onClick={logout} className="w-full text-left px-4 py-3 hover:bg-gray-50">Keluar</button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
