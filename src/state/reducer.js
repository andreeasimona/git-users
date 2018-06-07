import actionTypes from "./action";

function reducerUser(state, action) {
	if (action.type === actionTypes.User) {
		return { ...action
		};
	}
	if (action.type === actionTypes.Users) {
		return {
			type: action.type
		};
	}
	return state;
}
export default reducerUser;