export interface Alumni {
  id: string;
  nama: string;
  angkatan: number;
  pekerjaan: string;
  perusahaan: string;
  lokasi: string;
  email: string;
  foto?: string;
}

// Data sample alumni
export const alumniData: Alumni[] = [
  {
    id: "1",
    nama: "Ahmad Reza Pratama",
    angkatan: 2018,
    pekerjaan: "Software Engineer",
    perusahaan: "PT Telkom Indonesia",
    lokasi: "Jakarta, Indonesia",
    email: "ahmad.reza@telkom.co.id",
  },
  {
    id: "2",
    nama: "Siti Nurhaliza",
    angkatan: 2019,
    pekerjaan: "Product Manager",
    perusahaan: "Gojek",
    lokasi: "Jakarta, Indonesia",
    email: "siti.nurhaliza@gojek.com",
  },
  {
    id: "3",
    nama: "Budi Santoso",
    angkatan: 2017,
    pekerjaan: "Data Analyst",
    perusahaan: "Bank Mandiri",
    lokasi: "Makassar, Indonesia",
    email: "budi.santoso@mandiri.co.id",
  },
  {
    id: "4",
    nama: "Dewi Lestari",
    angkatan: 2020,
    pekerjaan: "Frontend Developer",
    perusahaan: "Tokopedia",
    lokasi: "Jakarta, Indonesia",
    email: "dewi.lestari@tokopedia.com",
  },
  {
    id: "5",
    nama: "Eka Wijaya",
    angkatan: 2018,
    pekerjaan: "System Administrator",
    perusahaan: "PT Pertamina",
    lokasi: "Balikpapan, Indonesia",
    email: "eka.wijaya@pertamina.co.id",
  },
  {
    id: "6",
    nama: "Fiona Ramadhani",
    angkatan: 2019,
    pekerjaan: "QA Engineer",
    perusahaan: "Bukalapak",
    lokasi: "Jakarta, Indonesia",
    email: "fiona.ramadhani@bukalapak.com",
  },
  {
    id: "7",
    nama: "Gunawan Hermanto",
    angkatan: 2017,
    pekerjaan: "Backend Developer",
    perusahaan: "OVO",
    lokasi: "Jakarta, Indonesia",
    email: "gunawan.hermanto@ovo.id",
  },
  {
    id: "8",
    nama: "Hana Kusuma",
    angkatan: 2020,
    pekerjaan: "UI/UX Designer",
    perusahaan: "Grab",
    lokasi: "Jakarta, Indonesia",
    email: "hana.kusuma@grab.com",
  },
  {
    id: "9",
    nama: "Indra Wijaya",
    angkatan: 2016,
    pekerjaan: "DevOps Engineer",
    perusahaan: "Google Cloud",
    lokasi: "Jakarta, Indonesia",
    email: "indra.wijaya@google.com",
  },
  {
    id: "10",
    nama: "Jaya Kusuma",
    angkatan: 2015,
    pekerjaan: "Tech Lead",
    perusahaan: "Amazon Web Services",
    lokasi: "Singapore",
    email: "jaya.kusuma@aws.com",
  },
  {
    id: "11",
    nama: "Karina Dewi",
    angkatan: 2012,
    pekerjaan: "Project Manager",
    perusahaan: "Accenture",
    lokasi: "Jakarta, Indonesia",
    email: "karina.dewi@accenture.com",
  },
  {
    id: "12",
    nama: "Luki Prasetyo",
    angkatan: 2010,
    pekerjaan: "Senior Developer",
    perusahaan: "Microsoft",
    lokasi: "Jakarta, Indonesia",
    email: "luki.prasetyo@microsoft.com",
  },
  {
    id: "13",
    nama: "Maya Surya",
    angkatan: 2008,
    pekerjaan: "CTO",
    perusahaan: "PT Bank BCA",
    lokasi: "Jakarta, Indonesia",
    email: "maya.surya@bca.co.id",
  },
  {
    id: "14",
    nama: "Raka Hermawan",
    angkatan: 2009,
    pekerjaan: "Solutions Architect",
    perusahaan: "IBM Indonesia",
    lokasi: "Jakarta, Indonesia",
    email: "raka.hermawan@ibm.com",
  },
];
