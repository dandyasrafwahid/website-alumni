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

async function getDataPekerjaan() {
  const cookieStore = await cookies();
  const authToken = cookieStore.get("authToken")?.value;

  if (!authToken) {
    return null;
  }

  const res = await fetch("http://localhost:3001/api/getDataPekerjaan/", {
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

export default async function Dashboard() {
  const alumni = await getDataAlumni();
  const pendidikan = await getDataPendidikan();
  const pekerjaan = await getDataPekerjaan();

  return (
    <main className="p-4 md:ml-64 h-auto pt-20">
      <div className="rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4">
        <div className="container mx-auto px-4 py-8 max-w-8xl">
          <div className="profile-header text-white rounded-2xl p-6 mb-8 shadow-lg bg-black">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
              <div className="flex flex-col md:flex-row items-center md:items-start w-full md:w-auto">
                <div className="relative mb-6 md:mb-0 md:mr-8">
                  <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                      alt="Foto profil"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 bg-green-500 w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
                    <i className="fas fa-check text-white text-xs"></i>
                  </div>
                </div>

                <div className="md:text-left">
                  <h1 className="text-3xl font-bold mb-2">
                    {alumni.data.name}
                  </h1>
                  <p className="text-lg opacity-90 mb-1">Software Engineer</p>
                  <p className="flex opacity-80 mb-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                          stroke="#FFFFFF"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
                          stroke="#FFFFFF"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                    <span>Jakarta, Indonesia</span>
                  </p>
                </div>
              </div>
              <div className="mt-6 md:mt-0 md:ml-6 shrink-0">
                <a
                  href="#"
                  className="bg-white text-black hover:bg-gray-100 font-semibold py-3 px-10 rounded-xl shadow-md flex items-center cursor-pointer"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M10.56 11.87C9.81832 11.87 9.0933 11.6501 8.47661 11.238C7.85993 10.826 7.37928 10.2403 7.09545 9.55506C6.81162 8.86984 6.73736 8.11584 6.88205 7.38841C7.02675 6.66098 7.3839 5.99279 7.90835 5.46835C8.4328 4.9439 9.10098 4.58675 9.82841 4.44205C10.5558 4.29736 11.3098 4.37162 11.9951 4.65545C12.6803 4.93928 13.266 5.41992 13.678 6.03661C14.0901 6.65329 14.31 7.37832 14.31 8.12C14.3074 9.11375 13.9114 10.066 13.2087 10.7687C12.506 11.4714 11.5538 11.8674 10.56 11.87ZM10.56 5.87C10.115 5.87 9.67998 6.00196 9.30997 6.24919C8.93996 6.49642 8.65157 6.84783 8.48127 7.25896C8.31097 7.67009 8.26642 8.12249 8.35323 8.55895C8.44005 8.99541 8.65434 9.39632 8.96901 9.71099C9.28368 10.0257 9.68459 10.2399 10.121 10.3268C10.5575 10.4136 11.0099 10.369 11.421 10.1987C11.8322 10.0284 12.1836 9.74004 12.4308 9.37003C12.678 9.00002 12.81 8.565 12.81 8.12C12.81 7.52326 12.5729 6.95096 12.151 6.52901C11.729 6.10705 11.1567 5.87 10.56 5.87Z"
                        fill="#000000"
                      ></path>{" "}
                      <path
                        d="M3.56 18.87C3.36109 18.87 3.17032 18.791 3.02967 18.6503C2.88902 18.5097 2.81 18.3189 2.81 18.12C2.81 13.37 8.24 13.37 10.56 13.37C11.28 13.37 11.92 13.37 12.5 13.44C12.6973 13.4553 12.8805 13.548 13.0098 13.6979C13.139 13.8477 13.2038 14.0426 13.19 14.24C13.1722 14.4381 13.0773 14.6214 12.9259 14.7504C12.7744 14.8794 12.5785 14.9439 12.38 14.93C11.84 14.93 11.24 14.87 10.56 14.87C5.38 14.87 4.31 16.17 4.31 18.12C4.31134 18.2189 4.29286 18.317 4.25565 18.4086C4.21843 18.5002 4.16324 18.5834 4.09333 18.6533C4.02341 18.7232 3.9402 18.7784 3.84859 18.8156C3.75699 18.8529 3.65886 18.8713 3.56 18.87Z"
                        fill="#000000"
                      ></path>{" "}
                      <path
                        d="M12.67 19.63C12.4711 19.6299 12.2805 19.5507 12.14 19.41C12.061 19.3348 12.0002 19.2426 11.9621 19.1404C11.9239 19.0382 11.9096 18.9286 11.92 18.82L12.08 16.9C12.0923 16.7235 12.1667 16.557 12.29 16.43L17.81 10.91C18.1908 10.5572 18.6908 10.3612 19.21 10.3612C19.7291 10.3612 20.2291 10.5572 20.61 10.91C20.7978 11.0993 20.9458 11.3242 21.0454 11.5715C21.145 11.8188 21.1942 12.0835 21.19 12.35C21.1939 12.5958 21.149 12.8398 21.0581 13.0681C20.9671 13.2964 20.8318 13.5044 20.66 13.68L15.14 19.2C15.0176 19.3256 14.8545 19.4035 14.68 19.42L12.74 19.6L12.67 19.63ZM13.55 17.29L13.49 18.05L14.27 17.98L19.6 12.65C19.6629 12.5746 19.6951 12.4782 19.69 12.38C19.6896 12.2408 19.64 12.1062 19.55 12C19.4517 11.927 19.3325 11.8875 19.21 11.8875C19.0875 11.8875 18.9683 11.927 18.87 12L13.55 17.29Z"
                        fill="#000000"
                      ></path>{" "}
                    </g>
                  </svg>
                  <span className="ml-4">Edit Akun</span>
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-md card-hover">
                <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b">
                  <i className="fas fa-user-circle mr-2 text-blue-500"></i>{" "}
                  Informasi Pribadi
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 text-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 mr-4"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M3 9H21M7 3V5M17 3V5M6 12H10V16H6V12ZM6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                            stroke="#000000"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                        </g>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-500">
                        Tempat, Tanggal Lahir
                      </p>
                      <p className="font-medium">Jakarta, 15 Agustus 1995</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 text-center">
                      <svg
                        version="1.1"
                        id="_x32_"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512"
                        xmlSpace="preserve"
                        fill="#000000"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <g>
                            {" "}
                            <path
                              className="st0"
                              d="M267.817,171.048c-12.343-12.388-27.371-22.176-44.078-28.53c-7.888,8.766-13.259,19.438-15.502,31.01 c-0.61,3.12-0.976,6.248-1.144,9.361c1.373,0.472,2.716,0.976,4.029,1.548c14.555,6.171,27.051,16.501,35.808,29.515 c7.033,10.405,11.702,22.451,13.274,35.504c0.412,3.257,0.61,6.576,0.61,9.963c0,11.306-2.273,21.956-6.377,31.674 c-5.096,11.985-12.984,22.588-22.886,30.835c-2.105,1.777-4.318,3.426-6.606,4.974c-13.014,8.788-28.546,13.884-45.497,13.884 c-11.275,0-21.909-2.281-31.643-6.378c-14.586-6.171-27.036-16.508-35.824-29.515c-8.758-12.992-13.854-28.561-13.854-45.474 c0-11.298,2.243-21.932,6.362-31.674c5.539-13.075,14.464-24.487,25.678-33.008c-0.214-2.953-0.306-5.905-0.306-8.857 c0-15.165,2.38-29.965,6.912-43.956c-17.348,6.309-32.91,16.34-45.665,29.126c-22.611,22.543-36.648,53.919-36.602,88.37 c-0.045,34.459,13.992,65.835,36.602,88.385c18.827,18.857,43.788,31.696,71.556,35.426v38.952h-57.901v33.55h57.901V512h33.566 v-56.268h57.947v-33.55H196.23v-38.952c27.784-3.73,52.775-16.569,71.587-35.426c6.286-6.286,11.886-13.228,16.752-20.742 c12.587-19.491,19.896-42.781,19.865-67.643c0-5.835-0.412-11.61-1.175-17.24C299.43,214.562,286.583,189.769,267.817,171.048z"
                            ></path>{" "}
                            <path
                              className="st0"
                              d="M349.015,0v33.551h51.203l-52.912,52.912c-22.276-16.981-49.052-25.564-75.691-25.54 c-31.903-0.024-64.019,12.22-88.37,36.617c-17.424,17.378-28.622,38.714-33.627,61.12c-0.061,0.274-0.091,0.549-0.168,0.778 c-0.198,0.87-0.366,1.747-0.533,2.579c-0.306,1.617-0.58,3.227-0.839,4.836c-0.168,0.969-0.305,1.984-0.412,2.952 c-0.198,1.473-0.366,2.983-0.488,4.493c-0.076,0.87-0.168,1.748-0.213,2.617c-0.03,0.435-0.061,0.877-0.091,1.343 c-0.077,0.877-0.107,1.777-0.138,2.646c-0.061,1.648-0.107,3.326-0.107,4.974c0,1.274,0.046,2.548,0.077,3.852 c0.061,1.282,0.138,2.548,0.198,3.861l0.198,2.822c0,0.466,0.076,0.938,0.106,1.442c2.686,27.874,14.723,55.124,36.037,76.4 c12.908,12.916,28.012,22.436,44.078,28.516c4.866-5.363,8.834-11.572,11.687-18.255c2.944-7.01,4.623-14.426,4.958-22.077 c-10.908-3.921-21.1-10.23-29.888-19.018c-7.949-7.987-13.899-17.118-17.851-26.914c-2.822-6.92-4.638-14.166-5.432-21.475 c-0.518-4.326-0.64-8.689-0.442-13.014c0.061-1.076,0.137-2.113,0.198-3.158c0.076-0.77,0.137-1.541,0.274-2.319 c0-0.298,0.061-0.595,0.092-0.9c0.076-0.74,0.168-1.51,0.305-2.243c0.168-1.007,0.336-2.052,0.534-3.051 c0.884-4.57,2.151-9.063,3.829-13.427c0.306-0.801,0.61-1.571,0.977-2.38c0.336-0.839,0.701-1.678,1.098-2.517 c0.336-0.839,0.733-1.679,1.175-2.487c0.366-0.831,0.808-1.64,1.282-2.441c2.212-4.104,4.822-8.055,7.812-11.817 c0.61-0.77,1.251-1.54,1.877-2.281c1.388-1.579,2.792-3.12,4.302-4.63c1.876-1.877,3.784-3.624,5.767-5.234 c6.5-5.401,13.624-9.635,21.1-12.648c14.662-5.942,30.804-7.453,46.199-4.463c15.41,2.99,29.995,10.36,41.988,22.344 c7.98,7.987,13.884,17.118,17.836,26.906c5.981,14.662,7.492,30.773,4.501,46.176c-3.021,15.394-10.406,29.988-22.337,41.973 c-2.624,2.616-5.37,5.035-8.223,7.178c0.167,2.952,0.259,5.905,0.259,8.818c0.046,15.036-2.35,29.858-6.942,43.956 c16.707-6.042,32.375-15.769,45.726-29.119c24.366-24.327,36.648-56.443,36.617-88.377c0.03-26.647-8.559-53.377-25.571-75.691 l52.912-52.912v51.226h33.55V0H349.015z"
                            ></path>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-500">Jenis Kelamin</p>
                      <p className="font-medium">{alumni.data.gender}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 text-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M3.29289 5.29289C3.47386 5.11193 3.72386 5 4 5H20C20.2761 5 20.5261 5.11193 20.7071 5.29289M3.29289 5.29289C3.11193 5.47386 3 5.72386 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.72386 20.8881 5.47386 20.7071 5.29289M3.29289 5.29289L10.5858 12.5857C11.3668 13.3668 12.6332 13.3668 13.4142 12.5857L20.7071 5.29289"
                            stroke="#000000"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                        </g>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">{alumni.data.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 text-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M3 6.5C3 14.5081 9.49187 21 17.5 21C18.166 21 18.8216 20.9551 19.4637 20.8682C20.3747 20.7448 21 19.9292 21 19.01V16.4415C21 15.5807 20.4491 14.8164 19.6325 14.5442L16.4841 13.4947C15.6836 13.2279 14.8252 13.699 14.6206 14.5177C14.3475 15.6102 12.987 15.987 12.1907 15.1907L8.80926 11.8093C8.01301 11.013 8.38984 9.65254 9.48229 9.37943C10.301 9.17476 10.7721 8.31644 10.5053 7.51586L9.45585 4.36754C9.18362 3.55086 8.41934 3 7.55848 3H4.99004C4.0708 3 3.25518 3.62533 3.13185 4.53627C3.0449 5.17845 3 5.83398 3 6.5Z"
                            stroke="#323232"
                            stroke-width="2"
                            stroke-linejoin="round"
                          ></path>{" "}
                        </g>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-500">Telepon</p>
                      <p className="font-medium">{alumni.data.no_wa}</p>
                    </div>
                  </div>
                </div>
                {/* <div className="flex items-start mt-10"> */}
                <a
                  href="/dashboard/profil"
                  className="mt-10 flex text-white font-bold py-3 px-6 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300 bg-black hover:bg-gray-500 cursor-pointer"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                        stroke="#FFFFFF"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                      <path
                        d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                        stroke="#FFFFFF"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>{" "}
                  <span className="ml-3">Edit Profil</span>
                </a>
                {/* </div> */}
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md card-hover">
                <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b">
                  <i className="fas fa-briefcase mr-2 text-green-500"></i>{" "}
                  Informasi Pekerjaan
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 text-center">
                      <svg
                        fill="#000000"
                        viewBox="-2 0 16 16"
                        id="company-16px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            id="Path_133"
                            data-name="Path 133"
                            d="M323.5-192h-9a1.5,1.5,0,0,0-1.5,1.5V-176h12v-14.5A1.5,1.5,0,0,0,323.5-192ZM318-177v-3h2v3Zm6,0h-3v-3.5a.5.5,0,0,0-.5-.5h-3a.5.5,0,0,0-.5.5v3.5h-3v-13.5a.5.5,0,0,1,.5-.5h9a.5.5,0,0,1,.5.5Zm-8-12h2v2h-2Zm4,0h2v2h-2Zm-4,4h2v2h-2Zm4,0h2v2h-2Z"
                            transform="translate(-313 192)"
                          ></path>{" "}
                        </g>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-500">Perusahaan</p>
                      <p className="font-medium">
                        {pekerjaan.data[0].nama_perusahaan}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 text-center">
                      <svg
                        fill="#000000"
                        viewBox="0 0 32 32"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <title>profile1</title>{" "}
                          <path d="M23 11.031c0-0.553-0.448-1-1-1h-3c0 0 0.033-1.204 0.033-2.954 0-1.625-1.346-3.108-3.033-3.108s-2.988 1.411-2.988 3.099c0 1.625-0.012 2.964-0.012 2.964h-3c-0.553 0-1 0.447-1 1 0 0.552 0 1.938 0 1.938h14c0-0.001 0-1.387 0-1.939zM16 8.969c-0.553 0-1-0.448-1-1 0-0.553 0.447-1 1-1 0.552 0 1 0.447 1 1s-0.448 1-1 1zM28 11.031l-4-0.062 0.021 3.104h-16.021v-2.979l-4-0.062c-1.104 0-2 0.896-2 2v14c0 1.104 0.896 2 2 2h24c1.104 0 2-0.896 2-2v-14c0-1.105-0.896-2.001-2-2.001zM10 16.844c1.208 0 2.188 1.287 2.188 2.875s-0.98 2.875-2.188 2.875-2.188-1.287-2.188-2.875 0.98-2.875 2.188-2.875zM5.667 25.979c0 0 0.237-1.902 0.776-2.261s2.090-0.598 2.090-0.598 1.006 1.075 1.434 1.075c0.427 0 1.433-1.075 1.433-1.075s1.552 0.238 2.091 0.598c0.633 0.422 0.791 2.261 0.791 2.261h-8.615zM26 25.031h-9v-1h9v1zM26 23.031h-9v-1h9v1zM26 21.031h-9v-1h9v1zM26 19.031h-9v-1h9v1z"></path>{" "}
                        </g>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-500">Jabatan</p>
                      <p className="font-medium">{pekerjaan.data[0].jabatan}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 text-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                            stroke="#000000"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                          <path
                            d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
                            stroke="#000000"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                        </g>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-500">Lokasi Kantor</p>
                      <p className="font-medium">{pekerjaan.data[0].alamat}</p>
                    </div>
                  </div>
                  <a
                    href="/dashboard/pekerjaan"
                    className="flex text-white font-bold py-3 px-6 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300 bg-black hover:bg-gray-500 cursor-pointer"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                          stroke="#FFFFFF"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                          stroke="#FFFFFF"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>{" "}
                    <span className="ml-3">Lihat Selengkapnya</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-md card-hover">
                <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b">
                  <i className="fas fa-first-aid mr-2 text-red-500"></i>{" "}
                  Informasi Pendidikan
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 text-center">
                      <svg
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#000000"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            fill="var(--ci-primary-color, #000000)"
                            d="M247.759,14.358,16,125.946V184H496V125.638ZM464,152H48v-5.946L248.241,49.642,464,146.362Z"
                            className="ci-primary"
                          ></path>{" "}
                          <path
                            fill="var(--ci-primary-color, #000000)"
                            d="M16,496H496V392H16Zm32-72H464v40H48Z"
                            className="ci-primary"
                          ></path>{" "}
                          <rect
                            width="32"
                            height="160"
                            x="72"
                            y="208"
                            fill="var(--ci-primary-color, #000000)"
                            className="ci-primary"
                          ></rect>{" "}
                          <rect
                            width="32"
                            height="160"
                            x="408"
                            y="208"
                            fill="var(--ci-primary-color, #000000)"
                            className="ci-primary"
                          ></rect>{" "}
                          <rect
                            width="32"
                            height="160"
                            x="184"
                            y="208"
                            fill="var(--ci-primary-color, #000000)"
                            className="ci-primary"
                          ></rect>{" "}
                          <rect
                            width="32"
                            height="160"
                            x="296"
                            y="208"
                            fill="var(--ci-primary-color, #000000)"
                            className="ci-primary"
                          ></rect>{" "}
                        </g>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-500">Universitas</p>
                      <p className="font-medium">
                        {pendidikan.data[0].universitas}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 text-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M4 4.5C4 3.11929 5.11929 2 6.5 2H20V22H6.5C5.11929 22 4 20.8807 4 19.5V4.5Z"
                            stroke="#000000"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                          <path
                            d="M4 19.5V19.5C4 18.1193 5.11928 17 6.49998 17H20"
                            stroke="#000000"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                        </g>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-500">Fakultas</p>
                      <p className="font-medium">
                        {pendidikan.data[0].fakultas}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 text-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M12 4.5L2 9.5L12 14.5L22 9.5L12 4.5Z"
                            stroke="#000000"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                          <path
                            d="M19 11V16L12 19.5L5 16V11"
                            stroke="#000000"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                          <path
                            d="M22 14V18"
                            stroke="#000000"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                        </g>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-500">Program Studi</p>
                      <p className="font-medium">{pendidikan.data[0].prodi}</p>
                    </div>
                  </div>
                  <a
                    href="/dashboard/pendidikan"
                    className="flex text-white font-bold py-3 px-6 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300 bg-black hover:bg-gray-500 cursor-pointer"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                          stroke="#FFFFFF"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                          stroke="#FFFFFF"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>{" "}
                    <span className="ml-3">Lihat Selengkapnya</span>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md card-hover">
                <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b">
                  <i className="fas fa-home mr-2 text-purple-500"></i> Alamat
                  Tempat Tinggal
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 text-center">
                      <i className="fas fa-map-pin text-gray-500"></i>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Alamat Lengkap</p>
                      <p className="font-medium">
                        Jl. Merdeka No. 123, RT 05/RW 02, Kel. Menteng, Kec.
                        Menteng, Jakarta Pusat 10310
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 text-center">
                      <i className="fas fa-city text-gray-500"></i>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Kota</p>
                      <p className="font-medium">Jakarta Pusat</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 text-center">
                      <i className="fas fa-flag text-gray-500"></i>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Negara</p>
                      <p className="font-medium">Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md card-hover">
                <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b">
                  <i className="fas fa-info-circle mr-2 text-yellow-500"></i>{" "}
                  Informasi Tambahan
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 text-center">
                      <i className="fas fa-id-card text-gray-500"></i>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Nomor KTP</p>
                      <p className="font-medium">3175********1234</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 text-center">
                      <i className="fas fa-heart text-gray-500"></i>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Status Pernikahan</p>
                      <p className="font-medium">Belum Menikah</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
