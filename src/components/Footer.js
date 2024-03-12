import React from 'react';

function Footer() {
	return (
		// <div className='container'>
		<footer className='d-flex flex-wrap justify-content-between align-items-center m-5  border-top'>
			<p className='col-md-4 mb-0 text-muted'>© 2023 Sanctum Fieri</p>
			<a
				href='https://abr.business.gov.au/ABN/View?abn=20334217357'
				target='_blank'
				rel='noopener noreferrer' // For security reasons, always include rel="noopener noreferrer" when using target="_blank" to prevent the opening page from having access to the original page
				className='col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none'
			>
				ABN: 20 334 217 357
			</a>
			<ul className='nav col-md-4 justify-content-end'>
				<li className='nav-item'>
					<a href='#' className='nav-link px-2 text-muted'>
						Home
					</a>
				</li>
				<li className='nav-item'>
					<a href='#' className='nav-link px-2 text-muted'>
						About
					</a>
				</li>
				<li className='nav-item'>
					<a href='#' className='nav-link px-2 text-muted'>
						Pricing
					</a>
				</li>
				<li className='nav-item'>
					<a href='#' className='nav-link px-2 text-muted'>
						FAQs
					</a>
				</li>
				<li className='nav-item'>
					<a href='#' className='nav-link px-2 text-muted'>
						Contact
					</a>
				</li>
			</ul>{' '}
		</footer>
		// </div>
	);
}

export default Footer;
