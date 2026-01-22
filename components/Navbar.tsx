"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  // State untuk mendeteksi apakah user sedang scroll di area About
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
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  // --- 1. HANDLE CLICK OUTSIDE (MOBILE MENU) ---
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // --- 2. SCROLL SPY UNTUK ABOUT ---
  useEffect(() => {
    // Jika pindah ke halaman lain (misal /jobs), matikan highlight About
    if (pathname !== "/") {
      setIsAboutActive(false);
      return;
    }

    const handleScroll = () => {
      const aboutSection = document.getElementById("about-section");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        // Aktif jika bagian atas About masuk ke area pandang
        setIsAboutActive(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Cek posisi awal

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // --- 3. HELPER UNTUK CEK ACTIVE STATE ---
  // Fungsi ini menentukan apakah tombol harus berwarna kuning
  const isActive = (path: string) => {
    // Jika path persis sama, ATAU jika kita di sub-halaman (misal /news/detail)
    return pathname === path || pathname.startsWith(path + "/");
  };

  // --- NAVIGASI ---
  function logout() {
    try { localStorage.removeItem("alumniUser"); } catch {}
    setUser(null);
    setMenuOpen(false);
    router.push("/");
  }

  function handleNav(path: string) {
    router.push(path);
    setMenuOpen(false);
  }

  function handleHomeClick() {
    if (user) {
      router.push("/homeuser");
    } else {
      router.push("/");
      if (pathname === "/") {
         window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
    setMenuOpen(false);
  }

  function handleAboutClick() {
    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        const section = document.getElementById("about-section");
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      const section = document.getElementById("about-section");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  }

  return (
    <div className="navbar bg-[#1E3A8A] w-full px-6 py-3 fixed top-0 left-0 right-0 z-50 shadow-md">
      
      {/* Mobile Hamburger */}
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-6 w-6 stroke-white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>
      </div>

      {/* Logo */}
      <div className="navbar-start">
        <div className="flex flex-row items-center gap-x-4">
          <Image src="/unhas-logo.png" alt="Unhas Logo" width={40} height={10} priority />
          <div className="flex flex-col text-white">
            <span className="font-normal text-sm">Universitas Hasanuddin</span>
            <span className="font-bold text-sm">Department of Informatics</span>
          </div>
        </div>
      </div>

      {/* MENU DESKTOP */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-white font-medium text-xl flex items-center gap-4">
          
          {/* HOME */}
          <li className="relative group px-2">
            <button
              onClick={handleHomeClick}
              className={`transition-all duration-200 group-hover:scale-110 cursor-pointer bg-none border-none p-0 ${
                // Kuning jika: URL adalah "/" DAN About TIDAK aktif
                pathname === "/" && !isAboutActive ? "font-extrabold text-yellow-300" : "text-white"
              }`}>
              Home
            </button>
          </li>

          {/* ALUMNI */}
          <li className="relative group px-2">
            <button
              onClick={() => handleNav("/alumni")}
              className={`transition-all duration-200 group-hover:scale-110 cursor-pointer bg-none border-none p-0 ${
                isActive("/alumni") ? "font-extrabold text-yellow-300" : "text-white"
              }`}>
              Alumni
            </button>
          </li>

          {/* ABOUT */}
          <li className="relative group px-2">
            <button
              onClick={handleAboutClick}
              className={`transition-all duration-200 group-hover:scale-110 cursor-pointer bg-none border-none p-0 ${
                // Kuning jika: Scroll Spy mendeteksi area About
                isAboutActive ? "font-extrabold text-yellow-300" : "text-white"
              }`}>
              About
            </button>
          </li>

          {/* JOBS */}
          <li className="relative group px-2">
            <button
              onClick={() => handleNav("/jobs")}
              className={`transition-all duration-200 group-hover:scale-110 cursor-pointer bg-none border-none p-0 ${
                isActive("/jobs") ? "font-extrabold text-yellow-300" : "text-white"
              }`}>
              jobs
            </button>
          </li>

          {/* NEWS AND EVENTS */}
          <li className="relative group px-2">
            <button
              onClick={() => handleNav("/newsandevents")}
              className={`transition-all duration-200 group-hover:scale-110 cursor-pointer bg-none border-none p-0 ${
                isActive("/news") ? "font-extrabold text-yellow-300" : "text-white"
              }`}>
              News and Events
            </button>
          </li>

          {/* NEWSLETTER */}
          <li className="relative group px-2">
            <button
              onClick={() => handleNav("/newsletter")}
              className={`transition-all duration-200 group-hover:scale-110 cursor-pointer bg-none border-none p-0 ${
                isActive("/newsletter") ? "font-extrabold text-yellow-300" : "text-white"
              }`}>
              Newsletter
            </button>
          </li>

          {/* SURVEY */}
          <li className="relative group px-2">
            <button
              onClick={() => handleNav("/survey")}
              className={`transition-all duration-200 group-hover:scale-110 cursor-pointer bg-none border-none p-0 ${
                isActive("/survey") ? "font-extrabold text-yellow-300" : "text-white"
              }`}>
              Survey
            </button>
          </li>

        </ul>
      </div>

      {/* Bagian Kanan (User/Login) */}
      <div className="navbar-end gap-5">
        {!user && (
          <div className="relative group">
            <Link href="/login" aria-label="Login">
              <button className="rounded-lg bg-[#E3E3E3] border border-[#767676] px-3 py-1 text-base text-[#1E1E1E] flex items-center gap-3 transition-transform duration-200 group-hover:scale-105 hover:shadow-md">
                <Image src="/logo login.png" alt="Login logo" width={28} height={28} className="rounded-full" priority />
                <span className="font-medium">Login</span>
              </button>
            </Link>
          </div>
        )}

        {user && (
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setMenuOpen((s) => !s)}
              className="flex items-center gap-3 bg-white border rounded-lg px-3 py-1 shadow-sm">
              <span className="text-sm font-medium text-gray-800">{user.name.split(" ")[0]}</span>
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">
                {user.initials}
              </div>
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border">
                <div className="px-4 py-3 text-xs text-gray-400">Kelola Akun</div>
                <ul>
                  <li>
                    <Link href="/profile" className="block px-4 py-3 hover:bg-gray-50 text-black">
                      Profil
                    </Link>
                  </li>
                  <li>
                    <button onClick={logout} className="w-full text-left px-4 py-3 hover:bg-gray-50 text-black">
                      Keluar
                    </button>
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