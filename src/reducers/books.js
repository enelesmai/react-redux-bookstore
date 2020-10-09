import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      let index = state.findIndex(x => x.id ===action.id);
      return [...state.slice(0, index),
        ...state.slice(index + 1, state.length)];
    default:
      return state;
  }
};

export default bookReducer;
