import React, { useEffect, useState } from "react";
import NavBar from "../components/navBar";

import SearchBar from "../components/searchBar"

const MainPage = (props) => {
	const [selected, setSelected] = useState(props.props.location.pathname);


	useEffect(()=> {

	}, [selected]);
	return(
		<>
		<header>
			<SearchBar/>
			<NavBar selected={selected}/>
		</header>
		{props.children}
		</>
	)
}
export default MainPage;