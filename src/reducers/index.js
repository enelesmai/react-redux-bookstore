import bookReducer from './books'
const { combineReducers } = require("redux");

const rootReducer = combineReducers(
  {
    books: bookReducer,
  }
);

export default rootReducer;