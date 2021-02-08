import { combineReducers } from "redux";
import EXAMPLE_REDUCER from "./example";
import SECOND_REDUCER from "./example_second";
import DEBOUNCE_REDUCER from "./debounce"

const appReducer = combineReducers({
  EXAMPLE_REDUCER,
  SECOND_REDUCER,
  DEBOUNCE_REDUCER
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
