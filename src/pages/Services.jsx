import React from 'react';
import { createCard } from '../components/Card';
import servicesData from '../components/servicesData';

function Services() {
	return servicesData.map(createCard);
}
export default Services;
