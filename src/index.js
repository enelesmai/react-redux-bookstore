import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import rootReducer from './reducers';

const defaultStore = {
  books: [
    {
      id: parseInt(Math.random() * 1000, 10),
      title: 'The Peaceful Warrior',
      category: 'Biography',
    },
    {
      id: parseInt(Math.random() * 1000, 10),
      title: 'Harry Potter',
      category: 'Kids',
    },
    {
      id: parseInt(Math.random() * 1000, 10),
      title: 'The Martian',
      category: 'Sci-Fi',
    },
  ],
};

const store = createStore(rootReducer,
  { books: defaultStore.books });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
