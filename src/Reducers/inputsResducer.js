import actiontypes from "../Constants/Action-Types";

const initialState = {
  id: -1,
  firstName: "",
  lastName: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontypes.SET_INPUT_FIRSTNAME: {
      const { firstName } = action;
      return {
        ...state,
        firstName,
      };
    }
    case actiontypes.SET_INPUT_LASTNAME: {
      const { lastName } = action;
      return {
        ...state,
        lastName,
      };
    }
    case actiontypes.SET_INPUT_ID: {
      const { id } = action;
      return {
        ...state,
        id,
      };
    }

    case actiontypes.RESET_INPUT: {
      return initialState;
    }
    default:
      return state;
  }
};

export default userReducer;
