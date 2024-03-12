import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './Banner';
import Navbar from './Navbar';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Services from '../pages/Services';
import Footer from './Footer';

function App() {
	return (
		<div>
			<Banner />
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/services' element={<Services />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
