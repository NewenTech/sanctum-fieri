import React from 'react';
import styles from './Card.module.css';

function createCard(data) {
	return (
		<Card
			key={data.id}
			title={data.title}
			date={data.date}
			location={data.location}
			description={data.description}
		/>
	);
}

function Card(props) {
	return (
		<div className={styles.card}>
			<img
				src={props.imageSrc}
				className={styles.cardImgTop}
				alt={props.title}
			/>
			<div className={styles.cardBody}>
				<h5 className={styles.cardTitle}>{props.title}</h5>
				<p className={styles.cardText}>{props.description}</p>
			</div>
		</div>
	);
}

export { createCard };
