import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Preloader from "../../common/Preloader";
import { Button } from "../../componentsStyled/Button";
import { FlexContainer, Title } from "../../componentsStyled/Global";
import { getUser } from "../../thunks/thunks";
import './UserProfile.scss'
import UserForm from "./UserForm";
import { useState } from "react";

const User = (props) => {
	const [editMode, setEditMode] = useState(true)
	const toggleEditMode = () => {
		editMode ? setEditMode(false) : setEditMode(true)
	}
	const navigate = useNavigate();
	let params = useParams();
	const userId = params.id


	useEffect(() => {
		const getUserFunc = () => {
			props.getUser(userId)
		}
		getUserFunc();
	}, [userId])

	return (
		<div className="userProfile">
			<FlexContainer align='center' justify='space-between'>
				<FlexContainer align='center'>
					<Button transparent large onClick={() => navigate(`/`)} margin='5px 25px 0 0'>Назад</Button>
					<Title large>Профиль пользователя</Title>
				</FlexContainer>
				<Button large onClick={toggleEditMode}>Редактировать</Button>
			</FlexContainer>
			{props.user.id ? <UserForm {...props} editMode={editMode}/> : <Preloader />}
		</div>
	);
}

let mapStateToProps = (state) => {
	return {
		user: state.users.user,
		isFetching: state.users.isFetching
	}
}

export default connect(mapStateToProps, { getUser })(User);