"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

// 1. Definisi Tipe Data User
interface User {
  name: string;
  initials: string;
  // Tambahkan properti lain jika ada (misal: email, nim, dll)
}

export default function Navbar() {
  // State untuk mendeteksi apakah user sedang scroll di area About
  const [isAboutActive, setIsAboutActive] = useState<boolean>(false);

  // State User dengan tipe Union (User atau null)
  const [user, setUser] = useState<User | null>(() => {
    if (typeof window === "undefined") return null;
    try {
      const raw = localStorage.getItem("alumniUser");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  
  // 2. Typing untuk useRef (HTMLDivElement karena merujuk ke div)
  const menuRef = useRef<HTMLDivElement>(null);
  
  const router = useRouter();
  const pathname = usePathname();

  // --- 1. HANDLE CLICK OUTSIDE (MOBILE MENU) ---
  useEffect(() => {
    // Event listener mouse event
    const handleClickOutside = (event: MouseEvent) => {
      // "as Node" digunakan untuk assertion agar TypeScript paham target adalah Node
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // --- 2. SCROLL SPY UNTUK ABOUT ---
  useEffect(() => {
    // Jika pindah ke halaman lain (bukan Home), matikan highlight About
    if (pathname !== "/") {
      setIsAboutActive(false);
      return;
    }

    const handleScroll = () => {
      const aboutSection = document.getElementById("about-section");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        // Logika: Aktif jika bagian About masuk ke area pandang user (offset setengah layar)
        setIsAboutActive(rect.top < window.innerHeight / 2 && rect.bottom > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Cek posisi awal saat mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // --- 3. HELPER UNTUK CEK ACTIVE STATE ---
  const isActive = (path: string): boolean => {
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(path + "/");
  };

  // --- 4. HELPER CLASS UNTUK WARNA ---
  const getItemClass = (isActiveCondition: boolean): string => {
    return `transition-all duration-200 group-hover:scale-110 cursor-pointer bg-none border-none p-0 ${
      isActiveCondition ? "font-extrabold text-yellow-300" : "text-white"
    }`;
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
      }, 500); 
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
              className={getItemClass(pathname === "/" && !isAboutActive)}>
              Home
            </button>
          </li>

          {/* ALUMNI */}
          <li className="relative group px-2">
            <button
              onClick={() => handleNav("/alumni")}
              className={getItemClass(isActive("/alumni"))}>
              Alumni
            </button>
          </li>

          {/* ABOUT */}
          <li className="relative group px-2">
            <button
              onClick={handleAboutClick}
              className={getItemClass(isAboutActive)}>
              About
            </button>
          </li>

          {/* JOBS */}
          <li className="relative group px-2">
            <button
              onClick={() => handleNav("/jobs")}
              className={getItemClass(isActive("/jobs"))}>
              Jobs
            </button>
          </li>

          {/* NEWS AND EVENTS */}
          <li className="relative group px-2">
            <button
              onClick={() => handleNav("/newsandevents")}
              className={getItemClass(isActive("/newsandevents"))}>
              News and Events
            </button>
          </li>

          {/* NEWSLETTER */}
          <li className="relative group px-2">
            <button
              onClick={() => handleNav("/newsletter")}
              className={getItemClass(isActive("/newsletter"))}>
              Newsletter
            </button>
          </li>

          {/* SURVEY */}
          <li className="relative group px-2">
            <button
              onClick={() => handleNav("/survey")}
              className={getItemClass(isActive("/survey"))}>
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