const intinialState = {
  list: [],
};
const listReducer = (state = intinialState, action) => {
  switch (action.type) {
    case 'SET_DATA_SUCCESS': {
      return { list: action.listData };
    }
    case 'SET_DATA_FAILED': {
      return { error: action.error };
    }
    default:
      return state;
  }
};

export default listReducer;
