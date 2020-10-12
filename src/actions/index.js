const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const CHANGE_FILTER = 'CHANGE_FILTER';

const createBook = book => ({
  type: CREATE_BOOK,
  book,
});

const removeBook = (book, id) => ({
  type: REMOVE_BOOK,
  id,
  book,
});

const changeFilter = category => ({
  type: CHANGE_FILTER,
  category,
});

export {
  createBook, removeBook, changeFilter, CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER,
};
