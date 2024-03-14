import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className='d-flex flex-wrap justify-content-between align-items-center m-5 border-top'>
			<p className='col-md-4 mb-0 text-muted'>© {year} Sanctum Fieri</p>
			<a
				href='https://abr.business.gov.au/ABN/View?abn=20334217357'
				target='_blank'
				rel='noopener noreferrer'
				className='col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none text-muted'
			>
				ABN: 20 334 217 357
			</a>
			<ul className='nav col-md-4 justify-content-end'>
				<li className='nav-item'>
					<Link to='/' className='nav-link px-2 text-muted'>
						Home
					</Link>
				</li>
				<li className='nav-item'>
					<Link to='/about' className='nav-link px-2 text-muted'>
						About
					</Link>
				</li>

				<li className='nav-item'>
					<Link to='/contact' className='nav-link px-2 text-muted'>
						Contact
					</Link>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;
