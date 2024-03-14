import React from 'react';
import veronica from '../images/veronica.webp';

function About() {
	return (
		<div className='container'>
			<h2>Our Mission</h2>
			<p className='lead'>
				To assist Catholic singles in removing the barriers that are keeping
				them from discovering their true vocation. We equip Catholic singles
				with skills that are needed in any vocation. We assist in deepening
				one's faith through knowledge, support and consistency.
			</p>

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
						Founder: Veronica Bucknell
					</h1>
					<p className='lead'>
						My Catholic Faith is of utmost importance to me. After studying
						Theology, I went on to complete my Masters of Counselling and
						Psychotherapy. My passion is for the Sacrament of Marriage. I have
						assisted married couples through my counselling. I have a great
						desire to assist Catholic singles with skills that will benefit them
						greatly when they enter their vocation. This is the way I hope to
						intervene before there are issues in a marriage or even in a
						religious vocation.
					</p>
				</div>
			</div>
		</div>
	);
}

export default About;
