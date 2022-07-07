import React from 'react'
import styles from '../../assests/styles/image.module.css'

const Image = ({link}) => {
	return (
		<img
		className={styles.articleImage}
		src={link} 
		alt='article img' />
	)
}

export default Image
