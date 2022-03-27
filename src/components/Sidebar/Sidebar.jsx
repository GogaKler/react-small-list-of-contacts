import { Button } from "../../componentsStyled/Button";
import { Title } from "../../componentsStyled/Global";
import { connect } from 'react-redux';
import { useState } from "react";
import { useEffect } from "react";
import { sortUsersByCity, sortUsersByName } from '../../redux/users-reducer';
import './Sidebar.scss'

const Sidebar = (props) => {
	const [sortByName, setSortByName] = useState(null)
	const [sortByCity, setSortByCity] = useState(null)
	const toggleSortByName = () => {
		sortByName === null ? setSortByName('asc') : setSortByName(null)
	}
	const toggleSortByCity = () => {
		sortByCity === null ? setSortByCity('asc') : setSortByCity(null)
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

	const sorting = () => {
		if (props.sortByName != null) {
			return (
				<>
					<Button onClick={toggleSortByName}>Выключить сортировку</Button>
					<Button disabledBlue >По городу</Button>
				</>
			)
		} else if (props.sortByName) {
			return (
				<>
					<Button onClick={toggleSortByName}>По имени</Button>
					<Button onClick={toggleSortByCity}>По городу</Button>
				</>
			)
		} else if (props.sortByCity != null) {
			return (
				<>
					<Button disabledBlue>По имени</Button>
					<Button onClick={toggleSortByCity} >Выключить сортировку</Button>
				</>
			)
		} else if (props.sortByCity) {
			return (
				<>
					<Button onClick={toggleSortByName}>По имени</Button>
					<Button onClick={toggleSortByCity}>По городу</Button>
				</>
			)
		} else {
			return (
				<>
					<Button onClick={toggleSortByName}>По имени</Button>
					<Button onClick={toggleSortByCity}>По городу</Button>
				</>
			)
		}

	}

	return (
		<div className="sidebar">
			<Title small>Сортировка</Title>
			{sorting()}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		sortByName: state.users.sortByName,
		sortByCity: state.users.sortByCity
	}
}


export default connect(mapStateToProps, { sortUsersByName, sortUsersByCity })(Sidebar);