const SET_USERS_LIST = "SET_USERS_LIST"
const SET_USER = "SET_USER"
const PRELOADER_IS_FETCHING = "PRELOADER_IS_FETCHING"

let initalState = {
	usersList: [],
	user: [],
	isFetching: null,
}

const UsersReducer = (state = initalState, action) => {
	switch(action.type){
		case SET_USERS_LIST: {
			return { ...state, usersList: action.usersList }
		}
		case SET_USER: {
			return {...state, user: action.user}
		}
		case PRELOADER_IS_FETCHING: {
			return { ...state, isFetching: action.isFetching }
		}
		default:
			return state
	}
}

export const setUsersList = (usersList) => ({ type: SET_USERS_LIST, usersList });
export const setUser = (user) => ({ type: SET_USER, user });
export const preloaderIsFetching = (isFetching) => ({ type: PRELOADER_IS_FETCHING, isFetching });

export default UsersReducer;