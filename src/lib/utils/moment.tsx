import moment from "moment";
import "moment/locale/id";

moment.locale("id");

export function formatLateness (lateness: string): string {
  const match = lateness.match(/(\d+)\smenit/);
  const minutes = match ? parseInt(match[1], 10) : 0;

  if (minutes >= 60) {
    const duration = moment.duration(minutes, "minutes");
    const hours = Math.floor(duration.asHours());
    const remainingMinutes = duration.minutes();
    return `${hours} jam${remainingMinutes > 0 ? `, ${remainingMinutes} menit` : ""}`;
  }

  return lateness;
};


export function formatTime (time: string) {
  return moment(time, 'HH:mm:ss').format('h:mm:ss') ?? "-";
};

export function getCurrentTime () {
  return moment().format("HH:mm");
};

export function getCurrentDate () {
  return moment().format("dddd, D MMMM YYYY");
};