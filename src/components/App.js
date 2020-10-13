import React from 'react';
import BookForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';

const App = () => (
  <div className="app">
    <header className="app-header">
      <div className="left-side">
        <h1>Bookstore CMS</h1>
        <span>BOOKS</span>
        <span />
      </div>
      <div className="avatar" />
    </header>
    <div className="container">
      <div className="book-list">
        <BooksList />
      </div>
      <div className="book-form-container">
        <h1>ADD NEW BOOK</h1>
        <BookForm />
      </div>
    </div>
  </div>
);

export default App;
