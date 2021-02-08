import { GET_SUGGESTION } from "../actions/debounce";

const initialState = {
  searchResult : [],
};

const DEBOUNCE_RESUCER = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SUGGESTION: {
      return {
        ...state,
        searchResult: payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default DEBOUNCE_RESUCER;
