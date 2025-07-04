import { Class } from "@/lib/types";
import { Card, CardBody, CardHeader, Tooltip } from "@nextui-org/react";

interface KbmCardProps {
  gradeData: Class;
  onActiveClassClick: () => void;
  onEmptyClassClick: () => void;
}

export const KbmCard = ({ gradeData, onActiveClassClick, onEmptyClassClick }: KbmCardProps) => (
  <Card className="p-3 border-2 sm:rounded-2xl">
    <CardHeader className="flex gap-3">
      <div className="flex items-center justify-between w-full">
        <h5>Kelas {gradeData?.name ?? "-"}</h5>
        <Tooltip content="Total Siswa">
          <h5>{gradeData?.total_students ?? 0} Siswa</h5>
        </Tooltip>
      </div>
    </CardHeader>

    <CardBody>
      <div>
        {/* Statistik Kehadiran */}
        <div className="py-4 border-y-2 border-dashed space-y-2">
          
          {/* Statistik Kelas */}
          <div className="flex justify-between">
            <h6>Total Kelas:</h6>
            <h6>{gradeData?.total_class ?? 0}</h6>
          </div>

          {/* Kelas Aktif dengan Tombol */}
          <button onClick={onActiveClassClick} className="flex justify-between w-full text-left">
            <h6>Kelas Aktif:</h6>
            <h6 className="text-success">{gradeData?.active_class ?? 0}</h6>
          </button>

          {/* Kelas Kosong dengan Tombol */}
          <button onClick={onEmptyClassClick} className="flex justify-between w-full text-left">
            <h6>Kelas Kosong:</h6>
            <h6 className="text-danger">{gradeData?.empty_class ?? 0}</h6>
          </button>
        </div>

        {/* Persentase */}
        <div className="pt-4 flex justify-center gap-4 sm:gap-8">
          <div className="text-center">
            <p className="text-sm text-gray-500">Kelas Aktif %</p>
            <h4 className="text-success">
              {gradeData?.percentage_active_class ?? '0%'}
            </h4>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-500">Kelas Kosong %</p>
            <h4 className="text-danger">
              {gradeData?.percentage_empty_class ?? '0%'}
            </h4>
          </div>
        </div>

      </div>
    </CardBody>
  </Card>
);
