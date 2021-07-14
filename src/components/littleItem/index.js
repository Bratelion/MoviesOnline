import React from "react";
import styles from "./style.module.css"
import PHImage from "../../images/bh6.jpeg"

const LittleItem = (props) => {
	return(
		<article className={styles.itemCard}>
			<img className={styles.image} src={PHImage}/>
			<section className={styles.text}>
				<span className={styles.genre}>Zanr</span>
				<span className={styles.title}>Naslov filma</span>
				</section>
			
		</article>
	)
}
export default LittleItem;