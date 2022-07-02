const properties = {
  init: {
    background: 'transparent',
    icon: '',
  },
  info: {
    background: '#27272A',
    icon: 'warning_glyph',
  },
  success: {
    background: '#00AB56',
    icon: 'success_glyph',
  },
  fail: {
    background: '#FF424F',
    icon: 'warning_glyph',
  },
};

export const getProperties = (type, propertyName) => {
  if (properties[type] && properties[type][propertyName])
    return properties[type] && properties[type][propertyName];
};
