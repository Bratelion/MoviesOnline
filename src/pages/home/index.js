import React from "react";
import Main from "../../components/main";
import MainPage from "../../templates/mainpage";

const Home = (props) => {
	return(
		<MainPage props={props}>
			<p>OVO JE HOME PAGE</p>
			<Main />
		</MainPage>
	)
}
export default Home;