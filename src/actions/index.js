const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const createBook = book => ({
  type: CREATE_BOOK,
  book,
});

const removeBook = (book, id) => ({
  type: REMOVE_BOOK,
  id,
  book,
});

export {
  createBook, removeBook, CREATE_BOOK, REMOVE_BOOK,
};
