import { Button } from "../componentsStyled/Button";
import { Title } from "../componentsStyled/Global";

const Sidebar = (props) => {
	return (
		<div className="sidebar">
			<Title small>Сортировка</Title>
			<Button>По городу</Button>
			<Button>По компании</Button>
		</div>
	);
}

export default Sidebar;