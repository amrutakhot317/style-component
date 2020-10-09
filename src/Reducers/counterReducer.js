import actiontypes from "../Constants/Action-Types";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case actiontypes.INCREMENT:
      return state + 1;
    case actiontypes.DECREMENT:
      return state - 1;
    case actiontypes.RESET:
      return 0;
    default:
      return state;
  }
};

export default counterReducer;
