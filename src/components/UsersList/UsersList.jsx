import styled from "styled-components/macro";
import { connect } from "react-redux";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getUsersList } from "../../thunks/thunks";
import './UsersList.scss'
import Preloader from "../Preloader/Preloader";
import { Title } from "../../components-style/Global";
import { Button } from './../../components-style/Button';

const ButtonUser = styled(Button)`
 	position: absolute;
 	bottom: 2px;
 	right: 0;
	margin-right: 15px;
`

const UsersList = (props) => {
	const navigate = useNavigate();
	const sortByName = props.sortByName
	const sortByCity = props.sortByCity

	useEffect(() => {
		const getUsers = () => {props.getUsersList(sortByName, sortByCity)}
		getUsers();
		}, [sortByName, sortByCity])

	return (
		<div className="usersList">
			<Title margin='0 0 10px 0'>Список пользователей</Title>
			{props.isFetching && <Preloader />}
			{props.usersList.map(u =>
				<div className="user" key={u.id}>
					<div className="user__info"><span className="user__info_first">ФИО:</span>{u.name}</div>
					<div className="user__info"><span className="user__info_first">Город</span>{u.address.city}</div>
					<div className="user__info"><span className="user__info_first">Компания:</span>{u.company.name}</div>
					<ButtonUser transparent self='flex-end' onClick={() => navigate(`/user/${u.id}`)}>Подробнее</ButtonUser>
				</div>
			)}

		</div>
	);
}

let mapStateToProps = (state) => {
	return {
		usersList: state.users.usersList,
		isFetching: state.users.isFetching,
		sortByName: state.users.sortByName,
		sortByCity: state.users.sortByCity
	}
}
export default connect(mapStateToProps, {getUsersList})(UsersList);