import * as axios from "axios";

const instance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/'
});

export const usersApi = {
	getUsersList(sortByName = null, sortByCity = null) {
		return instance.get(`users/` + 
		(sortByName === null ? '' : `?_sort=name&_order=${sortByName}&`) + 
		(sortByCity === null ? '' : `?_sort=address.city&_order=${sortByCity}`))
		.then(response => response.data)
	},
	getUser(userId) {
	return instance.get(`users/${userId}`).then(response => response.data)
	}
}