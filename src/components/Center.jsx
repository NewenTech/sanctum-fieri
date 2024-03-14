import React from 'react';
import classes from './Center.module.css';

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
							<div className='col-md-4'>
								<div className='card quote-card'>
									<div className='card-body'>
										<blockquote className='blockquote mb-0'>
											<p>"With God, all things are possible."</p>
											<footer
												className={`blockquote-footer ${classes.quote_author}`}
											>
												Saint Rita of Cascia
											</footer>
										</blockquote>
										<small className='text-muted'>
											Getting married and having twin boys, this woman suffered
											a great deal of emotional pain: the murder of her husband,
											and the death of her boys. Yet she ended up becoming a
											nun, devoting her entire life to God's Will.
										</small>
									</div>
								</div>
							</div>
							<div className='col-md-4'>
								<div className='card quote-card'>
									<div className='card-body'>
										<blockquote className='blockquote mb-0'>
											<p>
												"Those who are called to the married state will, with
												the Grace of God, find within their state everything
												they need to be holy."
											</p>
											<footer className='blockquote-footer'>
												Saint Josemaria Escriva
											</footer>
										</blockquote>
										<small className='text-muted'>
											A man who answered the call to the Priesthood, and was
											then told of his new mission, by God: to start Opus Dei to
											assist all people to love God in their day to day work.
										</small>
									</div>
								</div>
							</div>
							<div className='col-md-4'>
								<div className='card quote-card'>
									<div className='card-body'>
										<blockquote className='blockquote mb-0'>
											<p>
												"I want you to have a new concept of holiness. You've
												got to be holy where you are : washing dishes, at the
												office, at school. Wherever you are, you can be holy
												there."
											</p>
											<footer className='blockquote-footer'>
												Mother Angelica
											</footer>
										</blockquote>
										<small className='text-muted'>
											A woman called to the life of a nun, with a call on top:
											to lead others in the creation of EWTN so that all people
											could get to know Our Lord remotely.
										</small>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Center;
