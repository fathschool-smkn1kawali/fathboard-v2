import { Card, CardBody, CardHeader, Tooltip } from "@nextui-org/react";

interface InfoCardProps {
  title: string;
  icon?: React.ReactNode;
  total: number;
  present: number;
  absent: number;
  leave: number;
  presentPercentage: string;
  absentPercentage: string;
  leavePercentage: string;
  onPresentClick: () => void;
  onAbsentClick: () => void;
  onLeaveClick: () => void;
}

export const InfoCard = ({ icon, title, total, present, absent, absentPercentage, presentPercentage, leave, leavePercentage, onPresentClick, onAbsentClick, onLeaveClick}: InfoCardProps) => (
  <Card className="sm:rounded-2xl sm:p-6 pt-4 border-2">
    <CardHeader className="flex gap-2 items-center">
      {icon}
      <h3 className="text-xl sm:text-2xl font-bold">{title ?? "-"}</h3>
    </CardHeader>

    <CardBody>
      <div className="flex flex-col gap-4">
        <div className="cardItem">
          <h3 className="text-2xl sm:text-3xl">{total ?? 0}</h3>
          <h6>Total</h6>
        </div>

        <button onClick={onPresentClick} className="cardItem">
          <div className="flex sm:items-end flex-col sm:flex-row sm:gap-2 *:font-bold">
            <h3 className="text-2xl sm:text-3xl">
              {present ?? 0} /
            </h3>
            <Tooltip size="sm" placement="bottom" color="foreground" content="Persentase Kehadiran">{presentPercentage ?? "0%"}</Tooltip>
          </div>
          <h6>Kehadiran</h6>
        </button>

        <button onClick={onAbsentClick} className="cardItem">
          <div className="flex sm:items-end flex-col sm:flex-row sm:gap-2 *:font-bold">
            <h3 className="text-2xl sm:text-3xl">
              {absent ?? 0} /
            </h3>
            <Tooltip size="sm" placement="bottom" color="foreground" content="Persentase Absen">{absentPercentage ?? "0%"}</Tooltip>
          </div>

          <h6>Tidak Hadir</h6>
        </button>

        <button onClick={onLeaveClick} className="cardItem">
          <div className="flex sm:items-end flex-col sm:flex-row sm:gap-2 *:font-bold">
            <h3 className="text-2xl sm:text-3xl">
              {leave ?? 0} /
            </h3>
            <Tooltip size="sm" placement="bottom" color="foreground" content="Persentase Izin">{leavePercentage ?? "0%"}</Tooltip>
          </div>

          <h6>Izin</h6>
        </button>
      </div>
    </CardBody>
  </Card>
);
