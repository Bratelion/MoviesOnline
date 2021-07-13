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
				<Link to="/"><a>Home</a></Link>
				<Link to="/movies"><a>Movies</a></Link>
				<Link to="/tvshows"><a>TV Shows</a></Link>
			</nav>
		</div>
	)
}

export default NavBar;