// "use client";

// import { useEffect, useState } from "react";
import { cookies } from "next/headers";

async function getDataAlumni() {
  const cookieStore = await cookies();
  const authToken = cookieStore.get("authToken")?.value;

  if (!authToken) {
    return null;
  }

  const res = await fetch("http://localhost:3001/api/getDataAlumni/", {
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
  const profile = await getDataAlumni();

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
                      {profile.data.name}
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
                      {profile.data.nim}
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
                      {profile.data.email}
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
                      {profile.data.gender}
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
                      {profile.data.no_wa}
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
                        {profile.data.tmpt_tinggal}
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
