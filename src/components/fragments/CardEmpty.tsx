"use client";

import { Class } from "@/lib/types";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

interface EmptyCardProps {
  gradeData: Class;
  onEmptyClassClick: () => void; // Fungsi untuk menangani klik tombol "Lihat Semua"
}

export const EmptyCard = ({ gradeData, onEmptyClassClick }: EmptyCardProps) => {
  // Filter hanya kelas kosong
  const emptyClassData = gradeData?.data?.filter((cls) => cls.status === "Empty") ?? [];

  // Urutkan berdasarkan nama kelas
  const sortedClassData = emptyClassData.sort((a, b) => a.name.localeCompare(b.name));

  // Tampilkan hanya 3 kelas pertama
  const displayedClasses = sortedClassData.slice(0, 3);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-3">Kelas Kosong</h2>

      {displayedClasses.length > 0 ? (
        displayedClasses.map((classInfo) => (
          <Card
            key={classInfo?.id}
            className="border p-2.5"
          >
            <CardHeader className="flex items-center gap-4">
              <h4 className="text-lg font-semibold">{classInfo?.name}</h4>
            </CardHeader>
            <CardBody>
              <p className="font-semibold">Guru: {classInfo?.teacher ?? "-"}</p>
              <p className="font-semibold">Mata Pelajaran: {classInfo?.lesson ?? "-"}</p>
            </CardBody>
          </Card>
        ))
      ) : (
        <p className="text-center text-gray-500">Tidak ada kelas kosong</p>
      )}

      {/* Tombol "Lihat Semua" jika ada lebih dari 3 kelas kosong */}
      {emptyClassData.length > 3 && (
        <button onClick={onEmptyClassClick} className="text-blue-500 hover:underline mt-2">
          Lainnya
        </button>
      )}
    </div>
  );
};
