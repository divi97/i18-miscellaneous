import Api from "../api/api";

export const GET_VALUE = "GET_VALUE";

export const GetValue = () => (dispatch) => {
  Api.get("api/getValue")
    .then((response) => {
      dispatch({ type: GET_VALUE, payload: response.data.data });
    })
    .catch((err) => {
      console.log(err);
    });
};
