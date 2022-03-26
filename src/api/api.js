import * as axios from "axios";

const instance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/users'
});

export const usersApi = {
	getUsersList() {
		return instance.get(`/`).then(response => response.data)
	},
	getUser(userId) {
	return instance.get(`/${userId}`).then(response => response.data)
	}
}