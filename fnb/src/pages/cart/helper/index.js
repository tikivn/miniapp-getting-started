import { isToday } from '../../../helper/date';
import { formatWLength } from '../../../helper';

export function getAvailableTime(date) {
  let rs = [];
  let start = 7;
  const base = new Date();
  const hour = base.getHours();
  const minute = base.getMinutes();
  if (isToday(date) && hour >= 7) {
    let h = hour - 0;
    let min = minute - 0;
    min += 20;
    if (min >= 60) {
      min = min % 60;
      hour++;
    }
    if (min < 30) rs.push(`${formatWLength(h, 2)}:30`);
    start = h + 1;
  }
  for (let i = start; i < 24; i++) {
    rs.push(`${formatWLength(i, 2)}:00`);
    rs.push(`${formatWLength(i, 2)}:30`);
  }
  return rs;
}

export function getAvailableDate() {
  let rs = [];
  let curDate = new Date();
  rs.push({
    content: 'Today',
    value: curDate.getTime(),
  });
  curDate.setDate(curDate.getDate() + 1);
  rs.push({
    content: 'Tomorrow',
    value: curDate.getTime(),
  });
  curDate.setDate(curDate.getDate() + 1);
  const d = formatWLength(curDate.getDate(), 2);
  const m = formatWLength(curDate.getMonth() + 1, 2);
  const y = curDate.getFullYear();
  rs.push({
    content: `${d}/${m}/${y}`,
    value: curDate.getTime(),
  });
  return rs;
}
