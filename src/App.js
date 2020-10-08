import React from 'react';
import './App.css';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import BookForm from './containers/BooksForm';
import BooksList from './containers/BooksList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React-Redux-App</h1>
      </header>
      <div>
        <BookForm />
        <BooksList />
      </div>
    </div>
  );
}

export default App;
