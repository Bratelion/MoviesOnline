import React from "react";
import styles from "./style.module.css"
import PHImage from "../../images/bh6.jpeg"

const BigItem = (props) => {
	return(
		<article className={styles.itemCard}>
			<img className={styles.image} src={PHImage}/>
			<section className={styles.text}>
				<span className={styles.title}>Naslov Filma</span>
				<span className={styles.description}>Description filma...</span>
				</section>
			
		</article>
	)
}
export default BigItem;