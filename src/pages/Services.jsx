import React from 'react';
import CreateCard from '../components/CreateCard';
import servicesData from '../components/servicesData';

function Services() {
	const data = servicesData;
	console.log(data);
	return data.map(CreateCard);
}

export default Services;
