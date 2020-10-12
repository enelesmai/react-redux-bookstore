import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import rootReducer from './reducers';

const randomId = () => parseInt(Math.random() * 1000, 10);

const defaultStore = {
  books: [
    {
      id: randomId(),
      title: 'The Peaceful Warrior',
      category: 'Biography',
    },
    {
      id: randomId(),
      title: 'Harry Potter',
      category: 'Kids',
    },
    {
      id: randomId(),
      title: 'The Martian',
      category: 'Sci-Fi',
    },
  ],
  filter: 'ALL',
};

const store = createStore(rootReducer,
  defaultStore);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
