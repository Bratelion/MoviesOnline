import React from "react";
import Categories from "../categories";
import Recommendation from "../recommendation";
import styles from "./style.module.css"

const Main = () => {
	return(
		<div className={styles.main}>
			<Categories />
			<section className={styles.right}>
				<Recommendation />
			</section>
		</div>
	)
}

export default Main;