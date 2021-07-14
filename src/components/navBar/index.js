import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css"

const NavBar = () => {
	return(
		<div className={styles.main}>
			<p className={styles.title}>Movies 
				<span className={styles.specialText}> Online</span>
			</p>
			<nav className={styles.links}>
				<Link to="/">Home</Link>
				<Link to="/movies">Movies</Link>
				<Link to="/tvshows">TV Shows</Link>
			</nav>
		</div>
	)
}

export default NavBar;