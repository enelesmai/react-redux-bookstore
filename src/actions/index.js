const createBook = book => ({
  type: 'CREATE_BOOK',
  book,
});

const removeBook = (book, index) => ({
  type: 'REMOVE_BOOK',
  index,
  book,
});

export { createBook, removeBook };
