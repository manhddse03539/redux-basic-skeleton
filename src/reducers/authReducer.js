const intinialState = {
  email: '',
  password: '',
};
export const loginReducer = (state = intinialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS': {
      return { user: action.user };
    }
    case 'LOGIN_FAILED': {
      return { error: action.payload.error };
    }
    case 'LOGOUT': {
      return '';
    }
    default:
      return state;
  }
};

export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_USERS_SUCCESS': {
      return { users: action.users };
    }

    default:
      return state;
  }
};
