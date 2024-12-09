/** @format */

import React, { useEffect } from 'react';
import { works } from '../assets/projectData';
import PotfolioCard from './PotfolioCard';

const Potfolio = () => {
	useEffect(() => {
		document.title = 'Daniel Agbeni || Portfolio';
	}, []);

	return (
		<div className='min-h-screen bg-black text-white py-10 rounded-md'>
			<h1 className='text-center font-extrabold text-4xl md:text-5xl mt-5 mb-12'>
				Completed Projects
			</h1>

			{/* Projects Grid */}
			<div className='grid gap-10 md:grid-cols-2 lg:grid-cols-3 px-6 md:px-12'>
				{works.map((project) => (
					<PotfolioCard
						key={project.id}
						works={project}
					/>
				))}
			</div>
		</div>
	);
};

export default Potfolio;
