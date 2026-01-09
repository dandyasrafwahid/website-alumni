"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import LihatDaftarAlumniIcon from "@/components/icons/LihatDaftarAlumniIcon";
import TentangAlumniIcon from "@/components/icons/TentangAlumniIcon";

export default function Navbar() {
  const [isAboutActive, setIsAboutActive] = useState(false);

  useEffect(() => {
    // Check if we're on the about section or about page
    const handleScroll = () => {
      const aboutSection = document.getElementById("about-section");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        // Jika about section visible di viewport, set active
        setIsAboutActive(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };

    // Check scroll position
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          {/* Logo universitas — menggunakan Next.js Image untuk optimisasi */}
          <Image
            src="/unhas-logo.png"
            alt="Unhas Logo"
            width={40}
            height={10}
            priority
          />

          {/* Teks identitas institusi */}
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
            <a
              href="#main-content"
              className="font-extrabold text-[#1E3A8A] transition-transform duration-200 group-hover:scale-110 cursor-pointer">
              Home
            </a>
            <div className="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max rounded-md bg-white text-black text-sm px-3 py-1 shadow-lg opacity-0 scale-95 transform transition-all duration-200 group-hover:opacity-100 group-hover:scale-100">
              Menu Home
            </div>
          </li>

          <li className="relative group px-2">
            <span className="transition-transform duration-200 group-hover:scale-110 cursor-pointer">
              Alumni
            </span>
            <div className="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max rounded-md bg-white text-black text-sm px-3 py-1 shadow-lg opacity-0 scale-95 transform transition-all duration-200 group-hover:opacity-100 group-hover:scale-100">
              Daftar Alumni & Profil
            </div>
          </li>

          <li className="relative group px-2">
            <a
              href="#about-section"
              className={`transition-transform duration-200 group-hover:scale-110 cursor-pointer ${
                isAboutActive ? "font-extrabold text-[#1E3A8A]" : "text-black"
              }`}>
              About
            </a>
            <div className="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max rounded-md bg-white text-black text-sm px-3 py-1 shadow-lg opacity-0 scale-95 transform transition-all duration-200 group-hover:opacity-100 group-hover:scale-100">
              Tentang kami
            </div>
          </li>

          <li className="relative group px-2">
            <span className="transition-transform duration-200 group-hover:scale-110 cursor-pointer">
              Contact
            </span>
            <div className="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max rounded-md bg-white text-black text-sm px-3 py-1 shadow-lg opacity-0 scale-95 transform transition-all duration-200 group-hover:opacity-100 group-hover:scale-100">
              Hubungi kami
            </div>
          </li>

          <li className="relative group px-2">
            <span className="transition-transform duration-200 group-hover:scale-110 cursor-pointer">
              Survey
            </span>
            <div className="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max rounded-md bg-white text-black text-sm px-3 py-1 shadow-lg opacity-0 scale-95 transform transition-all duration-200 group-hover:opacity-100 group-hover:scale-100">
              Ikuti Survey
            </div>
          </li>
        </ul>
      </div>

      {/* Bagian kanan navbar: Tombol Login */}
      <div className="navbar-end gap-5">
        <div className="relative group">
          <a href="/login" aria-label="Login">
            <button className="rounded-lg bg-[#E3E3E3] border border-[#767676] px-3 py-1 text-base text-[#1E1E1E] flex items-center gap-3 transition-transform duration-200 group-hover:scale-105 hover:shadow-md">
              <Image
                src="/logo login.png"
                alt="Login logo"
                width={28}
                height={28}
                className="rounded-full"
                priority
              />
              <span className="font-medium">Login</span>
            </button>
          </a>

          <div className="pointer-events-none absolute top-full right-0 mt-2 w-max rounded-md bg-white text-black text-sm px-3 py-1 shadow-lg opacity-0 scale-95 transform transition-all duration-200 group-hover:opacity-100 group-hover:scale-100">
            Masuk ke akun
          </div>
        </div>
      </div>
    </div>
  );
}
