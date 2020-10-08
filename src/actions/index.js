const createBook = (book) => {
  return {
    type: 'CREATE_BOOK',
    book
  }
}

const removeBook = (book, index) => {
  return {
    type: 'REMOVE_BOOK',
    index,
    book
  }
}

export { createBook, removeBook }
