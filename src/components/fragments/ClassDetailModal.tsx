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

interface ClassModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  gradeData: Class;
}

export const ClassDetailModal = ({
  gradeData,
  isOpen,
  onOpenChange,
}: ClassModalProps) => {
  const [selectedStudents, setSelectedStudents] = useState<Student[]>([]);
  const nestedModal = useDisclosure();

  // Filter dan sort data
  const sortedClassData = gradeData?.data?.sort((a, b) => {
    if (a.status === "Active" && b.status === "Empty") return -1;
    if (a.status === "Empty" && b.status === "Active") return 1;

    return 0;
  });

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
                <h5>Detail Per Kelas {gradeData?.name ?? "-"}</h5>
              </ModalHeader>
              <ModalBody className="p-4">
                <div className="space-y-4">
                  {sortedClassData?.map((classInfo) => (
                    // Card Component Individual
                    <Card
                      fullWidth
                      key={classInfo?.id}
                      className="border p-2.5 hover:scale-95 transition duration-300 cursor-default"
                    >
                      <CardHeader className="flex items-center gap-4">
                        <h4 className="text-lg font-semibold">
                          {classInfo?.name}
                        </h4>
                        <Chip
                          className="text-sm"
                          size="sm"
                          color={
                            classInfo?.status === "Active"
                              ? "primary"
                              : "danger"
                          }
                        >
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

                        {classInfo?.status === "Active" && (
                          <>
                            <Divider className="my-4" />
                            <div>
                              <p className="line-clamp-2 font-semibold">
                                Guru: {classInfo?.teacher ?? "-"}
                              </p>
                              <p className="font-semibold line-clamp-2">
                                Mata Pelajaran: {classInfo?.lesson ?? "-"}
                              </p>
                            </div>
                          </>
                        )}
                      </CardBody>
                    </Card>
                  )) ?? <p>Tidak ada data ditemukan</p>}
                </div>
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
                        <span className={`${item.status === "Tepat Waktu"? "text-success": ["Terlambat", "Absent"].some((prefix) => item.status.startsWith(prefix)) ? "text-danger" : "text-warning"}`}>
                          {item.status}
                        </span>
                      </span>
                    </div>
                  ))
                ) : (
                  <p>Tidak ada data ditemukan</p>
                )}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
