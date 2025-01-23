import React, { useState, useEffect } from 'react';
import TypingAnimation from './TypingAnimation';
import {
	FaGithub,
	FaInstagram,
	FaWhatsapp,
	FaYoutube,
	FaLinkedinIn,
	FaXTwitter,
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bc from './img/bg.png';
import newdp from '/Daniel Agbeni.jpg';
import Social from './Social';

const Home = () => {
	const [isPreviewVisible, setPreviewVisible] = useState(false);

	useEffect(() => {
		document.title = 'Daniel Agbeni';
		AOS.init({ duration: 1000, once: true });
	}, []);

	const backgroundStyle = {
		backgroundImage: `url(${bc})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	};

	const socialLinks = [
		{
			href: 'https://wa.me//+2349041995875',
			icon: <FaWhatsapp />,
			color: 'green-400',
		},
		{
			href: 'https://www.youtube.com/@danielagbeni',
			icon: <FaYoutube />,
			color: 'red-700',
		},
		{
			href: 'https://www.instagram.com/daniel_agbeni/',
			icon: <FaInstagram />,
			color: 'purple-500',
		},
		{
			href: 'https://github.com/DanielAgbeni',
			icon: <FaGithub />,
			color: 'black',
		},
		{
			href: 'https://twitter.com/Agbeni_Daniel',
			icon: <FaXTwitter />,
			color: 'black',
		},
		{
			href: 'https://www.linkedin.com/in/daniel-agbeni-5461ab297/',
			icon: <FaLinkedinIn />,
			color: 'blue-600',
		},
	];

	return (
		<div
			className='w-full h-screen flex items-center justify-center'
			style={backgroundStyle}>
			<div className='text-center px-4'>
				{/* Profile Image */}
				<div
					className='relative mx-auto mb-6 h-48 w-48 shadow-xl p-2 rounded-full color-change'
					data-aos='fade-up'>
					<img
						src={newdp}
						alt='Daniel Agbeni'
						className='h-44 w-44 object-cover rounded-full cursor-pointer'
						onClick={() => setPreviewVisible(true)}
					/>
				</div>

				{/* Title */}
				<p className='text-gray-300 text-3xl sm:text-6xl font-extrabold glitch'>
					Hi, I am Daniel Agbeni
				</p>

				{/* Typing Animation */}
				<div className='text-gray-200 text-2xl sm:text-3xl py-4'>
					<TypingAnimation />
				</div>

				{/* Social Links with Bounce Animation */}
				<div
					className='flex justify-center gap-6 py-4 flex-wrap'
					data-aos='zoom-in'>
					{socialLinks.map((link, index) => (
						<a
							key={index}
							href={link.href}
							aria-label={`Visit my ${link.href}`}
							className={`text-white text-4xl animate-bounce transition-transform transform hover:scale-110 hover:animate-pulse hover:text-${link.color}`}>
							{link.icon}
						</a>
					))}
				</div>

				{/* About Button */}
				<div className='mt-6'>
					<Link to='/about'>
						<button className='text-xl font-bold text-white bg-blue-600 hover:bg-white hover:text-blue-600 border border-white hover:border-blue-600 rounded-full px-6 py-2 transition-all duration-300'>
							Who am I?
						</button>
					</Link>
				</div>

				{/* Additional Social Section */}
				<Social />

				{/* Image Preview Modal */}
				{isPreviewVisible && (
					<div
						className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm'
						onClick={() => setPreviewVisible(false)}>
						<div
							className='relative p-2 color-change rounded-lg shadow-2xl'
							onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking on the image
						>
							<img
								src={newdp}
								alt='Daniel Agbeni'
								className='rounded-lg'
								style={{
									width: 'auto',
									height: 'auto',
									maxWidth: '500px', // Set maximum width
									maxHeight: '400px', // Set maximum height
								}}
							/>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Home;
