import React from 'react';
import classes from './Card.module.css';
import servicesData from './servicesData';

function CreateCard() {
	return (
		<div
			className='tab-pane'
			id='nav-services'
			role='tabpanel'
			aria-labelledby='nav-services-tab'
		>
			<div className='container'>
				<div className='row mb-2'>
					<div className='col-md-6'>
						<div
							className={`row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative`}
						>
							<div className='col p-4 d-flex flex-column position-static'>
								<strong className='d-inline-block mb-2 text-primary-emphasis'>
									Group
								</strong>
								<h3 className='mb-0'>{servicesData[0].name}</h3>
								<div className='mb-1 text-body-secondary'>Thu, 04 Apr 2024</div>
								<p className='card-text mb-auto'> services</p>
								<a
									href='#'
									className={`icon-link gap-1 icon-link-hover stretched-link ${classes.link}`}
								>
									Sign up
									<svg className='bi'>
										<use xlinkHref='#chevron-right'></use>
									</svg>
								</a>
							</div>
							<div className='col-auto d-none d-lg-block'>
								<svg
									className='bd-placeholder-img'
									width='200'
									height='250'
									xmlns='http://www.w3.org/2000/svg'
									role='img'
									aria-label='Placeholder: Thumbnail'
									preserveAspectRatio='xMidYMid slice'
									focusable='false'
								>
									<title>Placeholder</title>
									<rect width='100%' height='100%' fill='#55595c'></rect>
									<text x='50%' y='50%' fill='#eceeef' dy='.3em'>
										Thumbnail
									</text>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CreateCard;
