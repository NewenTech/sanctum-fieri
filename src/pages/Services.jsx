// Services.js
import React from 'react';
import { createCard } from '../components/Card';
import servicesData from '../data/servicesData';
import Offer from '../components/Offer';

function Services() {
	return (
		<>
			<div className='container'>
				<div className='row row-cols-1 row-cols-md-2 g-4'>
					{servicesData.map((data, index) => (
						<div key={index} className='col'>
							{createCard(data)}
						</div>
					))}
				</div>
			</div>
			<div>
				<Offer />
			</div>
		</>
	);
}

export default Services;
