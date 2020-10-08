import React from 'react';
import PropTypes from 'prop-types';
import { Connect, connect } from 'react-redux';
import Book from '../components/Book';

const BookList = ({books}) => {

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
                { books.map((book) => {
                    <Book id={book.id} title={book.title} category={book.category} />
                })}
            </tbody>

        </table>
    )
}

BookList.propTypes = {
    books: PropTypes.array
};

const MapStateToProps = (state) => {
    return {
        books: state.books
    }
}

export default connect(MapStateToProps)(books)