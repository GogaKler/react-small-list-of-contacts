import { Navigate, Route, Routes } from "react-router-dom"
import UsersList from './components/UsersList/UsersList'
import User from './components/UserProfile/User'


export const useRoutes = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<UsersList />} />
				<Route path="/user/:id" element={<User />} />
			</Routes>

		</>
	)
}