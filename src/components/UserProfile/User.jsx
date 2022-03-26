import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Preloader from "../../common/Preloader";
import { Button } from "../../componentsStyled/Button";
import { FlexContainer, Title } from "../../componentsStyled/Global";
import { getUser } from "../../thunks/thunks";

const User = (props) => {
	const navigate = useNavigate();
	let params = useParams();
	let userId = params.id
	useEffect(() => props.getUser(userId), [userId])
	return (
		<>
			<div className="userProfile">
				<FlexContainer align='center' justify='space-between'>
					<FlexContainer align='center'>
						<Button onClick={() => navigate(`/`)} margin='0 25px 0 0'>Назад</Button>
						<Title>Профиль пользователя</Title>
					</FlexContainer>
					<Button>Редактировать</Button>
				</FlexContainer>
				{props.isFetching && <Preloader />}
				{props.user.id ?
					<>
						<div>
							{props.user.name}
						</div>
						<div>
							{props.user.address.city}
						</div>
					</>
					: <Preloader />}
			</div>
		</>
	);
}

let mapStateToProps = (state) => {
	return {
		user: state.users.user,
		isFetching: state.users.isFetching
	}
}

export default connect(mapStateToProps, { getUser })(User);