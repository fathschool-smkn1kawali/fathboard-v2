import moment from "moment";
import "moment/locale/id"; // Gunakan bahasa Indonesia

moment.locale("id");

function FormattedTime(dateString = new Date().toISOString()) {
  const date = moment(dateString);
  const now = moment();
  const diffMinutes = now.diff(date, "minutes");
  const diffHours = now.diff(date, "hours");
  const diffDays = now.diff(date, "days");

  if (diffMinutes < 60) {
    return `${diffMinutes} menit yang lalu`;
  } else if (diffHours < 24) {
    return `${diffHours} jam yang lalu`;
  } else if (diffDays === 1) {
    return "Kemarin";
  } else {
    return date.format("dddd, D MMMM YYYY"); // Contoh: Selasa, 20 Januari 2025
  }
}

function getTimeNow() {
  return moment().format("dddd, D MMMM YYYY");
}

export { FormattedTime, getTimeNow };
