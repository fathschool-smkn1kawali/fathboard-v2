import { AttendanceModal } from "@/components/fragments/AttendanceModal";
import { InfoCard } from "@/components/fragments/CardInfo";
import { useGetData } from "@/lib/hooks/GET/useGetData";
import { useDisclosure } from "@nextui-org/react";
import { PiStudent } from "react-icons/pi";
import { GrUserManager } from "react-icons/gr";
import { TbUserCog } from "react-icons/tb";

export const Information = () => {
  const { data: dataStudent } = useGetData('students');
  const { data: dataTeacher } = useGetData('teachers');
  const { data: dataAdmin } = useGetData('administrations');

  const student = dataStudent?.data?.data?.students;
  const teacher = dataTeacher?.data?.data?.teachers;
  const admin = dataAdmin?.data?.data?.admins;

  // useDisclosure to open and close modal
  const studentPresent = useDisclosure();
  const studentAbsent = useDisclosure();
  const studentLeave = useDisclosure();

  const teacherPresent = useDisclosure();
  const teacherAbsent = useDisclosure();
  const teacherLeave = useDisclosure();

  const adminPresent = useDisclosure();
  const adminAbsent = useDisclosure();
  const adminLeave = useDisclosure();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 sm:gap-6">
      <InfoCard
        icon={<PiStudent size={26} />}
        title="Informasi Siswa"
        total={student?.total}
        present={student?.present}
        absent={student?.absent}
        leave={student?.leave}
        presentPercentage={student?.presentPercentage}
        absentPercentage={student?.absentPercentage}
        leavePercentage={student?.leavePercentage}
        onPresentClick={studentPresent.onOpen}
        onAbsentClick={studentAbsent.onOpen}
        onLeaveClick={studentLeave.onOpen}
      />

      <InfoCard
        icon={<GrUserManager size={24} />}
        title="Informasi Guru"
        total={teacher?.total}
        present={teacher?.present}
        absent={teacher?.absent}
        leave={teacher?.leave}
        presentPercentage={teacher?.presentPercentage}
        absentPercentage={teacher?.absentPercentage}
        leavePercentage={teacher?.leavePercentage}
        onPresentClick={teacherPresent.onOpen}
        onAbsentClick={teacherAbsent.onOpen}
        onLeaveClick={teacherLeave.onOpen}
      />

      <InfoCard
        icon={<TbUserCog size={24}  />}
        title="Informasi Tata Usaha"
        total={admin?.total}
        present={admin?.present}
        absent={admin?.absent}
        leave={admin?.leave}
        presentPercentage={admin?.presentPercentage}
        absentPercentage={admin?.absentPercentage}
        leavePercentage={admin?.leavePercentage}
        onPresentClick={adminPresent.onOpen}
        onAbsentClick={adminAbsent.onOpen}
        onLeaveClick={adminLeave.onOpen}
      />

      {/* -------------------------------------------------------------------------------------- */}

      <div>
        {/* MODAL SISWA HADIR */}
        <AttendanceModal
          isOpen={studentPresent.isOpen}
          onOpenChange={studentPresent.onOpenChange}
          title="Daftar Kehadiran"
          data={student?.dataPresent}
        />

        {/* MODAL SISWA TIDAK HADIR */}
        <AttendanceModal
          isOpen={studentAbsent.isOpen}
          onOpenChange={studentAbsent.onOpenChange}
          title="Daftar Tidak Hadir"
          data={student?.dataAbsent}
        />

        {/* MODAL SISWA IZIN */}
        <AttendanceModal
          isOpen={studentLeave.isOpen}
          onOpenChange={studentLeave.onOpenChange}
          title="Daftar Siswa Izin"
          data={student?.dataLeave}
        />
      </div>

      <div>
        {/* MODAL GURU HADIR */}
        <AttendanceModal
          isOpen={teacherPresent.isOpen}
          onOpenChange={teacherPresent.onOpenChange}
          title="Daftar Kehadiran"
          data={teacher?.dataPresent}
        />

        {/* MODAL GURU TIDAK HADIR */}
        <AttendanceModal
          isOpen={teacherAbsent.isOpen}
          onOpenChange={teacherAbsent.onOpenChange}
          title="Daftar Tidak Hadir"
          data={teacher?.dataAbsent}
        />

        {/* MODAL GURU IZIN */}
        <AttendanceModal
          isOpen={teacherLeave.isOpen}
          onOpenChange={teacherLeave.onOpenChange}
          title="Daftar Guru Izin"
          data={teacher?.dataLeave}
        />
      </div>

      <div>
        {/* MODAL TATA USAHA HADIR */}
        <AttendanceModal
          isOpen={adminPresent.isOpen}
          onOpenChange={adminPresent.onOpenChange}
          title="Daftar Kehadiran"
          data={admin?.dataPresent}
        />

        {/* MODAL TATA USAHA TIDAK HADIR */}
        <AttendanceModal
          isOpen={adminAbsent.isOpen}
          onOpenChange={adminAbsent.onOpenChange}
          title="Daftar Tidak Hadir"
          data={admin?.dataAbsent}
        />

        {/* MODAL TATA USAHA IZIN */}
        <AttendanceModal
          isOpen={adminLeave.isOpen}
          onOpenChange={adminLeave.onOpenChange}
          title="Daftar Guru Izin"
          data={admin?.dataLeave}
        />
      </div>


    </div>
  );
};
