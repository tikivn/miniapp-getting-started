export function getDateList() {
  let day = new Date();
  day.setHours(0, 0, 0, 0);
  let rs = [];
  for (let i = 0; i < 21; i++) {
    rs.push({
      content: dateFormat(day),
      value: day.getTime(),
    });
    day.setDate(day.getDate() + 1);
  }
  return rs;
}
function dateFormat(d) {
  d = new Date(d);
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };

  return d.toLocaleDateString('en-US', options).slice(0, -5).replace(',', '');
}
