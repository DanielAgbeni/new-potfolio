/** @format */

import React, { useState, useEffect, useRef } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import Contact from './Contact';
import { FaPhone } from 'react-icons/fa6';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isContactOpen, setIsContactOpen] = useState(false);
	const location = useLocation();
	const menuRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setIsMenuOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const navLinks = [
		{ name: 'Home', path: '/' },
		{ name: 'About', path: '/about' },
		{ name: 'Service', path: '/service' },
		{ name: 'Portfolio', path: '/portfolio' },
	];

	const renderLinks = (isMobile = false) =>
		navLinks.map((link) => (
			<Link
				to={link.path}
				key={link.name}>
				<li
					className={`cursor-pointer ${
						location.pathname === link.path ? 'text-white' : 'text-gray-400'
					} ${
						isMobile
							? 'font-semibold hover:bg-gray-600 px-4 py-2 rounded-lg'
							: 'font-semibold hover:text-white'
					} transition-all duration-300 text-xl`}
					onClick={() =>
						isMobile ? setIsMenuOpen(false) : setIsContactOpen(false)
					}>
					{link.name}
				</li>
			</Link>
		));

	return (
		<header className='fixed z-50 w-full h-20 px-4 md:px-16 bg-gradient-to-br from-red-800 via-gray-700 to-sky-400 shadow-lg'>
			{/* Desktop */}
			<div className='hidden md:flex w-full h-full items-center justify-between'>
				<p className='logo'>Daniel Agbeni</p>
				<ul className='flex items-center gap-8'>{renderLinks()}</ul>
				<button
					className='flex items-center gap-2 bg-blue-600 hover:bg-blue-400 text-white font-semibold px-6 py-3 rounded-full transition-all'
					onClick={() => setIsContactOpen(!isContactOpen)}
					aria-label='Contact Us'>
					<FaPhone />
					<span>Contact</span>
				</button>
				{isContactOpen && <Contact click={setIsContactOpen} />}
			</div>

			{/* Mobile */}
			<div className='flex md:hidden w-full h-full items-center justify-between'>
				<p className='text-white font-bold text-xl'>Daniel Agbeni</p>
				<div
					className='relative'
					onClick={() => setIsMenuOpen(!isMenuOpen)}>
					{isMenuOpen ? (
						<MdClose className='text-3xl text-red-600 cursor-pointer' />
					) : (
						<MdMenu className='text-3xl text-gray-400 cursor-pointer' />
					)}
					{isMenuOpen && (
						<div
							ref={menuRef}
							className='absolute top-12 right-0 w-64 bg-gray-800 rounded-lg shadow-lg z-50 py-3'>
							<ul className='flex flex-col gap-2'>{renderLinks(true)}</ul>
							<li
								className='cursor-pointer font-semibold hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-all duration-300'
								onClick={() => {
									setIsMenuOpen(false);
									setIsContactOpen(!isContactOpen);
								}}>
								Contact
							</li>
						</div>
					)}
				</div>
				{isContactOpen && <Contact click={setIsContactOpen} />}
			</div>
		</header>
	);
};

export default Header;
