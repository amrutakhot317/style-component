import { combineReducers } from "redux";
import inputs from "./inputsResducer";
import counterReducer from "./counterReducer";
// import { reducer as formReducer } from "redux-form";
import users from "./userReducer";

const commonReducer = combineReducers({
  // form: formReducer,
  inputs,
  counterReducer,
  users,
});

export default commonReducer;
