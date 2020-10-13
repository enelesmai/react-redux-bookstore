import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({
  books, filter, removeBook, changeFilter
}) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };

  const handleFilterChange = filter => {
    changeFilter(filter);
  };

  const displayBook = book => {
    if (filter === 'All') {
      return true;
    } if (filter === book.category) {
      return true;
    }
    return false;
  };

  return (
    <div>
      <CategoryFilter change={handleFilterChange} />
      <div>
        <div>
          { books.filter(b => displayBook(b)).map(book => (
            <Book key={book.id} book={book} remove={handleRemoveBook} />
          ))}
        </div>
      </div>
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
  filter: PropTypes.string,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

BooksList.defaultProps = {
  books: [],
  filter: '',
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
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
