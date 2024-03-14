import React from 'react';
import classes from './Center.module.css';
import QuoteCard from './QuoteCard';
import quoteText from '../data/quotesText';
import createQuote from './QuoteCard';

function Center() {
	return (
		<div className='container my-5'>
			<div className='row'>
				<div className='col-md-12 text-center'>
					<h3 className='mb-4'>
						We help Catholic singles remove the barriers that are keeping them
						from God's call to their true vocation.
					</h3>
					<p className='lead mb-4'>
						You can be single, dating or engaged to participate in these
						courses. If you are here, trust that the Lord has called you to
						deepen your faith and work on your own skills to prepare you for
						your the vocation that He has in Mind for you.
					</p>
					<h4 className='pb-5'>
						Remove these barriers so you can discover and cling to the cross Our
						Lord desires for you.
					</h4>
				</div>
				<div className={`container ${classes.background_image} py-2 mb-5}`}>
					<h2 className='text-center pt-5'>
						Sanctity is Actually Possible, No Matter Your State in Life{' '}
					</h2>
					<div className='container mt-5'>
						<div className='row'>
							<div className='col-md-4'>{quoteText.map(createQuote)}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Center;
