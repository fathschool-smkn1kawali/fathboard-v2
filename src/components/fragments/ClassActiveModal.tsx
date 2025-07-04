"use client";

import { Class, Student } from "@/lib/types";
import {
  ModalContent,
  Modal,
  ModalHeader,
  ModalBody,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Divider,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";

interface ClassActiveModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  gradeData: Class;
}

export const ClassActiveModal = ({
  gradeData,
  isOpen,
  onOpenChange,
}: ClassActiveModalProps) => {
  const [selectedStudents, setSelectedStudents] = useState<Student[]>([]);
  const nestedModal = useDisclosure();

  // Filter hanya kelas aktif
  const activeClassData = gradeData?.data?.filter((cls) => cls.status === "Active") ?? [];

  // Sort kelas aktif (jika ada aturan sorting lain, bisa ditambahkan)
  const sortedClassData = activeClassData.sort((a, b) => a.name.localeCompare(b.name));

  const handleOpenNestedModal = (students: Student[]) => {
    setSelectedStudents(students);
    nestedModal.onOpen();
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior="inside"
        size="xl"
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex gap-2 items-center">
                <h5>Detail Kelas {gradeData?.name ?? "-"}</h5>
              </ModalHeader>
              <ModalBody className="p-4">
                {sortedClassData.length > 0 ? (
                  <div className="space-y-4">
                    {sortedClassData.map((classInfo) => (
                      <Card
                        fullWidth
                        key={classInfo?.id}
                        className="border p-2.5 hover:scale-95 transition duration-300 cursor-default"
                      >
                        <CardHeader className="flex items-center gap-4">
                          <h4 className="text-lg font-semibold">
                            {classInfo?.name}
                          </h4>
                          <Chip className="text-sm" size="sm" color="primary">
                            {classInfo?.status}
                          </Chip>
                        </CardHeader>
                        <CardBody>
                          <ul className="list-disc list-inside">
                            <li className="font-semibold">
                              <button
                                onClick={() =>
                                  handleOpenNestedModal(
                                    classInfo?.students_present.data ?? []
                                  )
                                }
                              >
                                Kehadiran:{" "}
                                <span className="text-success underline">
                                  {classInfo?.students_present
                                    .total_student_present ?? 0}{" "}
                                  Siswa
                                </span>
                              </button>
                            </li>
                            <li className="font-semibold">
                              <button
                                onClick={() =>
                                  handleOpenNestedModal(
                                    classInfo?.students_absent.data ?? []
                                  )
                                }
                              >
                                Tidak Hadir:{" "}
                                <span className="text-danger underline">
                                  {classInfo?.students_absent
                                    .total_student_absent ?? 0}{" "}
                                  Siswa
                                </span>
                              </button>
                            </li>
                            <li className="font-semibold">
                              <button
                                onClick={() =>
                                  handleOpenNestedModal(
                                    classInfo?.students_leave.data ?? []
                                  )
                                }
                              >
                                Izin:{" "}
                                <span className="text-warning underline">
                                  {classInfo?.students_leave
                                    .total_student_leave ?? 0}{" "}
                                  Siswa
                                </span>
                              </button>
                            </li>
                          </ul>

                          <Divider className="my-4" />
                          <div>
                            <p className="line-clamp-2 font-semibold">
                              Guru: {classInfo?.teacher ?? "-"}
                            </p>
                            <p className="font-semibold line-clamp-2">
                              Mata Pelajaran: {classInfo?.lesson ?? "-"}
                            </p>
                          </div>
                        </CardBody>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-gray-500">Tidak ada kelas aktif</p>
                )}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* Nested Modal */}
      <Modal
        isOpen={nestedModal.isOpen}
        onOpenChange={nestedModal.onOpenChange}
        size="md"
        scrollBehavior="inside"
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader>
                <h5>Detail Siswa</h5>
              </ModalHeader>
              <ModalBody>
                {selectedStudents.length > 0 ? (
                  selectedStudents.map((item, index) => (
                    <div key={index} className="border p-3 rounded-xl">
                      <p className="line-clamp-2">{item.name}</p>
                      <span className="text-small font-semibold line-clamp-3 text-default-500">
                        Status:{" "}
                        <span
                          className={`${
                            item.status === "Tepat Waktu"
                              ? "text-success"
                              : ["Terlambat", "Absent"].some((prefix) =>
                                  item.status.startsWith(prefix)
                                )
                              ? "text-danger"
                              : "text-warning"
                          }`}
                        >
                          {item.status}
                        </span>
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500">Tidak ada data siswa</p>
                )}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
