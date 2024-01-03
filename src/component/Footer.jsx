/** @format */

import React from 'react';

const Footer = () => {
	const now = new Date().getFullYear();
	return (
		<footer className=' w-screen fixed bottom-0  flex items-center justify-center bg-black py-2'>
			<p className='text-white text-base'> &copy; {now} Daniel Agbeni </p>
		</footer>
	);
};

export default Footer;
