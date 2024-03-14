import React from 'react';
import veronica from '../images/veronica.webp';
import aboutText from '../data/aboutText';

function About() {
	const data = aboutText;
	return (
		<div className='container'>
			<h2>Our Mission</h2>
			<p className='lead'>{data[0].description}</p>

			<div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
				<div className='col-10 col-sm-8 col-lg-6'>
					<img
						src={veronica}
						className='d-block mx-lg-auto img-fluid'
						alt='Veronica Bucknell'
						width='200'
						height='auto'
						loading='lazy'
					/>
				</div>
				<div className='col-lg-6'>
					<h1 className='display-6 fw-bold text-body-emphasis lh-1 mb-3'>
						Founder: {data[1].name}
					</h1>
					<p className='lead'>{data[1].description}</p>
				</div>
			</div>
		</div>
	);
}

export default About;
