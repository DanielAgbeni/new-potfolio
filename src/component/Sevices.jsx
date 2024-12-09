/** @format */

import React, { useEffect } from 'react';
import {
	FaChrome,
	FaCode,
	FaCss3,
	FaFigma,
	FaGit,
	FaHtml5,
	FaJsSquare,
	FaLaptopCode,
	FaReact,
	FaTerminal,
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const Services = () => {
	useEffect(() => {
		document.title = 'Daniel Agbeni || Services';
	}, []);

	return (
		<div className='text-white flex flex-col items-center justify-center gap-8 py-10 px-4'>
			{/* Header */}
			<h1 className='font-extrabold text-4xl md:text-5xl text-center'>
				Services I Offer
			</h1>

			{/* Description */}
			<p className='md:w-3/4 text-base md:text-lg text-center leading-relaxed'>
				I specialize in front-end web development, delivering visually stunning
				and user-friendly websites. From responsive design and custom interfaces
				to performance optimization and cross-browser compatibility, I provide
				tailored solutions that align with your brand identity and business
				goals.
			</p>

			{/* Services Grid */}
			<div className='grid gap-8 md:grid-cols-2 w-full md:w-[80%] mt-10'>
				{/* Web Development Service */}
				<div className='flex items-center border-4 p-6 gap-6 shadow-xl bg-white bg-opacity-10 rounded-lg'>
					<div className='bg-gray-200 bg-opacity-10 rounded-full h-20 w-20 flex items-center justify-center hover:animate-pulse'>
						<FaLaptopCode className='text-5xl text-sky-500' />
					</div>
					<div className='flex flex-col gap-3'>
						<h2 className='font-extrabold text-xl'>Web Development</h2>
						<p className='text-sm'>
							From client-side (Frontend) to server-side (Backend), I craft and
							launch high-quality web applications tailored to your needs.
						</p>
					</div>
				</div>

				{/* Skills and Tools */}
				<div className='bg-white bg-opacity-10 shadow-xl rounded-lg p-6'>
					<h2 className='font-bold text-xl mb-4'>Web Development Skills</h2>
					<div className='grid grid-cols-2 gap-4'>
						{/* Skills */}
						<div>
							<h3 className='font-semibold mb-2'>Skills</h3>
							<ul className='space-y-2'>
								<li className='flex items-center gap-3'>
									HTML <FaHtml5 />
								</li>
								<li className='flex items-center gap-3'>
									CSS <FaCss3 />
								</li>
								<li className='flex items-center gap-3'>
									Javascript <FaJsSquare />
								</li>
								<li className='flex items-center gap-3'>
									Tailwind <SiTailwindcss />
								</li>
								<li className='flex items-center gap-3'>
									React.Js <FaReact />
								</li>
								<li className='flex items-center gap-3'>
									Git <FaGit />
								</li>
							</ul>
						</div>

						{/* Tools */}
						<div>
							<h3 className='font-semibold mb-2'>Tools</h3>
							<ul className='space-y-2'>
								<li className='flex items-center gap-3'>
									VS Code <FaCode />
								</li>
								<li className='flex items-center gap-3'>
									Git Bash <FaGit />
								</li>
								<li className='flex items-center gap-3'>
									CLI <FaTerminal />
								</li>
								<li className='flex items-center gap-3'>
									Figma <FaFigma />
								</li>
								<li className='flex items-center gap-3'>
									Chrome Browser <FaChrome />
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
