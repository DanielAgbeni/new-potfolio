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
	FaNodeJs,
	FaDatabase,
	FaServer,
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiPostman } from 'react-icons/si';

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
				I specialize in full-stack web development using the MERN stack,
				delivering both visually stunning frontends and robust backend
				solutions. From responsive design and custom interfaces to RESTful APIs
				and database management, I provide comprehensive solutions that align
				with your brand identity and business goals.
			</p>

			{/* Services Grid */}
			<div className='grid gap-8 md:grid-cols-2 w-full md:w-[80%] mt-10'>
				{/* Frontend Development Service */}
				<div className='flex items-center border-4 p-6 gap-6 shadow-xl bg-white bg-opacity-10 rounded-lg'>
					<div className='bg-gray-200 bg-opacity-10 rounded-full h-20 w-20 flex items-center justify-center hover:animate-pulse'>
						<FaLaptopCode className='text-5xl text-sky-500' />
					</div>
					<div className='flex flex-col gap-3'>
						<h2 className='font-extrabold text-xl'>Frontend Development</h2>
						<p className='text-sm'>
							Creating responsive and interactive user interfaces using modern
							frontend technologies like React and Tailwind CSS.
						</p>
					</div>
				</div>

				{/* Backend Development Service */}
				<div className='flex items-center border-4 p-6 gap-6 shadow-xl bg-white bg-opacity-10 rounded-lg'>
					<div className='bg-gray-200 bg-opacity-10 rounded-full h-20 w-20 flex items-center justify-center hover:animate-pulse'>
						<FaServer className='text-5xl text-green-500' />
					</div>
					<div className='flex flex-col gap-3'>
						<h2 className='font-extrabold text-xl'>Backend Development</h2>
						<p className='text-sm'>
							Building scalable server-side applications with Node.js, Express,
							and MongoDB for efficient data management and API development.
						</p>
					</div>
				</div>

				{/* Frontend Skills and Tools */}
				<div className='bg-white bg-opacity-10 shadow-xl rounded-lg p-6'>
					<h2 className='font-bold text-xl mb-4'>Frontend Development</h2>
					<div className='grid grid-cols-2 gap-4'>
						{/* Skills */}
						<div>
							<h3 className='font-semibold mb-2'>Skills</h3>
							<ul className='space-y-2'>
								<li className='flex items-center gap-3'>
									HTML <FaHtml5 className='text-orange-500' />
								</li>
								<li className='flex items-center gap-3'>
									CSS <FaCss3 className='text-blue-500' />
								</li>
								<li className='flex items-center gap-3'>
									Javascript <FaJsSquare className='text-yellow-400' />
								</li>
								<li className='flex items-center gap-3'>
									Tailwind <SiTailwindcss className='text-cyan-400' />
								</li>
								<li className='flex items-center gap-3'>
									React.Js <FaReact className='text-blue-400' />
								</li>
								<li className='flex items-center gap-3'>
									Git <FaGit className='text-orange-600' />
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
									Git Bash <FaGit className='text-orange-600' />
								</li>
								<li className='flex items-center gap-3'>
									CLI <FaTerminal />
								</li>
								<li className='flex items-center gap-3'>
									Figma <FaFigma className='text-purple-500' />
								</li>
								<li className='flex items-center gap-3'>
									Chrome Browser <FaChrome className='text-yellow-500' />
								</li>
							</ul>
						</div>
					</div>
				</div>

				{/* Backend Skills and Tools */}
				<div className='bg-white bg-opacity-10 shadow-xl rounded-lg p-6'>
					<h2 className='font-bold text-xl mb-4'>Backend Development</h2>
					<div className='grid grid-cols-2 gap-4'>
						{/* Skills */}
						<div>
							<h3 className='font-semibold mb-2'>Skills</h3>
							<ul className='space-y-2'>
								<li className='flex items-center gap-3'>
									Node.js <FaNodeJs className='text-green-500' />
								</li>
								<li className='flex items-center gap-3'>
									Express.js <SiExpress />
								</li>
								<li className='flex items-center gap-3'>
									MongoDB <SiMongodb className='text-green-600' />
								</li>
								<li className='flex items-center gap-3'>
									REST APIs <FaServer className='text-blue-500' />
								</li>
								<li className='flex items-center gap-3'>
									Database Design <FaDatabase className='text-orange-500' />
								</li>
							</ul>
						</div>

						{/* Tools */}
						<div>
							<h3 className='font-semibold mb-2'>Tools</h3>
							<ul className='space-y-2'>
								<li className='flex items-center gap-3'>
									Postman <SiPostman className='text-orange-500' />
								</li>
								<li className='flex items-center gap-3'>
									MongoDB Compass <SiMongodb className='text-green-600' />
								</li>
								<li className='flex items-center gap-3'>
									Terminal <FaTerminal />
								</li>
								<li className='flex items-center gap-3'>
									Git <FaGit className='text-orange-600' />
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
