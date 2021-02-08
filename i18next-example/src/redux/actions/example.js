import Api from "../api/api";

export const GET_NAME = "GET_NAME";

export const GetName = () => (dispatch) => {
  Api.get(`api/getName`)
    .then((response) => {
      dispatch({ type: GET_NAME, payload: response.data.data });
    })
    .catch((err) => {
      console.log(err);
    });
};
