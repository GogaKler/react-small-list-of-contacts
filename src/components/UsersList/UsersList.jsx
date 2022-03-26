import styled from "styled-components/macro";
import { connect } from "react-redux";
import Preloader from "../../common/Preloader";
import { Button } from "../../componentsStyled/Button";
import { Title } from "../../componentsStyled/Global";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getUsersList } from "../../thunks/thunks";

let mapStateToProps = (state) => {
	return {
		usersList: state.users.usersList,
		isFetching: state.users.isFetching
	}
}
const ButtonUser = styled(Button)`
 	position: absolute;
 	bottom: 2px;
 	right: 0;
	margin-right: 15px;
`

const UsersList = (props) => {
	const navigate = useNavigate();
	useEffect(() => {
		const getUsers = () => {props.getUsersList()}
		getUsers()
		}, [])

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


export default connect(mapStateToProps, {getUsersList})(UsersList);