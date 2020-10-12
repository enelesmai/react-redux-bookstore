import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

const BooksList = ({ books, removeBook }) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };

  return (
    <table>
      <thead>
        <tr>
          <td>Book ID</td>
          <td>Title</td>
          <td>Category</td>
        </tr>
      </thead>
      <tbody>
        { books.map(book => (
          <Book key={book.id} book={book} remove={handleRemoveBook} />
        ))}
      </tbody>

    </table>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ),
  removeBook: PropTypes.func.isRequired,
};

BooksList.defaultProps = {
  books: [],
};

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(removeBook(book, book.id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
