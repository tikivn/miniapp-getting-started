export function filterNotImplementedPages(item) {
  return !!item.path;
}

export function debounce(func, wait) {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
