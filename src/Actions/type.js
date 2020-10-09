import actiontypes from "../Constants/Action-Types";

export const increment = () => {
  return {
    type: actiontypes.INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: actiontypes.DECREMENT,
  };
};

export const reset = () => {
  return {
    type: actiontypes.RESET,
  };
};

export const addUser = (data) => {
  return {
    type: actiontypes.ADD_USER,
    payload: data,
  };
};

export const remove = (index) => {
  return {
    type: actiontypes.REMOVE_USER,
    index,
  };
};
