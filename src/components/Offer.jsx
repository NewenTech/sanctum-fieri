import React from 'react';
import styles from './Offer.module.css';
import meeting from '../images/meeting.webp';
import meditate from '../images/meditate.webp';
import students from '../images/students.webp';

function Offer() {
	return (
		<div>
			<h1>What we offer</h1>
			<div className={styles.grid_container}>
				<div className={styles.purple}> black </div>
				<div className={''}> white </div>
				<div className={styles.purple}> black </div>
				<div className={styles.white}> white </div>
				<div className={styles.purple}> black </div>
				<div className={styles.white}> white </div>
			</div>
		</div>
	);
}

export default Offer;
