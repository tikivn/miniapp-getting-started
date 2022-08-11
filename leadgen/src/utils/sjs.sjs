export const formatDate = (d) => {
  try {
    const date = getDate(d);
    return date.toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  } catch {
    return '';
  }
};

export const getFieldValue = (field) => {
  if (field.value === null || field.value === undefined) {
    return;
  }

  if (['multiple_choice', 'dropdown_field'].includes(field.kind)) {
    return field.options[field.value].title;
  }

  if (field.kind === 'checkbox') {
    return field.options.reduce((rs, item, index) => field.value.includes(index) ? rs.concat(item.title) : rs, []).join(', ');
  }

  return field.value;
}
