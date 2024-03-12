import React from 'react';
import classes from './Banner.module.css';
import logo from '../images/logo.png';

function Banner() {
	return (
		<div
			className={`p-5 text-center bg-body-tertiary' ${classes.gradient_background}`}
		>
			<img src={logo} alt='logo' className={`pb-3 ${classes.sanctum_logo}`} />
			<h1 className='display-3 fw-bolder'>Sanctum Fieri</h1>
			<p className='col-lg-8 mx-auto fs-2 fw-bolder'>
				Where Catholic singles come together to learn, practise, connect and
				grow in holiness, in preparation for their vocation.
			</p>
		</div>
	);
}

export default Banner;
