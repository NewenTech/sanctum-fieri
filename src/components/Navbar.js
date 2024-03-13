import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<nav
			className='navbar navbar-expand-lg bg-body-tertiary rounded fs-3'
			aria-label='navbar'
		>
			<div className='container-fluid'>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarsExample10'
					aria-controls='navbarsExample10'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>

				<div
					className='collapse navbar-collapse justify-content-md-center'
					id='navbarsExample10'
				>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<Link className='nav-link active' aria-current='page' to='/'>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/about'>
								About
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/services'>
								Services
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/contact'>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
