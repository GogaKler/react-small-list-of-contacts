import { connect } from "react-redux";
import { getUsersList } from "./thunks/thunks";
import { useRoutes } from "./routes";
import Sidebar from "./components/Sidebar/Sidebar";
import { Container, FlexCol, FlexContainer } from "./components-style/Global";


const App = (props) => {
	const routes = useRoutes();
	return (
		<div className="AppWrapper">
			<Container>
				<FlexContainer>
					<FlexCol flex='1 0 20%'>
						<Sidebar />
					</FlexCol>
					<FlexCol flex='1 0 80%'>
						{routes}
					</FlexCol>
				</FlexContainer>
			</Container>
		</div>
	);
}

export default connect(null, { getUsersList })(App);
