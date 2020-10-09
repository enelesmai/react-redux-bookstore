import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return [...state.slice(0, state.findIndex(x => x.id === action.id)),
        ...state.slice(state.findIndex(x => x.id === action.id) + 1, state.length)];
    default:
      return state;
  }
};

export default bookReducer;
