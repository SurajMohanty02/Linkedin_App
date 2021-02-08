import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import DataReducer from "./reducer/reducers";
const root = combineReducers({ DataReducer });

const store = createStore(root, composeWithDevTools());
export default store;
