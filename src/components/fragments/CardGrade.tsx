import { Class } from "@/lib/types";
import { Card, CardBody, CardHeader, Tooltip} from "@nextui-org/react";

// Grade Card Component
interface GradeCardProps {
  gradeData: Class;
  onClick: () => void;
}

export const GradeCard = ({ gradeData, onClick }: GradeCardProps) => (
  <Card isPressable onPress={onClick} className="p-3 border-2">
    
    <CardHeader className="flex gap-3">
      <div className="flex items-center justify-between w-full">
        <h5>Kelas {gradeData?.name ?? '-'}</h5>
        <Tooltip content="Total Siswa">
          <h5>{gradeData?.total_students ?? 0} Siswa</h5>
        </Tooltip>
      </div>
    </CardHeader>

    <CardBody>
      <div>
        <div className="py-4 border-y-2 border-dashed space-y-2">
          <div className="flex justify-between">
            <h6>Kehadiran:</h6>
            <h6 className="text-success">{gradeData?.total_present ?? 0}</h6>
          </div>
          <div className="flex justify-between">
            <h6>Tidak Hadir:</h6>
            <h6 className="text-danger">{gradeData?.total_absent ?? 0}</h6>
          </div>
          <div className="flex justify-between">
            <h6>Izin:</h6>
            <h6 className="text-warning">{gradeData?.total_leave ?? 0}</h6>
          </div>
          <div className="flex justify-between">
            <h6>Total Kelas:</h6>
            <h6>{gradeData?.total_class ?? 0}</h6>
          </div>
          <div className="flex justify-between">
            <h6>Kelas Aktif:</h6>
            <h6>{gradeData?.active_class ?? 0}</h6>
          </div>
          <div className="flex justify-between">
            <h6>Kelas Kosong:</h6>
            <h6>{gradeData?.empty_class ?? 0}</h6>
          </div>
        </div>

        <div className="pt-4 flex justify-center gap-4 sm:gap-8">
          <div className="text-center">
            <p className="text-sm text-gray-500">Kehadiran %</p>
            <h4 className="text-success">
              {gradeData?.percentage_present ?? '0%'}
            </h4>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-500">Tidak Hadir %</p>
            <h4 className="text-danger">
              {gradeData?.percentage_absent ?? '0%'}
            </h4>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500">Izin %</p>
            <h4 className="text-warning">
              {gradeData?.percentage_leave ?? '0%'}
            </h4>
          </div>
        </div>

      </div>
    </CardBody>
  </Card>
);
