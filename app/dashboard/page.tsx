export default function Dashboard() {
  return (
    <main className="p-4 md:ml-64 h-auto pt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div className="bg-purple-50 text-left border border-gray-300 rounded-3xl p-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-11 h-11 mb-6"
            viewBox="0 0 512 512"
          >
            <path
              fill="#004881"
              d="M436.927 271h-87.54c-8.284 0-15-6.716-15-15s6.716-15 15-15h87.54c8.284 0 15 6.716 15 15s-6.716 15-15 15zm-141.865-85.75a14.952 14.952 0 0 1-10.613-4.4c-5.854-5.861-5.848-15.359.013-21.213l64.328-64.25A15.001 15.001 0 0 1 359.39 91h77.537c8.284 0 15 6.716 15 15s-6.716 15-15 15h-71.329l-59.936 59.863a14.953 14.953 0 0 1-10.6 4.387zM436.927 421H359.39a15 15 0 0 1-10.6-4.387l-64.328-64.25c-5.861-5.854-5.867-15.352-.013-21.213 5.855-5.862 15.352-5.867 21.213-.013L365.598 391h71.329c8.284 0 15 6.716 15 15s-6.716 15-15 15z"
              data-original="#004881"
            />
            <path
              fill="#3c6eaf"
              d="M162.613 271h-87.54c-8.284 0-15-6.716-15-15s6.716-15 15-15h87.54c8.284 0 15 6.716 15 15s-6.716 15-15 15zm54.325-85.75a14.953 14.953 0 0 1-10.6-4.387L146.402 121H75.073c-8.284 0-15-6.716-15-15s6.716-15 15-15h77.537a15 15 0 0 1 10.6 4.387l64.328 64.25c5.861 5.854 5.867 15.352.013 21.213a14.952 14.952 0 0 1-10.613 4.4zM152.61 421H75.073c-8.284 0-15-6.716-15-15s6.716-15 15-15h71.329l59.936-59.863c5.862-5.854 15.359-5.848 21.213.013s5.848 15.359-.013 21.213l-64.328 64.25a15.001 15.001 0 0 1-10.6 4.387z"
              data-original="#3c6eaf"
            />
            <path
              fill="#7ed8f6"
              d="M362.37 194.74c1.36 2.29-106.37 78.94-106.37 78.94s-108.2-77.08-106.94-79.27c1.35-2.35 3.28-4.28 5.46-5.5l.01-.01 93.39-53.85c2.49-1.44 5.3-2.11 8.08-1.99 2.39.08 4.76.75 6.91 1.99l93.97 54.19h.01c2.42 1.51 4.25 3.39 5.48 5.5z"
              data-original="#7ed8f6"
            />
            <path
              fill="#6aa9ff"
              d="M362.37 194.74c1.36 2.29-106.37 78.94-106.37 78.94V133.06c2.39.08 4.76.75 6.91 1.99l93.97 54.19h.01c2.42 1.51 4.25 3.39 5.48 5.5z"
              data-original="#6aa9ff"
            />
            <path
              fill="#ff415b"
              d="M90.07 106c0 24.81-20.2 45-45.03 45C20.2 151 0 130.81 0 106s20.2-45 45.04-45c24.83 0 45.03 20.19 45.03 45z"
              data-original="#ff415b"
            />
            <path
              fill="#6aa9ff"
              d="m256 256.08-106.94-61.67c-1.26 2.19-2.03 4.76-2.03 7.48v107.88a15 15 0 0 0 7.5 12.99l93.96 54.18s.01 0 .01.01h.01c2.07 1.38 4.8 1.97 7.49 1.95l4.27-3.303V256.872z"
              data-original="#6aa9ff"
            />
            <path
              fill="#5f69e3"
              d="M364.39 202.23v107.86c0 5.37-2.86 10.32-7.51 13l-93.39 53.86c-1.88 1.21-4.66 1.92-7.49 1.95V256.08l106.37-61.34c1.36 2.29 2.02 4.84 2.02 7.49z"
              data-original="#5f69e3"
            />
            <path
              fill="#e50058"
              d="M512 256c0 24.81-20.2 45-45.04 45-24.83 0-45.03-20.19-45.03-45s20.2-45 45.03-45c24.84 0 45.04 20.19 45.04 45zm0 150c0 24.81-20.2 45-45.04 45-24.83 0-45.03-20.19-45.03-45s20.2-45 45.03-45c24.84 0 45.04 20.19 45.04 45zm0-300c0 24.81-20.2 45-45.04 45-24.83 0-45.03-20.19-45.03-45s20.2-45 45.03-45C491.8 61 512 81.19 512 106z"
              data-original="#e50058"
            />
            <path
              fill="#ff415b"
              d="M90.07 256c0 24.81-20.2 45-45.03 45C20.2 301 0 280.81 0 256s20.2-45 45.04-45c24.83 0 45.03 20.19 45.03 45zm0 150c0 24.81-20.2 45-45.03 45C20.2 451 0 430.81 0 406s20.2-45 45.04-45c24.83 0 45.03 20.19 45.03 45z"
              data-original="#ff415b"
            />
          </svg>

          <h3 className="text-slate-900 text-lg font-semibold mb-3">
            News & Events
          </h3>
          <p className="text-[15px] leading-relaxed text-slate-600">
            Dapatkan info terkini tentang berita dan acara terbaru di portal
            alumni.
          </p>
          <a
            href="javascript:void(0);"
            className="text-[15px] inline-flex items-center font-medium hover:text-blue-700 mt-12"
          >
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ml-1.5 fill-current"
              viewBox="0 0 24 24"
            >
              <path
                d="m23.564 11.235-7.56-7.56a1.08 1.08 0 0 0-1.528 1.528l5.717 5.716H1.2a1.08 1.08 0 0 0 0 2.16h18.993l-5.717 5.716a1.08 1.08 0 1 0 1.528 1.528l7.56-7.56a1.08 1.08 0 0 0 0-1.528z"
                data-original="#000000"
              ></path>
            </svg>
          </a>
        </div>
        <div className="bg-purple-50 text-left border border-gray-300 rounded-3xl p-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-11 h-11 mb-6"
            viewBox="0 0 512 512"
          >
            <path
              fill="#004881"
              d="M436.927 271h-87.54c-8.284 0-15-6.716-15-15s6.716-15 15-15h87.54c8.284 0 15 6.716 15 15s-6.716 15-15 15zm-141.865-85.75a14.952 14.952 0 0 1-10.613-4.4c-5.854-5.861-5.848-15.359.013-21.213l64.328-64.25A15.001 15.001 0 0 1 359.39 91h77.537c8.284 0 15 6.716 15 15s-6.716 15-15 15h-71.329l-59.936 59.863a14.953 14.953 0 0 1-10.6 4.387zM436.927 421H359.39a15 15 0 0 1-10.6-4.387l-64.328-64.25c-5.861-5.854-5.867-15.352-.013-21.213 5.855-5.862 15.352-5.867 21.213-.013L365.598 391h71.329c8.284 0 15 6.716 15 15s-6.716 15-15 15z"
              data-original="#004881"
            />
            <path
              fill="#3c6eaf"
              d="M162.613 271h-87.54c-8.284 0-15-6.716-15-15s6.716-15 15-15h87.54c8.284 0 15 6.716 15 15s-6.716 15-15 15zm54.325-85.75a14.953 14.953 0 0 1-10.6-4.387L146.402 121H75.073c-8.284 0-15-6.716-15-15s6.716-15 15-15h77.537a15 15 0 0 1 10.6 4.387l64.328 64.25c5.861 5.854 5.867 15.352.013 21.213a14.952 14.952 0 0 1-10.613 4.4zM152.61 421H75.073c-8.284 0-15-6.716-15-15s6.716-15 15-15h71.329l59.936-59.863c5.862-5.854 15.359-5.848 21.213.013s5.848 15.359-.013 21.213l-64.328 64.25a15.001 15.001 0 0 1-10.6 4.387z"
              data-original="#3c6eaf"
            />
            <path
              fill="#7ed8f6"
              d="M362.37 194.74c1.36 2.29-106.37 78.94-106.37 78.94s-108.2-77.08-106.94-79.27c1.35-2.35 3.28-4.28 5.46-5.5l.01-.01 93.39-53.85c2.49-1.44 5.3-2.11 8.08-1.99 2.39.08 4.76.75 6.91 1.99l93.97 54.19h.01c2.42 1.51 4.25 3.39 5.48 5.5z"
              data-original="#7ed8f6"
            />
            <path
              fill="#6aa9ff"
              d="M362.37 194.74c1.36 2.29-106.37 78.94-106.37 78.94V133.06c2.39.08 4.76.75 6.91 1.99l93.97 54.19h.01c2.42 1.51 4.25 3.39 5.48 5.5z"
              data-original="#6aa9ff"
            />
            <path
              fill="#ff415b"
              d="M90.07 106c0 24.81-20.2 45-45.03 45C20.2 151 0 130.81 0 106s20.2-45 45.04-45c24.83 0 45.03 20.19 45.03 45z"
              data-original="#ff415b"
            />
            <path
              fill="#6aa9ff"
              d="m256 256.08-106.94-61.67c-1.26 2.19-2.03 4.76-2.03 7.48v107.88a15 15 0 0 0 7.5 12.99l93.96 54.18s.01 0 .01.01h.01c2.07 1.38 4.8 1.97 7.49 1.95l4.27-3.303V256.872z"
              data-original="#6aa9ff"
            />
            <path
              fill="#5f69e3"
              d="M364.39 202.23v107.86c0 5.37-2.86 10.32-7.51 13l-93.39 53.86c-1.88 1.21-4.66 1.92-7.49 1.95V256.08l106.37-61.34c1.36 2.29 2.02 4.84 2.02 7.49z"
              data-original="#5f69e3"
            />
            <path
              fill="#e50058"
              d="M512 256c0 24.81-20.2 45-45.04 45-24.83 0-45.03-20.19-45.03-45s20.2-45 45.03-45c24.84 0 45.04 20.19 45.04 45zm0 150c0 24.81-20.2 45-45.04 45-24.83 0-45.03-20.19-45.03-45s20.2-45 45.03-45c24.84 0 45.04 20.19 45.04 45zm0-300c0 24.81-20.2 45-45.04 45-24.83 0-45.03-20.19-45.03-45s20.2-45 45.03-45C491.8 61 512 81.19 512 106z"
              data-original="#e50058"
            />
            <path
              fill="#ff415b"
              d="M90.07 256c0 24.81-20.2 45-45.03 45C20.2 301 0 280.81 0 256s20.2-45 45.04-45c24.83 0 45.03 20.19 45.03 45zm0 150c0 24.81-20.2 45-45.03 45C20.2 451 0 430.81 0 406s20.2-45 45.04-45c24.83 0 45.03 20.19 45.03 45z"
              data-original="#ff415b"
            />
          </svg>

          <h3 className="text-slate-900 text-lg font-semibold mb-3">
            Newsletter
          </h3>
          <p className="text-[15px] leading-relaxed text-slate-600">
            Jelajahi E-Bulletin dan temukan kisah-kisah menarik dari para alumni
            inspiratif yang memperkaya perjalanan hidupmu.
          </p>
          <a
            href="javascript:void(0);"
            className="text-[15px] inline-flex items-center font-medium hover:text-blue-700 mt-12"
          >
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ml-1.5 fill-current"
              viewBox="0 0 24 24"
            >
              <path
                d="m23.564 11.235-7.56-7.56a1.08 1.08 0 0 0-1.528 1.528l5.717 5.716H1.2a1.08 1.08 0 0 0 0 2.16h18.993l-5.717 5.716a1.08 1.08 0 1 0 1.528 1.528l7.56-7.56a1.08 1.08 0 0 0 0-1.528z"
                data-original="#000000"
              ></path>
            </svg>
          </a>
        </div>
        <div className="bg-purple-50 text-left border border-gray-300 rounded-3xl p-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-11 h-11 mb-6"
            viewBox="0 0 512 512"
          >
            <path
              fill="#004881"
              d="M436.927 271h-87.54c-8.284 0-15-6.716-15-15s6.716-15 15-15h87.54c8.284 0 15 6.716 15 15s-6.716 15-15 15zm-141.865-85.75a14.952 14.952 0 0 1-10.613-4.4c-5.854-5.861-5.848-15.359.013-21.213l64.328-64.25A15.001 15.001 0 0 1 359.39 91h77.537c8.284 0 15 6.716 15 15s-6.716 15-15 15h-71.329l-59.936 59.863a14.953 14.953 0 0 1-10.6 4.387zM436.927 421H359.39a15 15 0 0 1-10.6-4.387l-64.328-64.25c-5.861-5.854-5.867-15.352-.013-21.213 5.855-5.862 15.352-5.867 21.213-.013L365.598 391h71.329c8.284 0 15 6.716 15 15s-6.716 15-15 15z"
              data-original="#004881"
            />
            <path
              fill="#3c6eaf"
              d="M162.613 271h-87.54c-8.284 0-15-6.716-15-15s6.716-15 15-15h87.54c8.284 0 15 6.716 15 15s-6.716 15-15 15zm54.325-85.75a14.953 14.953 0 0 1-10.6-4.387L146.402 121H75.073c-8.284 0-15-6.716-15-15s6.716-15 15-15h77.537a15 15 0 0 1 10.6 4.387l64.328 64.25c5.861 5.854 5.867 15.352.013 21.213a14.952 14.952 0 0 1-10.613 4.4zM152.61 421H75.073c-8.284 0-15-6.716-15-15s6.716-15 15-15h71.329l59.936-59.863c5.862-5.854 15.359-5.848 21.213.013s5.848 15.359-.013 21.213l-64.328 64.25a15.001 15.001 0 0 1-10.6 4.387z"
              data-original="#3c6eaf"
            />
            <path
              fill="#7ed8f6"
              d="M362.37 194.74c1.36 2.29-106.37 78.94-106.37 78.94s-108.2-77.08-106.94-79.27c1.35-2.35 3.28-4.28 5.46-5.5l.01-.01 93.39-53.85c2.49-1.44 5.3-2.11 8.08-1.99 2.39.08 4.76.75 6.91 1.99l93.97 54.19h.01c2.42 1.51 4.25 3.39 5.48 5.5z"
              data-original="#7ed8f6"
            />
            <path
              fill="#6aa9ff"
              d="M362.37 194.74c1.36 2.29-106.37 78.94-106.37 78.94V133.06c2.39.08 4.76.75 6.91 1.99l93.97 54.19h.01c2.42 1.51 4.25 3.39 5.48 5.5z"
              data-original="#6aa9ff"
            />
            <path
              fill="#ff415b"
              d="M90.07 106c0 24.81-20.2 45-45.03 45C20.2 151 0 130.81 0 106s20.2-45 45.04-45c24.83 0 45.03 20.19 45.03 45z"
              data-original="#ff415b"
            />
            <path
              fill="#6aa9ff"
              d="m256 256.08-106.94-61.67c-1.26 2.19-2.03 4.76-2.03 7.48v107.88a15 15 0 0 0 7.5 12.99l93.96 54.18s.01 0 .01.01h.01c2.07 1.38 4.8 1.97 7.49 1.95l4.27-3.303V256.872z"
              data-original="#6aa9ff"
            />
            <path
              fill="#5f69e3"
              d="M364.39 202.23v107.86c0 5.37-2.86 10.32-7.51 13l-93.39 53.86c-1.88 1.21-4.66 1.92-7.49 1.95V256.08l106.37-61.34c1.36 2.29 2.02 4.84 2.02 7.49z"
              data-original="#5f69e3"
            />
            <path
              fill="#e50058"
              d="M512 256c0 24.81-20.2 45-45.04 45-24.83 0-45.03-20.19-45.03-45s20.2-45 45.03-45c24.84 0 45.04 20.19 45.04 45zm0 150c0 24.81-20.2 45-45.04 45-24.83 0-45.03-20.19-45.03-45s20.2-45 45.03-45c24.84 0 45.04 20.19 45.04 45zm0-300c0 24.81-20.2 45-45.04 45-24.83 0-45.03-20.19-45.03-45s20.2-45 45.03-45C491.8 61 512 81.19 512 106z"
              data-original="#e50058"
            />
            <path
              fill="#ff415b"
              d="M90.07 256c0 24.81-20.2 45-45.03 45C20.2 301 0 280.81 0 256s20.2-45 45.04-45c24.83 0 45.03 20.19 45.03 45zm0 150c0 24.81-20.2 45-45.03 45C20.2 451 0 430.81 0 406s20.2-45 45.04-45c24.83 0 45.03 20.19 45.03 45z"
              data-original="#ff415b"
            />
          </svg>

          <h3 className="text-slate-900 text-lg font-semibold mb-3">
            Jobs Vacancy
          </h3>
          <p className="text-[15px] leading-relaxed text-slate-600">
            Temukan info terkini tentang lowongan pekerjaan di portal alumni.
          </p>
          <a
            href="javascript:void(0);"
            className="text-[15px] inline-flex items-center font-medium hover:text-blue-700 mt-12"
          >
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ml-1.5 fill-current"
              viewBox="0 0 24 24"
            >
              <path
                d="m23.564 11.235-7.56-7.56a1.08 1.08 0 0 0-1.528 1.528l5.717 5.716H1.2a1.08 1.08 0 0 0 0 2.16h18.993l-5.717 5.716a1.08 1.08 0 1 0 1.528 1.528l7.56-7.56a1.08 1.08 0 0 0 0-1.528z"
                data-original="#000000"
              ></path>
            </svg>
          </a>
        </div>
        <div className="bg-purple-50 text-left border border-gray-300 rounded-3xl p-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-11 h-11 mb-6"
            viewBox="0 0 512 512"
          >
            <path
              fill="#004881"
              d="M436.927 271h-87.54c-8.284 0-15-6.716-15-15s6.716-15 15-15h87.54c8.284 0 15 6.716 15 15s-6.716 15-15 15zm-141.865-85.75a14.952 14.952 0 0 1-10.613-4.4c-5.854-5.861-5.848-15.359.013-21.213l64.328-64.25A15.001 15.001 0 0 1 359.39 91h77.537c8.284 0 15 6.716 15 15s-6.716 15-15 15h-71.329l-59.936 59.863a14.953 14.953 0 0 1-10.6 4.387zM436.927 421H359.39a15 15 0 0 1-10.6-4.387l-64.328-64.25c-5.861-5.854-5.867-15.352-.013-21.213 5.855-5.862 15.352-5.867 21.213-.013L365.598 391h71.329c8.284 0 15 6.716 15 15s-6.716 15-15 15z"
              data-original="#004881"
            />
            <path
              fill="#3c6eaf"
              d="M162.613 271h-87.54c-8.284 0-15-6.716-15-15s6.716-15 15-15h87.54c8.284 0 15 6.716 15 15s-6.716 15-15 15zm54.325-85.75a14.953 14.953 0 0 1-10.6-4.387L146.402 121H75.073c-8.284 0-15-6.716-15-15s6.716-15 15-15h77.537a15 15 0 0 1 10.6 4.387l64.328 64.25c5.861 5.854 5.867 15.352.013 21.213a14.952 14.952 0 0 1-10.613 4.4zM152.61 421H75.073c-8.284 0-15-6.716-15-15s6.716-15 15-15h71.329l59.936-59.863c5.862-5.854 15.359-5.848 21.213.013s5.848 15.359-.013 21.213l-64.328 64.25a15.001 15.001 0 0 1-10.6 4.387z"
              data-original="#3c6eaf"
            />
            <path
              fill="#7ed8f6"
              d="M362.37 194.74c1.36 2.29-106.37 78.94-106.37 78.94s-108.2-77.08-106.94-79.27c1.35-2.35 3.28-4.28 5.46-5.5l.01-.01 93.39-53.85c2.49-1.44 5.3-2.11 8.08-1.99 2.39.08 4.76.75 6.91 1.99l93.97 54.19h.01c2.42 1.51 4.25 3.39 5.48 5.5z"
              data-original="#7ed8f6"
            />
            <path
              fill="#6aa9ff"
              d="M362.37 194.74c1.36 2.29-106.37 78.94-106.37 78.94V133.06c2.39.08 4.76.75 6.91 1.99l93.97 54.19h.01c2.42 1.51 4.25 3.39 5.48 5.5z"
              data-original="#6aa9ff"
            />
            <path
              fill="#ff415b"
              d="M90.07 106c0 24.81-20.2 45-45.03 45C20.2 151 0 130.81 0 106s20.2-45 45.04-45c24.83 0 45.03 20.19 45.03 45z"
              data-original="#ff415b"
            />
            <path
              fill="#6aa9ff"
              d="m256 256.08-106.94-61.67c-1.26 2.19-2.03 4.76-2.03 7.48v107.88a15 15 0 0 0 7.5 12.99l93.96 54.18s.01 0 .01.01h.01c2.07 1.38 4.8 1.97 7.49 1.95l4.27-3.303V256.872z"
              data-original="#6aa9ff"
            />
            <path
              fill="#5f69e3"
              d="M364.39 202.23v107.86c0 5.37-2.86 10.32-7.51 13l-93.39 53.86c-1.88 1.21-4.66 1.92-7.49 1.95V256.08l106.37-61.34c1.36 2.29 2.02 4.84 2.02 7.49z"
              data-original="#5f69e3"
            />
            <path
              fill="#e50058"
              d="M512 256c0 24.81-20.2 45-45.04 45-24.83 0-45.03-20.19-45.03-45s20.2-45 45.03-45c24.84 0 45.04 20.19 45.04 45zm0 150c0 24.81-20.2 45-45.04 45-24.83 0-45.03-20.19-45.03-45s20.2-45 45.03-45c24.84 0 45.04 20.19 45.04 45zm0-300c0 24.81-20.2 45-45.04 45-24.83 0-45.03-20.19-45.03-45s20.2-45 45.03-45C491.8 61 512 81.19 512 106z"
              data-original="#e50058"
            />
            <path
              fill="#ff415b"
              d="M90.07 256c0 24.81-20.2 45-45.03 45C20.2 301 0 280.81 0 256s20.2-45 45.04-45c24.83 0 45.03 20.19 45.03 45zm0 150c0 24.81-20.2 45-45.03 45C20.2 451 0 430.81 0 406s20.2-45 45.04-45c24.83 0 45.03 20.19 45.03 45z"
              data-original="#ff415b"
            />
          </svg>

          <h3 className="text-slate-900 text-lg font-semibold mb-3">Donasi</h3>
          <p className="text-[15px] leading-relaxed text-slate-600">
            Dana abadi untuk Unhas maju.
          </p>
          <a
            href="javascript:void(0);"
            className="text-[15px] inline-flex items-center font-medium hover:text-blue-700 mt-12"
          >
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ml-1.5 fill-current"
              viewBox="0 0 24 24"
            >
              <path
                d="m23.564 11.235-7.56-7.56a1.08 1.08 0 0 0-1.528 1.528l5.717 5.716H1.2a1.08 1.08 0 0 0 0 2.16h18.993l-5.717 5.716a1.08 1.08 0 1 0 1.528 1.528l7.56-7.56a1.08 1.08 0 0 0 0-1.528z"
                data-original="#000000"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4">
        <div className="p-4 mx-auto max-w-xl bg-white">
          <h2 className="text-3xl text-slate-900 font-bold">Contact us</h2>
          <form className="mt-8 space-y-5">
            <div>
              <label className="text-sm text-slate-900 font-medium mb-2 block">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all"
              />
            </div>
            <div>
              <label className="text-sm text-slate-900 font-medium mb-2 block">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all"
              />
            </div>
            <div>
              <label className="text-sm text-slate-900 font-medium mb-2 block">
                Subject
              </label>
              <input
                type="text"
                placeholder="Enter Subject"
                className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all"
              />
            </div>
            <div>
              <label className="text-sm text-slate-900 font-medium mb-2 block">
                Message
              </label>
              <textarea
                placeholder="Enter Message"
                rows="6"
                className="w-full px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm pt-3 outline-0 transition-all"
              ></textarea>
            </div>
            <button
              type="button"
              className="text-white bg-slate-900 font-medium hover:bg-slate-800 tracking-wide text-sm px-4 py-2.5 w-full border-0 outline-0 cursor-pointer"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
      </div>
      <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"></div>
      <div className="grid grid-cols-2 gap-4">
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
      </div>
    </main>
  );
}
