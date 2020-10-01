import { combineReducers } from "redux";
import userReducer from "./userReducer";
import counterReducer from "./counterReducer";
import { reducer as formReducer } from "redux-form";

const commonReducer = combineReducers({
  form: formReducer,
  userReducer,
  counterReducer,
});

export default commonReducer;
