/** @format */

import React, { useEffect, useState } from 'react';
import dan from './img/dan.jpg';
import {
	FaArrowRight,
	FaCode,
	FaGit,
	FaGithub,
	FaGraduationCap,
	FaJava,
	FaPython,
	FaReact,
	FaReacteurope,
	FaVideo,
	FaYoutube,
} from 'react-icons/fa';
import {
	MdArrowLeft,
	MdArrowRight,
	MdCastForEducation,
	MdCode,
	MdComputer,
	MdContentCopy,
	MdJavascript,
	MdWork,
	MdWorkHistory,
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import AOS from 'aos';

const About = () => {
	const [scrollX, setScrollX] = useState(0);
	const handleScrollX = (value) => {
		setScrollX(scrollX + value);
	};
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div className='w-full h-full flex flex-col items-center px-5 mb-6'>
			<div className='flex items-center justify-center p-2'>
				<p className='text-xl sm:text-3xl md:text-5xl font-bold text-red-600 mt-5'>
					Who I am
				</p>
			</div>
			{/* <div className='flex items-center justify-center gap-4 mb-20'>
				<div className='flex flex-col items-center justify-center px-40'>
					<p
						className='md:text-lg text-gray-200 w-full text-center px-60 md:p-12'
						data-aos='fade-up'>
						Daniel Agbeni Oluwafemi is a versatile individual excelling as a
						frontend web developer, computer scientist, and YouTuber. With a
						strong technical background and creative skills, I create innovative
						web solutions while also sharing my knowledge through engaging
						videos on youtube. My multidimensional expertise and passion drive
						my impactful contributions in the tech and online communities.
					</p>
					<div className='grid grid-cols-1 md:grid-cols-3 items-center justify-center p-3 rounded-2xl drop-shadow-2xl gap-10 w-full mt-20 relative'>
						<FaCode className=' text-6xl font-extralight text-white border-white rounded-3xl hover:scale-110' />
						<FaYoutube className=' text-6xl font-extralight text-red-600 rounded-3xl hover:scale-110' />
						<MdComputer className=' text-6xl font-extralight text-white rounded-3xl hover:scale-110' />
						<FaReact className=' text-6xl font-extralight text-white hover:scale-110' />
						<FaGithub className='text-6xl font-extralight text-whiterounded-3xl hover:scale-110' />
						<FaGit className=' text-6xl font-extralight text-white rounded-3xl hover:scale-110' />
						<FaPython className=' text-6xl font-extralight text-white rounded-3xl hover:scale-110' />
						<FaJava className=' text-6xl font-extralight text-white rounded-3xl hover:scale-110' />
						<MdJavascript className=' text-6xl font-extralight text-white rounded-3xl hover:scale-110' />
					</div>
				</div>
			</div> */}
			<div>
				<div>
					<p className='text-gray-200 text-center'>
						Daniel Agbeni Oluwafemi is a versatile individual excelling as a
						frontend web developer, computer scientist, and YouTuber. With a
						strong technical background and creative skills, I create innovative
						web solutions while also sharing my knowledge through engaging
						videos on youtube. My multidimensional expertise and passion drive
						my impactful contributions in the tech and online communities.
					</p>
				</div>
				<div className='flex justify-center items-center my-14'>
					<FaCode className=' text-6xl font-extralight text-white border-white rounded-3xl hover:scale-110' />
					<FaYoutube className=' text-6xl font-extralight text-red-600 rounded-3xl hover:scale-110' />
					<MdComputer className=' text-6xl font-extralight text-white rounded-3xl hover:scale-110' />
					<FaReact className=' text-6xl font-extralight text-white hover:scale-110' />
					<FaGithub className='text-6xl font-extralight text-whiterounded-3xl hover:scale-110' />
					<FaGit className=' text-6xl font-extralight text-white rounded-3xl hover:scale-110' />
					<FaPython className=' text-6xl font-extralight text-white rounded-3xl hover:scale-110' />
					<FaJava className=' text-6xl font-extralight text-white rounded-3xl hover:scale-110' />
					<MdJavascript className=' text-6xl font-extralight text-white rounded-3xl hover:scale-110' />
				</div>
			</div>

			<div
				className='grid grid-cols-1 md:grid-cols-3 gap-40 mt-20'
				data-aos='flip-up'>
				<div
					className='border p-4 h-fit -translate-x-1/2 backdrop-blur-2xl'
					data-aos='flip-right'>
					<div className='grid grid-cols-1 gap-3'>
						<h4 className='text-center font-extrabold text-gray-200 text-2xl relative before:absolute before:rounded-lg before:content before:w-full before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-red-800 to-blue-300 transition-all ease-in-out duration-100 flex items-center justify-center gap-3'>
							Skills
							<MdWork className='text-2xl' />
						</h4>
						<p className='text-xl text-gray-200 font-bold'>
							Frontend Web-developer
						</p>
						<p className='text-gray-400'>
							Specialized in building interactive webpages
						</p>
						<p className='text-xl text-gray-200 font-bold'>Content Creator</p>
						<p className='text-gray-400'>
							Creating engaging tech content and sharing web solutions
						</p>
						<p className='text-xl text-gray-200 font-bold'>
							Computer Scientist
						</p>
						<p className='text-gray-400'>
							Deep knowledge of computers from hardware to software
						</p>
					</div>
				</div>
				<div
					className='border p-4 -translate-x-1/2 backdrop-blur-2xl'
					data-aos='flip-up'>
					<div className='grid grid-cols-1 gap-3'>
						<h4 className='text-center font-extrabold text-gray-200 text-2xl relative before:absolute before:rounded-lg before:content before:w-full before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-red-800 to-blue-300 transition-all ease-in-out duration-100 flex items-center justify-center gap-3'>
							Experience
							<MdWorkHistory className='text-2xl' />
						</h4>
						<p className='text-xl text-gray-200 font-bold'>
							Started working with Javascript, React, Tailwind
						</p>
						<p className='text-gray-400'>2023</p>
						<p className='text-xl text-gray-200 font-bold'>
							Basic Knowledge of Python, Java & C
						</p>
						<p className='text-gray-400'>2022</p>
						<p className='text-xl text-gray-200 font-bold'>
							Started uploading tech content on youtube
						</p>
						<p className='text-gray-400'>2022</p>
						<p className='text-xl text-gray-200 font-bold'>
							Got Addmission into Federal polytechnic Ado-Ekiti
						</p>
						<p className='text-gray-400'>2022</p>
						<p className='text-xl text-gray-200 font-bold'>HTML5 & CSS3</p>
						<p className='text-gray-400'>2021</p>
					</div>
				</div>
				<div
					className='border h-fit p-4 -translate-x-1/2 backdrop-blur-2xl md:bg-gray-600 md:bg-opacity-30'
					data-aos='flip-left'>
					<div className='grid grid-cols-1 gap-3'>
						<h4 className='text-center font-extrabold text-gray-200 text-2xl relative before:absolute before:rounded-lg before:content before:w-full before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-red-800 to-blue-300 transition-all ease-in-out duration-100 flex items-center justify-center gap-3'>
							Education
							<FaGraduationCap className='text-2xl' />
						</h4>
						<p className='text-xl text-gray-200 font-bold'>
							ND Computer Science
						</p>
						<p className='text-gray-400'>
							Federal Polythenic Ado-Ekiti (2022 - 2023)
						</p>
						<p className='text-xl text-gray-200 font-bold'>Computer Repairs</p>
						<p className='text-gray-400'>Webzone Technologies (2021)</p>
						<p className='text-xl text-gray-200 font-bold'>
							WASSCE & NECO River of Life Royal School
						</p>
						<p className='text-gray-400'>2020</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;

//
