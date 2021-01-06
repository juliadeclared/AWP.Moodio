import Axios from "axios";
import history from "../history";

//action types
const GET_USER = "GET_USER";
const REMOVE_USER = "REMOVE_USER";

//initial state
const defaultState = {};

//action creators
const getUser = (user) => ({ type: GET_USER, user });
const removeUser = () => ({ type: REMOVE_USER });

//thunk creators
export const me = () => async (dispatch) => {
	try {
		const { data } = await Axios.get("/auth/me");
		dispatch(getUser(data));
	} catch (error) {
		console.error(error);
	}
};

export const auth = (email, password, method) => async (dispatch) => {
	let res;
	try {
		res = await Axios.put(`/auth/${method}`, { email, password });
	} catch (error) {
		return dispatch(getUser({ error: error }));
	}
	//reason for two try/catch blocks is because two things can go wrong
	try {
		dispatch(getUser(res.data));
		history.push("/main");
	} catch (error) {
		console.error(error);
	}
};

export const logout = () => async (dispatch) => {
	try {
		await Axios.post("/auth/log-out");
		dispatch(removeUser());
		history.push("/log-in");
	} catch (error) {
		console.error(error);
	}
};

//reducer
export default (state = defaultState, action) => {
	switch (action.type) {
		case GET_USER:
			return {...state, user: action.user};
		case REMOVE_USER:
			return defaultState;
		default:
			return state;
	}
};
