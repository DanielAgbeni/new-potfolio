import React from 'react';
import { FaGithub } from 'react-icons/fa6';
import { FaLink } from 'react-icons/fa';

const PotfolioCard = ({ works }) => {
	return (
		<div className='flex flex-col md:flex-row gap-5 md:mx-3 mx-6'>
			<div className='relative max-w-full md:max-w-2xl h-fit rounded-xl overflow-hidden shadow-2xl bg-white bg-opacity-10 p-4 px-8 hover:scale-105 transition-all duration-200 ease-in-out'>
				<div className='flex flex-row'>
					<div className='mr-4'>
						<img
							src={works.mobileimg}
							alt=''
							className='hover:scale-105 cursor-pointer transition-all duration-200 ease-in-out max-w-full'
						/>
					</div>
					<div>
						<img
							src={works.pcimg}
							alt=''
							className='hover:scale-105 cursor-pointer transition-all duration-200 ease-in-out max-w-full'
						/>
					</div>
				</div>
				<div className='text-white gap-2'>
					<h1 className='text-2xl text-white text-center'>{works.title}</h1>
					<a
						href={works.link}
						target='_blank'
						rel='noopener noreferrer'
						className='underline flex items-center gap-1'>
						<FaLink /> {works.link}
					</a>
					<a
						href={works.githubLink}
						target='_blank'
						className='p-3 m-3'>
						<FaGithub className='text-3xl' />
					</a>
					<p>{works.description}</p>
				</div>
			</div>
		</div>
	);
};

export default PotfolioCard;
