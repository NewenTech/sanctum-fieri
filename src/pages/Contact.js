import React from 'react';

function Contact() {
	return (
		<div className='container mt-3'>
			<div className='row justify-content-center'>
				<div className='col-md-8'>
					<h2>Contact me:</h2>
					<ul className='list-unstyled contact-info'>
						<li>
							<i className='fas fa-user'></i> Veronica Bucknell
						</li>
						<li>
							<i className='fas fa-phone'></i> Phone:{' '}
							<a href='tel:0424 147 971'>0424 147 971</a>
						</li>
						<li>
							<i className='fas fa-envelope'></i> Email:{' '}
							<a href='mailto:veronica@email.com'>veronica@sanctumfieri.com</a>
						</li>
					</ul>
					<p>Contact us if you feel this is the community for you.</p>
					<h2>Get in Touch</h2>
					<form action='/' method='post' className='row g-3 needs-validation'>
						<div className='col-md-6'>
							<label htmlFor='name' className='form-label'>
								Name
							</label>
							<input
								type='text'
								className='form-control'
								id='name'
								name='name'
								required
							/>
							<div className='invalid-feedback'>Please enter your name.</div>
						</div>
						<div className='col-md-6'>
							<label htmlFor='email' className='form-label'>
								Email Address
							</label>
							<input
								type='email'
								className='form-control'
								id='email'
								name='email'
								required
							/>
							<div className='invalid-feedback'>
								Please enter a valid email address.
							</div>
						</div>
						<div className='col-12'>
							<label htmlFor='message' className='form-label'>
								Message
							</label>
							<textarea
								className='form-control'
								id='message'
								name='message'
								rows='5'
								required
							></textarea>
							<div className='invalid-feedback'>Please leave a message.</div>
						</div>
						<div className='col-12'>
							<button type='submit' className='btn btn-primary'>
								Send Message
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Contact;
