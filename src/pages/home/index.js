import React from "react";
import Main from "../../components/main";
import MainPage from "../../templates/mainpage";

const Home = (props) => {
	return(
		<MainPage props={props} selected={props.location.pathname}>
			<Main />
		</MainPage>
	)
}
export default Home;