const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const options = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
};

export function getTodayStr() {
  const d = getDate();
  return d.toLocaleDateString("vi-VI", options);
}

export const isTomorrow = (d) => {
  const tomorrow = getDate();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toLocaleDateString("vi-VI", options) === d;
};

export const getDayName = (d) => {
  let dateParts = d.split("/");
  let day = getDate(+dateParts[2], dateParts[1] - 1, dateParts[0]).getDay();
  const weekdayName = weekdays[day];
  return weekdayName;
};

export const addMinutes = (time, minsToAdd) => {
  let [hour, min] = time.split(":");
  minsToAdd += parseInt(hour) * 60 + parseInt(min);
  hour = Math.floor(minsToAdd / 60);
  min = minsToAdd % 60;
  min === 0 ? (min = "00") : "";
  return (hour % 24) + ":" + min;
};

export const formatDateTime = (d, t) => {
  let content = "";
  let todayStr = getTodayStr();

  if (d === todayStr) {
    content = "Today";
  } else if (isTomorrow(d)) {
    content = "Tomorrow";
  } else {
    content = getDayName(d);
  }

  if(t === undefined) {
    return `${content} ${d}`
  } else {
  return `${content} ${d}, ${t}`
  }
};


