import React from 'react';

function createCard(data) {
	return (
		<Card
			key={data.id}
			name={data.name}
			date={data.date}
			location={data.location}
			description={data.description}
		/>
	);
}

function Card(props) {
	return (
		<div className='container'>
			<div className='col-md-4 mb-3'>
				<div className='card'>
					<div className='row g-1'>
						<div className='col-md-4'>
							<svg
								className='bd-placeholder-img'
								width='100%'
								height='250'
								xmlns='http://www.w3.org/2000/svg'
								role='img'
								aria-label='Placeholder: Image'
								preserveAspectRatio='xMidYMid slice'
								focusable='false'
							>
								<title>Placeholder</title>
								<rect width='100%' height='100%' fill='#868e96'></rect>
								<text x='50%' y='50%' fill='#dee2e6' dy='.3em'>
									Image
								</text>
							</svg>
						</div>
						<div className='col-md-8'>
							<div className='card-body'>
								<h5 className='card-title'>{props.name}</h5>{' '}
								<p className='card-text'>{props.description}</p>{' '}
								<p className='card-text'>
									<small className='text-muted'>{props.lastUpdated}</small>{' '}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export { createCard };
