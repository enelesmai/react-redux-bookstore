import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, remove }) => {

  const anotherThing = remove;

  return (
    <tr>
      <td>{ book.id }</td>
      <td>{ book.title }</td>
      <td>{ book.category }</td>
      <td>
        <button type="button" onClick={()=>{
          console.log(book, book.id)
          anotherThing(book, book.id);
          }}>Delete</button>
      </td>
    </tr>
  )
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }),
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
