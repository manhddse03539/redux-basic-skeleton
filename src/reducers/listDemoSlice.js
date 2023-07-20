const intinialState = {
  list: [],
  task: {},
  taskAdded: {},
  taskDeleted: {},
};
const listReducer = (state = intinialState, action) => {
  switch (action.type) {
    case 'SET_DATA_SUCCESS': {
      return { list: action.listData };
    }
    case 'SET_DATA_FAILED': {
      return { error: action.error };
    }
    case 'GET_TASK_SUCCESS': {
      return { task: action.task };
    }
    case 'GET_TASK_FAILED': {
      return { error: action.error };
    }
    case 'ADD_TASK_SUCCESS': {
      return { taskAdded: action.taskAdded };
    }
    case 'ADD_TASK_FAILED': {
      return { error: action.error };
    }
    case 'DELETE_TASK_SUCCESS': {
      return { taskDeleted: action.taskDeleted };
    }
    case 'DELETE_TASK_FAILED': {
      return { error: action.error };
    }
    default:
      return state;
  }
};

export default listReducer;
