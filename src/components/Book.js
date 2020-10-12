import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, remove }) => (
  <div className="book">
    <div className="book-cagegory">{ book.category }</div>
    <div className="book-title">{ book.title }</div>
    <div className="book-author">Author</div>
    <div className="book-id">{ book.id }</div>
    <div>
      <button
        type="button"
        onClick={() => {
          remove(book, book.id);
        }}
      >
        Delete
      </button>
    </div>
  </div>
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
