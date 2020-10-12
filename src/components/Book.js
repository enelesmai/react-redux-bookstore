import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, remove }) => (
  <tr>
    <td>{ book.id }</td>
    <td>{ book.title }</td>
    <td>{ book.category }</td>
    <td>
      <button
        type="button"
        onClick={() => {
          remove(book, book.id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }),
  remove: PropTypes.func.isRequired,
};

Book.defaultProps = {
  book: [
    {
      id: 0,
      title: '',
      category: '',
    },
  ],
};

export default Book;
