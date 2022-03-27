import { usersApi } from "../api/api"
import { preloaderIsFetching, setUsersList, setUser } from "../redux/UsersReducer"



export const getUsersList = (name, city) => {
	return (dispatch) => {
		dispatch(preloaderIsFetching(true))
		usersApi.getUsersList(name, city).then(data => {
			dispatch(preloaderIsFetching(false))
			dispatch(setUsersList(data))
		})
	}
}

export const getUser = (userId) => (dispatch) => {
	dispatch(preloaderIsFetching(true))
	usersApi.getUser(userId).then(data => {
		dispatch(preloaderIsFetching(false))
		dispatch(setUser(data))
	})
}	