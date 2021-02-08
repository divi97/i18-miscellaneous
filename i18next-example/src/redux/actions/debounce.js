import Api from "../api/api";

export const GET_SUGGESTION = "GET_SUGGESTION";

export const GetSearchResult = (state, searchTerm) => (dispatch) => {
  Api.get(`api/getDebounceData/${state}/${searchTerm}`)
    .then((response) => {
      dispatch({ type: GET_SUGGESTION, payload: response.data.data });
    })
    .catch((err) => {
      console.log(err);
    });
};
