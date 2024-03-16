import React from 'react';
import styles from './QuoteCard.module.css';

function createQuote(data) {
	return (
		<QuoteCard
			key={data.id}
			quote={data.quote}
			author={data.author}
			description={data.description}
		/>
	);
}

function QuoteCard(props) {
	return (
		<div className='col-md-4'>
			<div className='card quote-card'>
				<div className='card-body'>
					<blockquote className='blockquote mb-0'>
						<p>{props.quote}</p>
						<footer className={`blockquote-footer ${styles.quote_author}`}>
							{props.author}
						</footer>
					</blockquote>
					<small className='text-muted'>{props.description}</small>
				</div>
			</div>
		</div>
	);
}

export default createQuote;
