const INITIAL_STATE = {
    moviesList: []
  };
  const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "GET_MOVIES_LIST":
        return {
          ...state,
          moviesList: action.payload,
        };
        default:
            return state;
        }
      };
      
      export default reducer;