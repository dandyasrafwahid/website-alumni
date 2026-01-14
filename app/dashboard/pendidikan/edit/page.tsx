export default function Profil() {
  return (
    <main className="pr-4 pl-4 md:ml-64 h-auto pt-20">
      <div className="rounded-lg border-gray-300 dark:border-gray-600 mb-4">
        <div className="border p-4 rounded-lg border-gray-300 dark:border-gray-600">
          <h2 className="text-3xl text-slate-900 font-bold">
            Riwayat Pendidikan
          </h2>
          <form className="mt-8 space-y-5">
            <div>
              <label className="text-sm text-slate-900 font-medium mb-2 block">
                Jenjang
              </label>
              <input
                type="text"
                placeholder="Masukkan Jenjang"
                className="rounded w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all"
              />
            </div>
            <div>
              <label className="text-sm text-slate-900 font-medium mb-2 block">
                Tahun Masuk
              </label>
              <input
                type="text"
                placeholder="Tahun Masuk"
                className="rounded w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all"
              />
            </div>
            <div>
              <label className="text-sm text-slate-900 font-medium mb-2 block">
                Tahun Lulus
              </label>
              <input
                type="text"
                placeholder="Tahun Lulus"
                className="rounded w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all"
              />
            </div>
            <div>
              <label className="text-sm text-slate-900 font-medium mb-2 block">
                Universitas
              </label>
              <input
                type="text"
                placeholder="Masukkan Universitas"
                className="rounded w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all"
              />
            </div>
            <div>
              <label className="text-sm text-slate-900 font-medium mb-2 block">
                Fakultas
              </label>
              <input
                type="text"
                placeholder="Masukkan Fakultas"
                className="rounded w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all"
              />
            </div>
            <div>
              <label className="text-sm text-slate-900 font-medium mb-2 block">
                Program Studi
              </label>
              <input
                type="text"
                placeholder="Masukkan Program Studi"
                className="rounded w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all"
              />
            </div>
            {/* <div>
              <label className="text-sm text-slate-900 font-medium mb-2 block">
                Message
              </label>
              <textarea
                placeholder="Enter Message"
                rows="6"
                className="rounded w-full px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm pt-3 outline-0 transition-all"
              ></textarea>
            </div> */}
            <div className="flex gap-2">
              <a
                href="/dashboard/pendidikan"
                className="text-center rounded text-white bg-red-500 font-medium hover:bg-red-800 tracking-wide text-sm px-4 py-2.5 w-full border-0 outline-0 cursor-pointer"
              >
                Back
              </a>
              <button
                type="button"
                className="rounded text-white bg-blue-500 font-medium hover:bg-blue-800 tracking-wide text-sm px-4 py-2.5 w-full border-0 outline-0 cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
