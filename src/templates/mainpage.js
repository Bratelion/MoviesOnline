import React from "react";
import { Link } from "react-router-dom"
import SearchBar from "../components/searchBar"

const MainPage = (props) => {
	return(
		<>
		<SearchBar/>
		<Link to="/home">
			<button>Click me!</button>
		</Link>
		{props.children}
		</>
	)
}
export default MainPage;