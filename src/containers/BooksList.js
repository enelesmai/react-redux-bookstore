import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({ books, filter, removeBook, changeFilter }) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };

  const handleFilterChange = filter => {
    changeFilter(filter);
  };

  const displayBook = book => {
    if(filter==='All'){
      return true;
    }else if(filter===book.category){
      return true;
    }
  }

  return (
  <div>
    <CategoryFilter change={handleFilterChange} />
    <table>
      <thead>
        <tr>
          <td>Book ID</td>
          <td>Title</td>
          <td>Category</td>
        </tr>
      </thead>
      <tbody>
        { books.filter(b=> displayBook(b)).map(book => (
          <Book key={book.id} book={book} remove={handleRemoveBook} />
        ))}
      </tbody>

    </table>
  </div>
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
  filter: state.filter
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(removeBook(book, book.id));
  },
  changeFilter: filter => {
    dispatch(changeFilter(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
