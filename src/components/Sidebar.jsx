import { Button } from "../componentsStyled/Button";
import { Title } from "../componentsStyled/Global";
import { connect } from 'react-redux';
import { useState } from "react";
import { useEffect } from "react";
import { sortUsersByCity, sortUsersByName } from './../redux/UsersReducer';

const Sidebar = (props) => {
	const [sortByName, setSortByName] = useState(null)
	const [sortByCity, setSortByCity] = useState(null)
	const toggleSortByName = () => {
		sortByName ? setSortByName('asc') : setSortByName('desc')
	}
	const toggleSortByCity = () => {
		sortByCity ? setSortByCity('asc') : setSortByCity('desc')
	}
	useEffect(() => {
		const sort = () => {
			props.sortUsersByName(sortByName)
		}
		sort();
	}, [sortByName, props])

	useEffect(() => {
		const sort = () => {
			props.sortUsersByCity(sortByCity)
		}
		sort();
	}, [sortByCity, props])

	return (
		<div className="sidebar">
			<Title small>Сортировка</Title>
			<Button onClick={toggleSortByName}>По имени</Button>
			<Button onClick={toggleSortByCity}>По городу</Button>
		</div>
	);
}

const mapStateToProps = (state) => {
	return{
		sort: state.users.sort
	}
}


export default connect(mapStateToProps, { sortUsersByName, sortUsersByCity })(Sidebar);