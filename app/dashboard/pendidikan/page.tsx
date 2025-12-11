import { cookies } from "next/headers";

async function getDataPendidikan() {
  const cookieStore = await cookies();
  const authToken = cookieStore.get("authToken")?.value;

  if (!authToken) {
    return null;
  }

  const res = await fetch("http://localhost:3001/api/getDataPendidikan/", {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${authToken}`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export default async function Profil() {
  const data = await getDataPendidikan();
  // const pendidikan = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <main className="pr-4 pl-4 md:ml-64 h-auto pt-20">
      <div className="rounded-lg border-gray-300 dark:border-gray-600 mb-4">
        <div className="border p-4 rounded-lg border-gray-300 dark:border-gray-600">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Riwayat Pendidikan
              </h1>
              <p className="text-gray-600">
                Daftar lengkap riwayat pendidikan Anda
              </p>
            </div>
            <a
              href="/dashboard/pendidikan/edit"
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 px-5 rounded-lg transition duration-200 flex items-center"
            >
              <i className="fas fa-plus-circle mr-2"></i>
              Tambah Pendidikan
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
                      Jenjang
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
                      Tahun Lulus
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Universitas
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Fakultas
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Program Studi
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
                  {/* {data.map((item, rowIndex) => ( */}
                  <tr className="table-row bg-white">
                    {/* {pendidikan.map((header, colIndex) => ( */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {/* {item[header] || "-"} */}
                    </td>
                    {/* ))} */}
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
                  {/* ))} */}
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
