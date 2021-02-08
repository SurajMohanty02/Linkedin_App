const initialState = {
  modal: null,
  loading: null,
  data: [],
};
const DataReducer = (state = initialState, action) => {
  //console.log(action);
  if (action.type === "OPEN_MODAL") {
    return {
      ...state,
      modal: true,
    };
  } else if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      modal: false,
    };
  } else {
    return state;
  }
};
export default DataReducer;
