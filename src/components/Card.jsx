import React from 'react';
import styles from './Card.module.css';

function createCard(data) {
	return (
		<Card
			key={data.id}
			imageSrc={data.imageSrc}
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
			<div className={styles.cardImgContainer}>
				<img
					src={props.imageSrc}
					className={styles.cardImg}
					alt={props.title}
				/>
			</div>
			<div className={styles.cardBody}>
				<h5 className={styles.cardTitle}>{props.title}</h5>
				<p className='lead'>{props.date}</p>
				<p className='lead'>{props.location}</p>
				<p className={styles.cardText}>{props.description}</p>
			</div>
		</div>
	);
}

export { createCard };
