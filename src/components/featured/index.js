import React from "react";
import LittleItem from "../littleItem";
import styles from "./style.module.css"

const Featured = () => {
	return(
		<>
		<p className={styles.title}>Watch featured movies</p>
		<section className={styles.main}>
			<LittleItem />
			<LittleItem />
			<LittleItem />
			<LittleItem />
			<LittleItem />
			<LittleItem />
			<LittleItem />
			<LittleItem />
			<LittleItem />
			<LittleItem />
		</section>
		</>
	)
}
export default Featured;