// import { GET_NAME } from "../actions/example";

const initialState = {
  name: "'name'",
};

const EXAMPLE_REDUCER = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_NAME": {
      return {
        ...state,
        name: payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default EXAMPLE_REDUCER;
