import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css"

const NavBar = (props) => {
	return(
		<header className={styles.main}>
			<p className={styles.title}>Movies 
				<span className={styles.specialText}> Online</span>
			</p>
			<nav className={styles.links}>
				<Link className={props.selected === "/" ? styles.selected : ""} to="/">Home</Link>
				<Link className={props.selected === "/movies" ? styles.selected : ""} to="/movies">Movies</Link>
				<Link className={props.selected === "/tvshows" ? styles.selected : ""} to="/tvshows">TV Shows</Link>
			</nav>
		</header>
	)
}

export default NavBar;