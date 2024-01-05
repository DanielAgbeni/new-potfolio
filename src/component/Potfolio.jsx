/** @format */

import React from 'react';
import { works } from '../assets/projectData';
import PotfolioCard from './PotfolioCard';

const Potfolio = () => {
	return (
		<div className=' h-full '>
			<div className=' text-center font-extrabold text-5xl text-white mb-20'>
				Completed Project
			</div>
			<div className=' grid lg:grid-cols-3 gap-10 md:grid-cols-2 md:gap-2 items-center  justify-center mb-10 '>
				{works.map((items) => (
					<PotfolioCard
						key={items.id}
						works={items}
					/>
				))}
			</div>
		</div>
	);
};

export default Potfolio;
