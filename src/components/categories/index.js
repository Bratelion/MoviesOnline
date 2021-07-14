import React from "react";
import { categories } from "../../constants/categories";
import styles from "./style.module.css"

const Categories = () => {
	return(
		<section className={styles.main}>
			{categories.map(({name}, index) => {
				return (
					<a className={styles.listItem} key={index}>{name}</a>
				)
			})}
		</section>
	)
}

export default Categories;