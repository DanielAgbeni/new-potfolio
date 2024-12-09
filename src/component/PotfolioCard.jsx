/** @format */

import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

const PotfolioCard = ({ works }) => {
	return (
		<div className='bg-white bg-opacity-10 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out'>
			{/* Title */}
			<h2 className='text-2xl font-bold text-white text-center mb-4'>
				{works.title}
			</h2>

			{/* Images Section */}
			<div className='flex justify-center items-center gap-4 mb-4'>
				{/* Mobile View */}
				<div className='flex flex-col items-center'>
					<img
						src={works.mobileimg}
						alt={`${works.title} mobile view`}
						className='w-32 h-auto rounded-lg hover:scale-110 transition-transform duration-200'
						loading='lazy'
					/>
					<span className='text-sm text-gray-400 mt-2'>Mobile View</span>
				</div>
				{/* PC View */}
				<div className='flex flex-col items-center'>
					<img
						src={works.pcimg}
						alt={`${works.title} PC view`}
						className='w-48 h-auto rounded-lg hover:scale-110 transition-transform duration-200'
						loading='lazy'
					/>
					<span className='text-sm text-gray-400 mt-2'>PC View</span>
				</div>
			</div>

			{/* Description */}
			<p className='text-sm text-gray-300 mb-4 text-center'>
				{works.description}
			</p>

			{/* Links Section */}
			<div className='flex justify-center gap-6 mt-4'>
				<a
					href={works.link}
					target='_blank'
					rel='noopener noreferrer'
					className='flex items-center gap-2 text-blue-400 hover:text-blue-500 transition-colors'>
					<FaLink className='text-xl' /> Live Project
				</a>
				<a
					href={works.githubLink}
					target='_blank'
					rel='noopener noreferrer'
					className='flex items-center gap-2 text-gray-400 hover:text-gray-500 transition-colors'>
					<FaGithub className='text-xl' /> GitHub
				</a>
			</div>
		</div>
	);
};

export default PotfolioCard;
