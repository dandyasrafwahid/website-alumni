export default function Profil() {
  return (
    <main className="p-4 md:ml-64 h-auto pt-20">
      <div className="rounded-lg border-gray-300 dark:border-gray-600 mb-4">
        <div className="border p-4 rounded-lg border-gray-300 dark:border-gray-600 mb-4">
          <h2 className="text-3xl text-slate-900 font-bold">
            Lowongan Pekerjaan
          </h2>
          <form className="mt-8 space-y-5">
            <div>
              <label className="text-sm text-slate-900 font-medium mb-2 block">
                Judul
              </label>
              <input
                type="text"
                placeholder="Masukkan Judul"
                className="rounded w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all"
              />
            </div>
            <div>
              <label className="text-sm text-slate-900 font-medium mb-2 block">
                Nama Perusahaan
              </label>
              <input
                type="text"
                placeholder="Masukkan Nama Perusahaan"
                className="rounded w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all"
              />
            </div>
            <div>
              <label className="text-sm text-slate-900 font-medium mb-2 block">
                Industri
              </label>
              <input
                type="text"
                placeholder="Masukkan Industri"
                className="rounded w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all"
              />
            </div>
            <div>
              <label className="text-sm text-slate-900 font-medium mb-2 block">
                Alamat Perusahaan
              </label>
              <input
                type="text"
                placeholder="Masukkan Alamat Perusahaan"
                className="rounded w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all"
              />
            </div>
            <div>
              <label className="text-sm text-slate-900 font-medium mb-2 block">
                Tanggal Terbit
              </label>
              <input
                type="text"
                placeholder="DD/MM/YYYY"
                className="rounded w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all"
              />
            </div>
            <div>
              <label className="text-sm text-slate-900 font-medium mb-2 block">
                Tanggal Kadaluarsa
              </label>
              <input
                type="text"
                placeholder="DD/MM/YYYY"
                className="rounded w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all"
              />
            </div>
            <div>
              <label className="text-sm text-slate-900 font-medium mb-2 block">
                Deskripsi
              </label>
              <textarea
                placeholder="Masukkan Deskripsi Lowongan"
                rows="6"
                className="rounded w-full px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm pt-3 outline-0 transition-all"
              ></textarea>
            </div>
            <button
              type="button"
              className="rounded text-white bg-slate-900 font-medium hover:bg-slate-800 tracking-wide text-sm px-4 py-2.5 w-full border-0 outline-0 cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
