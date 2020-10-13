import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, remove }) => (
  <div className="book book-panel">
    <div className="book-info-container">
      <div className="book-category">{ book.category }</div>
      <div className="book-title">{ book.title }</div>
      <div className="book-author">Author</div>
      <div className="options">
        <button
          className="item-option"
          type="button"
        >
          Comments
        </button>
        <button
          className="item-option"
          type="button"
          onClick={() => {
            remove(book, book.id);
          }}
        >
          Delete
        </button>
        <button
          className="item-option"
          type="button"
        >
          Edit
        </button>
      </div>
    </div>

    <div className="circle-container">
      <div className="circle" />
      <div className="circle-data">
        <span>64%</span>
        <p>Completed</p>
      </div>
    </div>

    <div className="chapter-container">
      <h1 className="chapter">
        CURRENT CHAPTER
      </h1>
      <p className="current-lesson">Chapter 17</p>
      <button className="button-book" type="button">UPDATE PROGRESS</button>
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
