export const createContent = (p) => {
  const attr = p.selectedAttributes.map((a) =>
    a.values.reduce(
      (pre, v, i, vs) => pre + v + (i < vs.length - 1 ? ', ' : ''),
      `${a.name}: `,
    ),
  );
  return `${p.name} ${attr} (x${p.number})`;
};
