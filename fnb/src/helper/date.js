import { formatWLength } from './index';

export function isToday(v) {
  const d = new Date(v);
  const td = new Date();
  return td.setHours(0, 0, 0, 0) === d.setHours(0, 0, 0, 0);
}
export function getNearestAvailableTime() {
  const base = new Date();
  const hour = base.getHours();
  const minute = base.getMinutes();
  let h = hour - 0;
  let min = minute - 0;
  if (min < 30) return `${formatWLength(h, 2)}:30`;
  return `${formatWLength(h + 1, 2)}:00`;
}
