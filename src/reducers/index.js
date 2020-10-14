import bookReducer from './books';
import filterReducer from './filter';

const { combineReducers } = require('redux');

const rootReducer = combineReducers(
  {
    books: bookReducer,
    filter: filterReducer,
  },
);

export default rootReducer;
