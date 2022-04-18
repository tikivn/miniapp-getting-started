import { formatWLength } from "../../../helper";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const options = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
};

export function dateFormat(d) {
  d = new Date(d);
  return {
    content: d.toLocaleDateString("vi-VI", options),
    value: d.getTime(),
  };
}

export function isToday(d) {
  d = new Date(d);
  return d.toDateString() === new Date().toDateString();
}

export function isPreviousDate(d) {
  d = new Date(d);
  let c = new Date();
  c.setHours(0, 0, 0, 0);
  d.setHours(0, 0, 0, 0);
  return d.getTime() < c.getTime();
}

export function getToday() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return {
    content: d.toLocaleDateString("vi-VI", options),
    value: d.getTime(),
  };
}

export const isTomorrow = (d) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toLocaleDateString("vi-VI", options) === d;
};

export const getTomorrow = () => {
  return getNthDateFromToday(1);
};

export const isSameDate = (d1, d2) => {
  return new Date(d1).toDateString() === new Date(d2).toDateString();
};

export const getNthDateFromToday = (n) => {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return {
    content: d.toLocaleDateString("vi-VI", options),
    value: d.getTime(),
  };
};

export function getTimeList(start, end) {
  let rs = [];
  for (let i = 13; i < 21; i++) {
    rs.push(`${i}:00`);
    rs.push(`${i}:30`);
  }
  return rs;
}

export const getDayName = (d) => {
  let dateParts = d.split("/");
  let day = new Date(+dateParts[2], dateParts[1] - 1, dateParts[0]).getDay();
  const weekdayName = weekdays[day];
  return weekdayName;
};

export const formatDateTime = (d, t) => {
  let content = "";
  let todayStr = getToday().content;

  if (d === todayStr) {
    content = "Today";
  } else if (isTomorrow(d)) {
    content = "Tomorrow";
  } else {
    content = getDayName(d);
  }

  // eslint-disable-next-line no-undefined
  if (t === undefined) {
    return `${content} ${d}`;
  } else {
    return `${content} ${t}, ${d}`;
  }
};

// 24 > h >= 7
export function getNearestAvailableTime(d) {
  let rs = "00:00";
  let base = d ? new Date(d) : new Date();
  if (!isToday(base)) return "07:00";
  base = new Date();
  let hour = base.getHours();
  let minute = base.getMinutes();
  if (hour < 7) {
    hour = 6;
    minute = 30;
  }
  if (minute < 30) rs = `${formatWLength(hour, 2)}:30`;
  else rs = `${formatWLength(hour + 1, 2)}:00`;
  return rs;
}

export function isAvailableTime(t) {
  if (t > "23:30" || t < "07:00") return false;
  return t >= getNearestAvailableTime();
}

export function getAvailableTime(date) {
  let rs = [];
  let start = 7;
  const base = new Date();
  const hour = base.getHours();
  const minute = base.getMinutes();
  if (isToday(date) && hour >= 7) {
    let h = hour - 0;
    let min = minute - 0;
    if (min < 30) rs.push(`${formatWLength(h, 2)}:30`);
    start = h + 1;
  }
  for (let i = start; i < 24; i++) {
    rs.push(`${formatWLength(i, 2)}:00`);
    rs.push(`${formatWLength(i, 2)}:30`);
  }
  return rs;
}
