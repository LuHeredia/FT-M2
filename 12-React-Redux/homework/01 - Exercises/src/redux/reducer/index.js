import { ADD_PRODUCT, DELETE_PRODUCT } from "../actions/types"



const initialState = {
  list: [],
};


function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        list: [...state.list, action.payload],
      };
    case "DELETE_PRODUCT":
      return {
        list: state.list.filter((producto)=> producto.id !== action.payload),
      };
    default:
      return state;
  }
}



export default rootReducer;
