import React, { useEffect, useState } from "react";
import NavBar from "../components/navBar";

import SearchBar from "../components/searchBar"

const MainPage = (props) => {
	const [selected, setSelected] = useState(props.props.location.pathname);


	useEffect(()=> {

	}, [selected]);
	return(
		<>
		<SearchBar/>
		<NavBar selected={selected}/>
		{props.children}
		</>
	)
}
export default MainPage;