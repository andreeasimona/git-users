import {
	createStore
} from "redux";
import action from "./action";
import reducer from "./reducer";

const initialState = {
	type: action.Users
};
const store = createStore(reducer, initialState)
export default store;