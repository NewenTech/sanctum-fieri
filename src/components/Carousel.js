import React from 'react';
import { Carousel } from 'react-bootstrap';
import classes from './Carousel.module.css';
import jacob from './images/jacob.webp';
import josh from './images/josh.webp';
import mateus from './images/mateus.webp';

function MyCarousel() {
	return (
		<div className={`py-5 ${classes.carousel_container}`}>
			<Carousel>
				<Carousel.Item>
					<img
						src={jacob}
						alt='First slide'
						className={`d-block ${classes.image}`}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						src={josh}
						alt='Second slide'
						className={`d-block ${classes.image}`}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						src={mateus}
						alt='Third slide'
						className={`d-block ${classes.image}`}
					/>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default MyCarousel;
