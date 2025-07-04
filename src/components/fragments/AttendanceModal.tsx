import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import { AttendanceModalItem } from "./Items/AttendanceModalItem";

// Reusable Modal Component
export interface AttendanceModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  title: string;
  data: {
    id: number;
    name: string;
    time_in: string;
    time_out: string;
    lateness: string;
  }[];
}

export const AttendanceModal = ({ isOpen, onOpenChange, title, data}: AttendanceModalProps) => {

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior="inside" size="xl">
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            <ModalBody className="p-4">
              <div className="space-y-2">
                {data?.length > 0 ? (data.map((item) => (
                    // Card Component Attendance
                    <AttendanceModalItem key={item.id} {...item} />
                  ))
                ) : (
                  <p className="text-sm text-zinc-400">
                    Tidak ada data ditemukan
                  </p>
                )}
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
