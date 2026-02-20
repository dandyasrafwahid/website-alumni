/*
  Warnings:

  - You are about to drop the `Alumni` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Loker` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `News` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pekerjaan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pendidikan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Alumni" DROP CONSTRAINT "Alumni_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Pekerjaan" DROP CONSTRAINT "Pekerjaan_pekerjaan_id_fkey";

-- DropForeignKey
ALTER TABLE "Pendidikan" DROP CONSTRAINT "Pendidikan_pendidikan_id_fkey";

-- DropTable
DROP TABLE "Alumni";

-- DropTable
DROP TABLE "Loker";

-- DropTable
DROP TABLE "News";

-- DropTable
DROP TABLE "Pekerjaan";

-- DropTable
DROP TABLE "Pendidikan";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "users" (
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

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "alumni" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "nim" TEXT,
    "email" TEXT,
    "gender" TEXT,
    "no_wa" TEXT,
    "tmpt_tinggal" TEXT,
    "user_id" INTEGER,

    CONSTRAINT "alumni_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pendidikan" (
    "id" SERIAL NOT NULL,
    "jenjang" TEXT,
    "thn_masuk" TEXT,
    "thn_lulus" TEXT,
    "universitas" TEXT,
    "fakultas" TEXT,
    "prodi" TEXT,
    "pendidikan_id" INTEGER,

    CONSTRAINT "pendidikan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pekerjaan" (
    "id" SERIAL NOT NULL,
    "nama_perusahaan" TEXT,
    "jabatan" TEXT,
    "alamat" TEXT,
    "industri" TEXT,
    "thn_masuk" TEXT,
    "thn_keluar" TEXT,
    "pekerjaan_id" INTEGER,

    CONSTRAINT "pekerjaan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "loker" (
    "id" SERIAL NOT NULL,
    "judul" TEXT,
    "deskripsi" TEXT,
    "nama_perusahaan" TEXT,
    "industri" TEXT,
    "alamat" TEXT,
    "tgl_terbit" TEXT,
    "tgl_kadaluarsa" TEXT,

    CONSTRAINT "loker_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news" (
    "id" SERIAL NOT NULL,
    "judul" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "author" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "news_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_nim_key" ON "users"("nim");

-- CreateIndex
CREATE UNIQUE INDEX "alumni_user_id_key" ON "alumni"("user_id");

-- AddForeignKey
ALTER TABLE "alumni" ADD CONSTRAINT "alumni_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pendidikan" ADD CONSTRAINT "pendidikan_pendidikan_id_fkey" FOREIGN KEY ("pendidikan_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pekerjaan" ADD CONSTRAINT "pekerjaan_pekerjaan_id_fkey" FOREIGN KEY ("pekerjaan_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
