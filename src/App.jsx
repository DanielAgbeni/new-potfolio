import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom'; // Import useLocation
import Home from './component/Home';
import './index.css';
import bg from './component/img/bg.png';
import Header from './component/Header';
import Footer from './component/Footer';
import About from './component/About';
import Sevices from './component/Sevices';
import Potfolio from './component/Potfolio';
import Contact from './component/Contact';

function App() {
	const location = useLocation(); // Hook to get the current location

	// Scroll to top when the route changes
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<div>
			<div className='h-auto flex flex-auto bg-gradient-to-br from-red-800 via-gray-700 to-sky-400 '>
				<Header />
				<main className='mt-14 md:mt-20 px-6 py-4 w-full'>
					<Routes>
						<Route
							path='/'
							element={<Home />}
						/>
						<Route
							path='/about'
							element={<About />}
						/>
						<Route
							path='/service'
							element={<Sevices />}
						/>
						<Route
							path='/portfolio'
							element={<Potfolio />}
						/>
						<Route
							path='/contact'
							element={<Contact />}
						/>
					</Routes>
				</main>
			</div>
			<Footer />
		</div>
	);
}

export default App;
