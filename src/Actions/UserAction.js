import actionTypes from "../Constants/Action-Types";

export default {
  addUser: (user) => ({
    type: actionTypes.ADD_USER,
    user,
  }),
  updateuser: (index, user) => ({
    type: actionTypes.UPDATE_USER,
    index,
    user,
  }),
  deleteUser: (index) => ({
    type: actionTypes.DELETE_USER,
    index,
  }),
  confirm: (index, user) => ({
    type: actionTypes.CONFIRM_USER,
    index,
    user,
  }),
};
