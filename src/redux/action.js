import axios from "axios";

export const fetchList = () => {
  return (dispatch) => {
    axios.get(`https://api.tvmaze.com/search/shows?q=all`).then((res) => {
      dispatch({
        type:"GET_MOVIES_LIST",
        payload: res.data,
      });
    });
  };
};