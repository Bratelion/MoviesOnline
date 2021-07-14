import React from "react";
import styles from "./style.module.css"
import PHImage from "../../images/bh6.jpeg"

const BigItem = (props) => {
	return(
		<article className={styles.itemCard}>
			<img className={styles.image} src={PHImage}/>
			<span>Naslov Filma</span>
			<span>Description filma...</span>
		</article>
	)
}
export default BigItem;