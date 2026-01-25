import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1E3A8A] text-white">
      {/* BAGIAN ATAS: Link Navigasi (Services, Company, Legal) */}
      <div className="w-full max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Kolom 1: Services */}
          <div className="flex flex-col space-y-3">
            <h6 className="font-bold text-yellow-300 text-lg uppercase mb-2">Services</h6>
            <a href="https://unhas.ac.id" target="_blank" rel="noreferrer" className="hover:text-gray-300 hover:underline text-sm">https://unhas.ac.id</a>
            <a href="https://sso.unhas.ac.id" target="_blank" rel="noreferrer" className="hover:text-gray-300 hover:underline text-sm">https://sso.unhas.ac.id</a>
            <a href="https://neosia.unhas.ac.id" target="_blank" rel="noreferrer" className="hover:text-gray-300 hover:underline text-sm">https://neosia.unhas.ac.id</a>
            <a href="https://digilib.unhas.ac.id" target="_blank" rel="noreferrer" className="hover:text-gray-300 hover:underline text-sm">https://digilib.unhas.ac.id</a>
            <a href="https://repository.unhas.ac.id" target="_blank" rel="noreferrer" className="hover:text-gray-300 hover:underline text-sm">https://repository.unhas.ac.id</a>
          </div>

          {/* Kolom 2: Company */}
          <div className="flex flex-col space-y-3">
            <h6 className="font-bold text-yellow-300 text-lg uppercase mb-2">Company</h6>
            <Link href="/about" className="hover:text-gray-300 hover:underline text-sm">About us</Link>
            <Link href="/contact" className="hover:text-gray-300 hover:underline text-sm">Contact</Link>
            <Link href="/jobs" className="hover:text-gray-300 hover:underline text-sm">Jobs</Link>
            <Link href="/press-kit" className="hover:text-gray-300 hover:underline text-sm">Press kit</Link>
          </div>

          {/* Kolom 3: Legal */}
          <div className="flex flex-col space-y-3">
            <h6 className="font-bold text-yellow-300 text-lg uppercase mb-2">Legal</h6>
            <Link href="/terms" className="hover:text-gray-300 hover:underline text-sm">Terms of use</Link>
            <Link href="/privacy" className="hover:text-gray-300 hover:underline text-sm">Privacy policy</Link>
            <Link href="/cookie" className="hover:text-gray-300 hover:underline text-sm">Cookie policy</Link>
          </div>
        </div>
      </div>

      {/* GARIS PEMBATAS */}
      <div className="border-t border-[#2A4A86]"></div>

      {/* BAGIAN BAWAH: Logo & Copyright & Sosmed */}
      <div className="w-full max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Logo & Teks */}
        <div className="flex items-center gap-4">
          <Image
            src="/unhas-logo.png"
            alt="Unhas Logo"
            width={48}
            height={48}
            className="object-contain"
          />
          <div className="text-sm">
            <p className="font-bold uppercase">Departemen Teknik Informatika</p>
            <p className="font-light text-xs opacity-80">AZZAMBLER 22 © {new Date().getFullYear()}</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4">
          {/* Twitter / X */}
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-yellow-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          {/* YouTube */}
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-yellow-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          {/* Facebook */}
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-yellow-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;