const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const createBook = book => ({
  type: CREATE_BOOK,
  book,
});

const removeBook = (book, index) => ({
  type: REMOVE_BOOK,
  index,
  book,
});

export {
  createBook, removeBook, CREATE_BOOK, REMOVE_BOOK,
};
