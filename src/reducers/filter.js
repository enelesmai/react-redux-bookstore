import { CHANGE_FILTER } from '../actions/index';

const filterReducer = (state = 'ALL', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return 
    default:
      return state;
  }
};

export default filterReducer;
