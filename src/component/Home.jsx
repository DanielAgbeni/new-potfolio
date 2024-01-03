/** @format */

import React from 'react';
import bg from './img/dan.jpg';
import me from './img/pics.png';
import TypingAnimation from './TypingAnimation';
import {
	FaDiscord,
	FaGithub,
	FaInstagram,
	FaTwitter,
	FaWhatsapp,
	FaYoutube,
} from 'react-icons/fa';
import Social from './Social';
import x from './img/x-twitter.svg';
import bc from './img/bg.png';
import { Link, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Home = () => {
	const location = useLocation();
	const backgroundStyle = {
		backgroundImage: `url(${bc})`,
	};
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div
			className='w-full h-screen flex flex-cols-1 justify-center items-center gap-2'
			style={backgroundStyle}>
			<div
				className='grid grid-cols-1 items-center justify-center'
				data-aos='fade-up'>
				<div className=' h-48 w-48 shadow-xl p-2 color-change rounded-full mx-auto relative mb-4'>
					<img
						src={bg}
						alt=''
						className=' object-fit h-44 w-44 rounded-full'
					/>
				</div>
				<p className='text-gray-300 text-3xl sm:text-6xl font-extrabold flex items-center justify-center text-center glitch'>
					Hy, I am Daniel Agbeni
				</p>
				<div className='text-3xl text-gray-200 flex items-center justify-center py-3 w-screen font-bold text-center'>
					<TypingAnimation />
				</div>
				<div
					className='flex items-center justify-center gap-4 py-3 '
					data-aos='zoom-in-right'>
					<a href='https://wa.me//+2349041995875'>
						<FaWhatsapp className=' text-white text-4xl hover:scale-110 hover:text-green-400 cursor-pointer animate-bounce hover:animate-spin' />
					</a>
					<a href='https://www.youtube.com/@danielagbeni'>
						<FaYoutube className=' text-white text-4xl hover:scale-110 hover:text-red-700 cursor-pointer animate-bounce hover:animate-spin' />
					</a>
					<a href='https://www.instagram.com/daniel_agbeni/'>
						<FaInstagram className='text-white hover:text-purple-500 hover:scale-110 text-4xl cursor-pointer animate-bounce hover:animate-spin' />
					</a>
					<a href='https://github.com/DanielAgbeni'>
						<FaGithub className=' text-white text-4xl hover:text-black hover:bg-white rounded-full animate-bounce hover:animate-spin hover:scale-110 cursor-pointer' />
					</a>
					<a href='https://twitter.com/Agbeni_Daniel'>
						<FaTwitter className='text-white text-4xl hover:text-sky-600 hover:scale-110 cursor-pointer animate-bounce hover:animate-spin' />
					</a>
					<a href=''>
						<FaDiscord className='text-white text-4xl hover:text-blue-600 hover:scale-110 cursor-pointer animate-bounce hover:animate-spin' />
					</a>
				</div>
				<div className='flex items-center justify-center mt-4 relative'>
					<Link to={'/about'}>
						<button className='border border-white text-2xl py-1 px-2 bg-sky-900 text-white hover:bg-white hover:text-sky-900 font-bold hover:rounded hover:border-black hover:border'>
							Who am I ?
						</button>
					</Link>
				</div>
				<Social />
			</div>
		</div>
	);
};

export default Home;
