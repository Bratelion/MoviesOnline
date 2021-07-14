import React from "react";
import {GoSearch} from "react-icons/go"
import styles from "./style.module.css"

const SearchBar = () => {
	return(
		<section className={styles.main}>
			<input className={styles.input} name="query" type="text"/>
			<GoSearch className={styles.icon}/>
		</section>
	)
}

export default SearchBar;