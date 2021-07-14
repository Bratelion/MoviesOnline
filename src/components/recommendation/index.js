import React from "react";
import BigItem from "../bigItem";
import styles from "./style.module.css"

const Recommendation = () => {
	return(
		<section className={styles.main}>
			<BigItem />
			<BigItem />
			<BigItem />
			<BigItem />
			<BigItem />
		</section>
	)
}
export default Recommendation;