import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1E3A8A] text-white">
      <div className="w-full max-w-7xl mx-auto px-6 py-16">
        {/* LOGO & DESKRIPSI */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="mb-6">
            <Image
              src="/unhas-logo.png"
              alt="Unhas Logo"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
          <p className="text-base text-gray-200 max-w-2xl leading-relaxed mb-2">
            Jadilah bagian dari komunitas alumni, mari saling terhubung
          </p>
          <p className="text-base text-gray-200 max-w-2xl leading-relaxed">
            dan membangun jaringan yang lebih luas.
          </p>
        </div>

        {/* NAVIGATION MENU */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <Link
            href="/"
            className="text-gray-200 hover:text-yellow-400 transition-colors font-medium">
            Jobs
          </Link>
          <Link
            href="/newsandevents"
            className="text-gray-200 hover:text-yellow-400 transition-colors font-medium">
            News &amp; Events
          </Link>
          <a
            href="#about-section"
            className="text-gray-200 hover:text-yellow-400 transition-colors font-medium">
            About
          </a>
          <Link
            href="/newsletter"
            className="text-gray-200 hover:text-yellow-400 transition-colors font-medium">
            Newsletter
          </Link>
        </div>

        {/* SOCIAL MEDIA ICONS */}
        <div className="flex justify-center gap-6 mb-12">
          {/* Facebook */}
          <a
            href="https://web.facebook.com/share/g/17ofeQgQJV/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/informatika.unhas/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-400 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
            </svg>
          </a>
          {/* YouTube */}
          <a
            href="https://www.youtube.com/@teknikinformatikauniversit6575"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-500 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
          {/* Email */}
          <a
            href="mailto:informatika@unhas.ac.id"
            className="hover:text-yellow-400 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
          {/* WhatsApp */}
          <a
            href="https://wa.me/6281253584528"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-400 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.39 1.209-3.355 2.099-1.562 1.573-2.544 3.707-2.544 5.98 0 1.487.292 2.98.858 4.385L2.05 19.947l4.868-1.434c1.293.761 2.77 1.222 4.35 1.222 5.525 0 10.015-4.486 10.015-10.009 0-2.68-1.065-5.199-3.002-7.094-1.933-1.895-4.533-2.94-7.236-2.94z" />
            </svg>
          </a>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-600 my-8"></div>

        {/* COPYRIGHT */}
        <div className="text-center text-sm text-gray-300">
          <p>@ 2026 - INFORMATIKA UNIVERSITAS HASANUDDIN &amp; AZZEMBLER22</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
