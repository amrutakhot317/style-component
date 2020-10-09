import actiontypes from "../Constants/Action-Types";

export default {
  setInputFirstName: (firstName) => ({
    type: actiontypes.SET_INPUT_FIRSTNAME,
    firstName,
  }),
  setInputLastName: (lastName) => ({
    type: actiontypes.SET_INPUT_LASTNAME,
    lastName,
  }),
  setInputId: (id) => ({
    type: actiontypes.SET_INPUT_ID,
    id,
  }),
  resetInputs: () => ({
    type: actiontypes.RESET_INPUT,
  }),
};
