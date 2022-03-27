const SET_USERS_LIST = "SET_USERS_LIST"
const SET_USER = "SET_USER"
const PRELOADER_IS_FETCHING = "PRELOADER_IS_FETCHING"
const SORT_USERS_BY_NAME = "SORT_USERS_BY_NAME"
const SORT_USERS_BY_CITY = "SORT_USERS_BY_CITY"

let initalState = {
	usersList: [],
	user: [],
	isFetching: null,
	sortByName: null,
	sortByCity: null,
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
		case SORT_USERS_BY_NAME: {
			return { ...state,
				sortByName: action.sort === null ? null : action.sort
			}
		}
		case SORT_USERS_BY_CITY: {
			return { ...state,
				sortByCity: action.sort === null ? null : action.sort
			}
		}
		default:
			return state
	}
}

export const setUsersList = (usersList) => ({ type: SET_USERS_LIST, usersList });
export const setUser = (user) => ({ type: SET_USER, user });
export const preloaderIsFetching = (isFetching) => ({ type: PRELOADER_IS_FETCHING, isFetching });
export const sortUsersByName = (sort) => ({ type: SORT_USERS_BY_NAME, sort });
export const sortUsersByCity = (sort) => ({ type: SORT_USERS_BY_CITY, sort });

export default UsersReducer;