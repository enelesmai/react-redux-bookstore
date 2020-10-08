import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = ({ books }) => (
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
        <Book key={book.id} id={book.id} title={book.title} category={book.category} />
      ))}
    </tbody>

  </table>
);

BooksList.defaultProps = {
  books: [],
};

BooksList.propTypes = {
  books: PropTypes.objectOf(PropTypes.array),
};

const MapStateToProps = state => ({
  books: state.books,
});

export default connect(MapStateToProps)(BooksList);
