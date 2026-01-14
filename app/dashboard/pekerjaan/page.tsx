export default function Pekerjaan() {
  return (
    <main className="pr-4 pl-4 md:ml-64 h-auto pt-20">
      <div className="rounded-lg border-gray-300 dark:border-gray-600 mb-4">
        <div className="border p-4 rounded-lg border-gray-300 dark:border-gray-600">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Riwayat Pekerjaan
              </h1>
              <p className="text-gray-600">
                Daftar lengkap riwayat pekerjaan Anda
              </p>
            </div>
            <a
              href="/dashboard/pekerjaan/edit"
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 px-5 rounded-lg transition duration-200 flex items-center"
            >
              <i className="fas fa-plus-circle mr-2"></i>
              Tambah Pekerjaan
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      No
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Nama Perusahaan
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Tahun Masuk
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Tahun Keluar
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Jabatan
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Industri
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Alamat Perusahaan
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="table-row bg-white">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      1
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        S1
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      2013
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      2017
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800">
                      Universitas Indonesia
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800">
                      Fakultas Ilmu Komputer
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800">
                      Ilmu Komputer
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="edit-btn action-btn text-blue-600 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 p-2 rounded-lg">
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="delete-btn action-btn text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 p-2 rounded-lg">
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr className="table-row bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      2
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        S2
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      2019
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      2021
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800">
                      Institut Teknologi Bandung
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800">
                      Sekolah Teknik Elektro dan Informatika
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800">
                      Teknik Informatika
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="edit-btn action-btn text-blue-600 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 p-2 rounded-lg">
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="delete-btn action-btn text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 p-2 rounded-lg">
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr className="table-row bg-white">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      3
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        D3
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      2010
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      2013
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800">
                      Politeknik Negeri Jakarta
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800">
                      Jurusan Teknik Elektro
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800">
                      Teknik Komputer
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="edit-btn action-btn text-blue-600 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 p-2 rounded-lg">
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="delete-btn action-btn text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 p-2 rounded-lg">
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr className="table-row bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      4
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        SMA
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      2007
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      2010
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800">
                      SMA Negeri 8 Jakarta
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800">-</td>
                    <td className="px-6 py-4 text-sm text-gray-800">IPA</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="edit-btn action-btn text-blue-600 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 p-2 rounded-lg">
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="delete-btn action-btn text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 p-2 rounded-lg">
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
