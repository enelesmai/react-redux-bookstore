import React from 'react';
import BookForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bookstore</h1>
      </header>
      <div>
        <BookForm />
        <BooksList />
      </div>
    </div>
  );
}

export default App;
