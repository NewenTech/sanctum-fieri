import React from 'react';
import classes from './Card.module.css'; // Import the CSS module for styling

function Card() {
	return (
		<div className={classes.cardContainer}>
			<div className={classes.card}>
				<div className={classes.cardImgContainer}>
					<img
						src='placeholder1.jpg'
						alt='Image 1'
						className={classes.cardImg}
					/>
					<div className={classes.overlay}>
						<div className={classes.text}>Text on hover</div>
					</div>
				</div>
				<div className={classes.cardContent}>
					<h3>Title 1</h3>
					<p>Description 1</p>
				</div>
			</div>
			<div className={classes.card}>
				<div className={classes.cardImgContainer}>
					<img
						src='placeholder2.jpg'
						alt='Image 2'
						className={classes.cardImg}
					/>
					<div className={classes.overlay}>
						<div className={classes.text}>Text on hover</div>
					</div>
				</div>
				<div className={classes.cardContent}>
					<h3>Title 2</h3>
					<p>Description 2</p>
				</div>
			</div>
		</div>
	);
}

export default Card;
