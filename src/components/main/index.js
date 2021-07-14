import React from "react";
import Categories from "../categories";
import styles from "./style.module.css"

const Main = () => {
	return(
		<div className={styles.main}>
			<Categories />
			<section className={styles.right}></section>
		</div>
	)
}

export default Main;