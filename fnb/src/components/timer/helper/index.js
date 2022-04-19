import { formatWLength } from '../../../helper';

export function timeFormat(s) {
  let sec = s;
  const h = Math.floor(s / 3600);
  sec = s % 3600;
  const m = Math.floor(s / 60);
  sec = s % 60;
  return (
    (h ? `${formatWLength(h, 2)}:` : '') +
    `${formatWLength(m, 2)}:${formatWLength(sec, 2)}`
  );
}
