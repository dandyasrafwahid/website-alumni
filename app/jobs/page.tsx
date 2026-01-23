"use client";

import { useState } from "react";
import Image from "next/image"; // Jangan lupa import ini
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface JobPosting {
  id: number;
  title: string;
  company: string;
  description: string;
  image: string;
  startDate: string;
  endDate: string;
  location: string;
  jobType: string;
  link: string;
}

// Sample data
const jobPostings: JobPosting[] = [
  {
    id: 1,
    title: "JOB VACANCY AND OPPORTUNITIES",
    company: "OPEN RECRUITMENT - ODP REGIONAL BUSINESS BANK MANDIRI",
    description: "Bank Mandiri...",
    image: "/images/bank-mandiri.jpg",
    startDate: "18",
    endDate: "31 Jan 2026",
    location: "tergantung lokasi",
    jobType: "Full Time",
    link: "#",
  },
  {
    id: 2,
    title: "PENGADAAN PPPK",
    company: "Halo Alumni Universitas Hasanuddin Direktorat",
    description: "Hubungan Alumni ingin berbagi info terkait Sele...",
    image: "/images/pppk.jpg",
    startDate: "01",
    endDate: "31 Jan 2026",
    location: "tergantung lokasi",
    jobType: "Full Time",
    link: "#",
  },
  {
    id: 3,
    title: "JOB VACANCY AND OPPORTUNITIES",
    company:
      "Untuk teman-teman Mahasiswa & Fresh Graduate Universitas Hasanuddin!Universitas...",
    description: "",
    image: "/images/job-vacancy-3.jpg",
    startDate: "16",
    endDate: "01 Des 2025",
    location: "tergantung lokasi",
    jobType: "Full Time",
    link: "#",
  },
  {
    id: 4,
    title:
      "HOME COMING ALUMNI 2025 FROM CAMPUS TO CAREER: NAVIGATING CHALLENGES AND SEIZING OPPORTUNITIES AFTER UNHAS",
    company:
      "&nbsp;Home Coming Alumni 2025From Campus to Career: Navigating Challenges and Seizing...",
    description: "",
    image: "/images/home-coming.jpg",
    startDate: "06",
    endDate: "07 Nov 2025",
    location: "Zoom Meeting",
    jobType: "Full Time",
    link: "#",
  },
];

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobPostings);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = jobPostings.filter(
      (job) =>
        job.title.toLowerCase().includes(term) ||
        job.company.toLowerCase().includes(term)
    );
    setFilteredJobs(filtered);
  };

  return (
    <>
      <div className="drawer">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col bg-white min-h-screen">
          <Navbar />

          {/* --- HERO SECTION (Updated Style) --- */}
          <div className="relative bg-[#1E3A8A] pt-32 pb-24 overflow-hidden">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <Image
                src="/DSC09820.JPG"
                alt="bg-texture"
                fill
                className="object-cover grayscale"
                priority
              />
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Job Vacancy
              </h1>
              <p className="text-blue-100 text-lg md:text-xl max-w-3xl leading-relaxed mb-6">
                Temukan info terkini tentang lowongan pekerjaan di portal alumni.
              </p>
              
              {/* Link CDC UNHAS (Disesuaikan dengan style baru) */}
              <p className="text-blue-200 text-base md:text-lg">
                Jelajahi peluang kerja lainnya di{" "}
                <span className="bg-white/10 hover:bg-white/20 border border-white/20 px-3 py-1 rounded text-white font-semibold transition-colors cursor-pointer backdrop-blur-sm">
                  CDC UNHAS
                </span>
              </p>
            </div>

            {/* Wave SVG Divider at Bottom (Updated) */}
            <div className="absolute bottom-0 left-0 w-full leading-none">
              <svg
                className="w-full h-12 md:h-24 text-gray-50" // text-gray-50 agar menyatu dengan background konten bawah
                viewBox="0 0 1440 320"
                fill="currentColor"
                preserveAspectRatio="none"
              >
                <path
                  fillOpacity="1"
                  d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,202.7C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                ></path>
              </svg>
            </div>
          </div>

          {/* --- Main Content (Search & Grid) --- */}
          <div className="bg-gray-50"> {/* Added bg-gray-50 to match wave color */}
            <div className="max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-16 py-12">
              {/* Search Bar */}
              <div className="mb-12">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Ketik Nama..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="w-full px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 shadow-sm"
                  />
                  <svg
                    className="absolute right-4 top-4 w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>

              {/* Job Cards Grid */}
              {filteredJobs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-16">
                  {filteredJobs.map((job) => (
                    <a
                      key={job.id}
                      href={job.link}
                      className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-300"
                    >
                      <div className="flex flex-col h-full">
                        {/* Image Container */}
                        <div className="relative w-full h-40 bg-gray-100 flex items-center justify-center overflow-hidden">
                          {/* Placeholder Image Logic (bisa diganti <Image> asli jika data image valid) */}
                          <div className="w-full h-full relative bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center">
                            <svg
                              className="w-16 h-16 text-gray-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                            </svg>
                          </div>
                        </div>

                        {/* Content Container */}
                        <div className="flex-1 p-6 flex flex-col">
                          {/* Red decoration line */}
                          <div className="w-12 h-1 bg-red-600 rounded-full mb-4"></div>

                          {/* Title */}
                          <h3 className="text-lg font-bold text-blue-600 mb-2 line-clamp-2 group-hover:text-blue-700">
                            {job.title}
                          </h3>

                          {/* Company/Description */}
                          <p className="text-sm text-gray-600 mb-4 line-clamp-2 grow">
                            {job.company}
                          </p>

                          {/* Date and Location Info */}
                          <div className="space-y-2 mb-4 text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              <span>
                                {job.startDate}-{job.endDate}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4m0 2a2 2 0 11-4 0m3-6h.01M4 15h16"
                                />
                              </svg>
                              <span>{job.jobType}</span>
                            </div>
                          </div>

                          {/* External Link Icon */}
                          <div className="flex justify-end">
                            <svg
                              className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <svg
                    className="w-16 h-16 mx-auto text-gray-400 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-gray-500 text-lg">
                    Tidak ada lowongan pekerjaan yang cocok dengan pencarian Anda.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}