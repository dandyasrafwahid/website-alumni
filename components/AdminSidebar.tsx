"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminSidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
        <ul className="space-y-2">
          <li>
            <Link
              href="/admin-dashboard"
              className={`flex items-center p-2 text-base font-medium rounded-lg transition-colors ${
                isActive("/admin-dashboard")
                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                  : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9M9 5l3-3m0 0l3 3m-3-3v12"
                />
              </svg>
              <span className="ml-3">Dashboard</span>
            </Link>
          </li>

          <li>
            <Link
              href="/admin-dashboard/news"
              className={`flex items-center p-2 text-base font-medium rounded-lg transition-colors ${
                isActive("/admin-dashboard/news")
                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                  : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v11l4-4"
                />
              </svg>
              <span className="ml-3">Berita & Event</span>
            </Link>
          </li>

          <li>
            <Link
              href="/admin-dashboard/profile"
              className={`flex items-center p-2 text-base font-medium rounded-lg transition-colors ${
                isActive("/admin-dashboard/profile")
                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                  : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="ml-3">Profil Admin</span>
            </Link>
          </li>

          <li>
            <a
              href="/admin-dashboard/newsletter"
              className={`flex items-center p-2 text-base font-medium rounded-lg transition-colors ${
                pathname.includes("/newsletter")
                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                  : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="ml-3">Newsletter</span>
            </a>
          </li>
        </ul>

        <hr className="my-6 border-gray-200 dark:border-gray-700" />

        <div className="pt-4">
          <a
            href="/"
            className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 19l-7-7 7-7m8 7H4"
              />
            </svg>
            <span className="ml-3">Kembali ke Beranda</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
