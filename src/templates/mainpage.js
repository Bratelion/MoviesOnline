import React from "react";
import NavBar from "../components/navBar";

import SearchBar from "../components/searchBar"

const MainPage = (props) => {
	return(
		<>
		<SearchBar/>
		<NavBar />
		{props.children}
		</>
	)
}
export default MainPage;