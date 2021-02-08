import { GET_VALUE } from "../actions/example_second";

const initialState = {
  value: 0,
};

const SECOND_REDUCER = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_VALUE: {
      return {
        ...state,
        value: payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default SECOND_REDUCER;
