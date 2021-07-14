import React from "react";
import { categories } from "../../constants/categories";
import About from "../about";
import styles from "./style.module.css"

const Categories = () => {
	return(
		<article>
		<section className={styles.main}>
			{categories.map(({name}, index) => {
				return (
					<a className={styles.listItem} key={index}>{name}</a>
				)
			})}
		</section>
		<About />
		</article>
	)
}

export default Categories;