import actiontypes from "../Constants/Action-Types";

const initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontypes.ADD_USER: {
      const users = [...state.users];
      console.log(users);
      users.push(action.user);
      return {
        users,
      };
    }
    case actiontypes.UPDATE_USER: {
      const { index, user } = action;
      const users = [...state.users];
      users[index] = user;
      return {
        users,
      };
    }
    case actiontypes.CONFIRM_USER: {
      const { index, user } = action;
      const users = [...state.users];
      users[index] = user;
      return {
        users,
      };
    }

    case actiontypes.REMOVE_USER: {
      const { index } = action;
      const users = [...state.users];
      delete users[index];
      return {
        users,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
