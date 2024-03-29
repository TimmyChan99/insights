import React from 'react'
import styles from '../../assests/styles/elements/image.module.css'

const Image = ({link}) => {
	return (
		<img
		loading="lazy"
		className={styles.articleImage}
		src={link} 
		alt='article img' />
	)
}

export default Image
