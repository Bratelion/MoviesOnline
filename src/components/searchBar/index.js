import React from "react";
import {GoSearch} from "react-icons/go"
import styles from "./style.module.css"

const SearchBar = () => {
	return(
		<div className={styles.main}>
			<input className={styles.input} name="query" type="text"/>
			<GoSearch className={styles.icon}/>
		</div>
	)
}

export default SearchBar;