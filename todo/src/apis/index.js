export const getTodosApi = async () =>
  Promise.resolve([
    { text: 'Learning HTML', completed: true },
    { text: 'Learning Javascript', completed: true },
    { text: 'Learning React', completed: false },
  ]);
