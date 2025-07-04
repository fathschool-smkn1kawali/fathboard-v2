import { formatLateness, formatTime } from "@/lib/utils/moment";
import { Avatar, Card, CardBody, CardHeader, Chip } from "@nextui-org/react";

export const AttendanceModalItem = (item: Student) => {
  return (
    <Card key={item.id}>
      <CardHeader className="flex flex-row gap-4 items-center flex-shrink px-4 py-2">
        <Avatar src={item?.user?.profile_photo_url ?? item.profile_photo_url ?? ""} size="sm"/>
        <div className={item.course && "flex gap-3 items-center"}>
          <h6 className="line-clamp-1">
            {item?.user?.name ?? item.name ?? "-"}
          </h6>
          {item?.course && (
            <Chip variant="flat" size="sm">{item?.course ?? "-"}</Chip>
          )}
        </div>
      </CardHeader>

      <CardBody>
        <ul className="list-disc list-inside">
          {item?.time_in && <li>Datang: {formatTime(item.time_in) ?? "-"}</li>}
          {item?.lateness && (
            <li className="flex gap-2 items-center">
              <li>Status: </li>
              <p className={item.lateness === 'Tepat Waktu' ? "text-success" : "text-danger"}>
                {item.lateness === 'Tepat Waktu' ? formatLateness(item.lateness) : `Terlambat: ${formatLateness(item.lateness) ?? "-"}`}
              </p>
            </li>
          )}
          {item?.time_out && <li>Pulang: {formatTime(item.time_out) ?? "-"}</li>}
          {item?.description && <p>Keterangan: {item.description ?? "-"}</p>}
        </ul>
      </CardBody>
    </Card>
  );
};

type Student = {
  id: number;
  name?: string;
  profile_photo_url?: string;
  role?: string;
  
  course?: string; // tambahan dari backend

  description?: string;
  days?: string;

  lateness?: string;
  time_in?: string;
  time_out?: string;
  user?: {
    name?: string;
    username?: string;
    email?: string;
    phone?: string;
    address?: string;
    date_of_birth?: string;
    profile_photo_url?: string;
    role?: string;
  };
};
