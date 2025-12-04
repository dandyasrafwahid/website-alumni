export default function Profil() {
  return (
    <main className="pr-4 pl-4 md:ml-64 h-auto pt-20">
      <div className="rounded-lg border-gray-300 dark:border-gray-600 mb-4">
        <div className="border p-4 rounded-lg border-gray-300 dark:border-gray-600">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Profil Alumni
              </h1>
              <p className="text-gray-600">Informasi dasar akun</p>
            </div>
            <button
              id="editProfileBtn"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-lg transition duration-200 flex items-center"
            >
              <i className="fas fa-edit mr-2"></i>
              Edit Profil
            </button>
          </div>
          <div className="bg-white rounded-xl overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="divide-y divide-gray-200">
                  <tr className="table-row">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-1/3">
                      <div className="flex items-center">
                        <i className="fas fa-user text-blue-500 mr-3"></i>
                        Nama Lengkap
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-medium">
                      Andi Wijaya
                    </td>
                  </tr>

                  <tr className="table-row">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <div className="flex items-center">
                        <i className="fas fa-id-card text-green-500 mr-3"></i>
                        NIM
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-medium">
                      3175081508950001
                    </td>
                  </tr>

                  <tr className="table-row">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <div className="flex items-center">
                        <i className="fas fa-envelope text-red-500 mr-3"></i>
                        Email
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-medium">
                      andi.wijaya@example.com
                    </td>
                  </tr>

                  <tr className="table-row">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <div className="flex items-center">
                        <i className="fas fa-venus-mars text-purple-500 mr-3"></i>
                        Jenis Kelamin
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-medium">
                      Laki-laki
                    </td>
                  </tr>

                  <tr className="table-row">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <div className="flex items-center">
                        <i className="fas fa-phone text-yellow-500 mr-3"></i>
                        Nomor Ponsel
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-medium">
                      +62 812-3456-7890
                    </td>
                  </tr>

                  <tr className="table-row">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 align-top">
                      <div className="flex items-start">
                        <i className="fas fa-home text-indigo-500 mr-3 mt-1"></i>
                        Tempat Tinggal
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800">
                      <div className="font-medium">
                        Jl. Merdeka No. 123, Jakarta Pusat
                      </div>
                      <div className="text-gray-600 mt-1 text-sm">
                        RT 05/RW 02, Kelurahan Menteng, Kecamatan Menteng
                        Jakarta Pusat 10310, DKI Jakarta
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-center">
            <a
              href="/dashboard/profil/edit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-200 flex items-center shadow"
            >
              <i className="fas fa-user-edit mr-2"></i>
              Edit Profil
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
