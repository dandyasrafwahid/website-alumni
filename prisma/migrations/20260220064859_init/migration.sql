-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "nim" TEXT NOT NULL,
    "no_wa" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Alumni" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "nim" TEXT,
    "email" TEXT,
    "gender" TEXT,
    "no_wa" TEXT,
    "tmpt_tinggal" TEXT,
    "user_id" INTEGER,

    CONSTRAINT "Alumni_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pendidikan" (
    "id" SERIAL NOT NULL,
    "jenjang" TEXT,
    "thn_masuk" TEXT,
    "thn_lulus" TEXT,
    "universitas" TEXT,
    "fakultas" TEXT,
    "prodi" TEXT,
    "pendidikan_id" INTEGER,

    CONSTRAINT "Pendidikan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pekerjaan" (
    "id" SERIAL NOT NULL,
    "nama_perusahaan" TEXT,
    "jabatan" TEXT,
    "alamat" TEXT,
    "industri" TEXT,
    "thn_masuk" TEXT,
    "thn_keluar" TEXT,
    "pekerjaan_id" INTEGER,

    CONSTRAINT "Pekerjaan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Loker" (
    "id" SERIAL NOT NULL,
    "judul" TEXT,
    "deskripsi" TEXT,
    "nama_perusahaan" TEXT,
    "industri" TEXT,
    "alamat" TEXT,
    "tgl_terbit" TEXT,
    "tgl_kadaluarsa" TEXT,

    CONSTRAINT "Loker_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "News" (
    "id" SERIAL NOT NULL,
    "judul" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "author" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_nim_key" ON "User"("nim");

-- CreateIndex
CREATE UNIQUE INDEX "Alumni_user_id_key" ON "Alumni"("user_id");

-- AddForeignKey
ALTER TABLE "Alumni" ADD CONSTRAINT "Alumni_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pendidikan" ADD CONSTRAINT "Pendidikan_pendidikan_id_fkey" FOREIGN KEY ("pendidikan_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pekerjaan" ADD CONSTRAINT "Pekerjaan_pekerjaan_id_fkey" FOREIGN KEY ("pekerjaan_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
