import React, { useEffect } from 'react';
import {
	FaArrowRight,
	FaCode,
	FaDownload,
	FaGitAlt,
	FaGithub,
	FaGraduationCap,
	FaJava,
	FaNodeJs,
	FaPython,
	FaReact,
	FaYoutube,
} from 'react-icons/fa';
import { MdWork, MdWorkHistory } from 'react-icons/md';
import { SiTailwindcss } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';
import AOS from 'aos';
import {
	SiMongodb,
	SiGooglecloud,
	SiMicrosoftazure,
	SiDocker,
	SiKubernetes,
	SiTypescript,
	SiPostgresql,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import cv from '../assets/Daniel Agbeni New CV.pdf';

const About = () => {
	useEffect(() => {
		document.title = 'Daniel Agbeni || About';
		AOS.init({
			duration: 1000,
			once: true,
		});
	}, []);

	const TechnologyIcon = ({ Icon, color, title }) => (
		<div className='group relative flex flex-col items-center'>
			<Icon
				className={`text-4xl ${color} hover:scale-110 transition-transform`}
				title={title}
			/>
			<span className='absolute top-full mt-2 text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
				{title}
			</span>
		</div>
	);

	const SectionCard = ({ title, icon: Icon, children, animationDelay }) => (
		<div
			className='p-6 bg-gray-800 bg-opacity-70 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300'
			data-aos='fade-up'
			data-aos-delay={animationDelay}>
			<h4 className='text-2xl font-bold text-center text-gray-100 mb-4 flex items-center justify-center gap-2'>
				{title} <Icon className='text-red-600' />
			</h4>
			{children}
		</div>
	);

	return (
		<div className='min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8 rounded-md'>
			<div className='max-w-7xl mx-auto'>
				{/* Header Section */}
				<div className='text-center mb-12'>
					<h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 mb-6'>
						Who I Am
					</h1>
					<p className='text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed mb-8'>
						I am Daniel Agbeni Oluwafemi, a skilled frontend developer, computer
						scientist, and educator. I specialize in creating dynamic web
						solutions while inspiring the next generation of tech enthusiasts as
						a coding instructor. My diverse expertise encompasses technical
						development, media production, and hardware maintenance.
					</p>
					<a
						href={cv}
						download>
						<button className='flex items-center mx-auto justify-center py-3 px-6 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white text-lg gap-2 hover:scale-105 transition-all shadow-md hover:shadow-lg'>
							Download Portfolio <FaDownload />
						</button>
					</a>
				</div>

				{/* Technologies Section */}
				<div className='text-center mb-12'>
					<h2 className='text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400'>
						Technologies I Use
					</h2>
					<div className='flex justify-center items-center flex-wrap gap-6 md:gap-8'>
						<TechnologyIcon
							Icon={FaCode}
							color='text-white'
							title='Programming'
						/>
						<TechnologyIcon
							Icon={FaReact}
							color='text-sky-400'
							title='React'
						/>
						<TechnologyIcon
							Icon={FaGithub}
							color='text-white'
							title='GitHub'
						/>
						<TechnologyIcon
							Icon={FaGitAlt}
							color='text-orange-500'
							title='Git'
						/>
						<TechnologyIcon
							Icon={FaNodeJs}
							color='text-green-500'
							title='Node.js'
						/>
						<TechnologyIcon
							Icon={FaPython}
							color='text-yellow-400'
							title='Python'
						/>
						<TechnologyIcon
							Icon={FaJava}
							color='text-blue-500'
							title='Java'
						/>
						<TechnologyIcon
							Icon={IoLogoJavascript}
							color='text-yellow-500'
							title='JavaScript'
						/>
						<TechnologyIcon
							Icon={SiTailwindcss}
							color='text-blue-400'
							title='Tailwind CSS'
						/>
						<TechnologyIcon
							Icon={SiMongodb}
							color='text-green-600'
							title='MongoDB'
						/>
						<TechnologyIcon
							Icon={FaAws}
							color='text-orange-400'
							title='AWS'
						/>
						<TechnologyIcon
							Icon={SiGooglecloud}
							color='text-blue-500'
							title='Google Cloud'
						/>
						{/* <TechnologyIcon
							Icon={SiMicrosoftazure}
							color='text-blue-600'
							title='Azure'
						/> */}
						<TechnologyIcon
							Icon={SiDocker}
							color='text-sky-500'
							title='Docker'
						/>
						<TechnologyIcon
							Icon={SiKubernetes}
							color='text-blue-600'
							title='Kubernetes'
						/>
						<TechnologyIcon
							Icon={SiTypescript}
							color='text-blue-500'
							title='TypeScript'
						/>
						{/* <TechnologyIcon
							Icon={SiPostgresql}
							color='text-blue-400'
							title='PostgreSQL'
						/> */}
					</div>
				</div>

				{/* Details Grid */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					<SectionCard
						title='Skills'
						icon={MdWork}
						animationDelay={200}>
						<ul className='space-y-3 text-gray-300'>
							{[
								{
									label: 'Frontend Development',
									value: 'HTML, CSS, JavaScript, React JS, Responsive Design',
								},
								{
									label: 'Computer Hardware',
									value: 'Repairs and Maintenance, Troubleshooting',
								},
								{
									label: 'Media Production',
									value: 'Audio-Visual Equipment, Live Streaming',
								},
								{
									label: 'Soft Skills',
									value:
										'Effective Communication, Teamwork, Critical Thinking, Innovation',
								},
								{
									label: 'Teaching',
									value:
										'Curriculum Development, Mentoring, Technical Instruction',
								},
							].map((skill, index) => (
								<li
									key={index}
									className='border-b border-gray-700 pb-2 last:border-none'>
									<strong className='text-red-400'>{skill.label}:</strong>{' '}
									{skill.value}
								</li>
							))}
						</ul>
					</SectionCard>

					<SectionCard
						title='Experience'
						icon={MdWorkHistory}
						animationDelay={400}>
						<ul className='space-y-4 text-gray-300'>
							{[
								{
									title: 'Computer Trainer and Coding Instructor',
									company: 'Barry Tech',
									period: 'September 2023 – Present',
									description:
										'Developed and delivered web development curriculum focused on React JS and mentored students.',
								},
								{
									title: 'Coding Instructor',
									company: 'Swebs Coding Institute',
									period: 'March 2023 – August 2023',
									description:
										'Taught JavaScript fundamentals and React JS, guiding students through hands-on projects.',
								},
							].map((exp, index) => (
								<li
									key={index}
									className='bg-gray-700 bg-opacity-50 p-4 rounded-lg'>
									<div className='font-bold text-red-400'>
										{exp.title} | {exp.company}
									</div>
									<div className='text-sm text-gray-400 mb-2'>{exp.period}</div>
									<p className='text-sm'>{exp.description}</p>
								</li>
							))}
						</ul>
					</SectionCard>

					<SectionCard
						title='Education'
						icon={FaGraduationCap}
						animationDelay={600}>
						<ul className='space-y-4 text-gray-300'>
							{[
								{
									degree: 'ND Computer Science',
									institution: 'Federal Polytechnic Ado-Ekiti',
									period: '2021 – 2023',
								},
								{
									degree: 'Computer Repairs',
									institution: 'Webzone Technologies',
									period: '2021',
								},
								{
									degree: 'WASSCE & NECO',
									institution: 'River of Life Royal School',
									period: '2020',
								},
							].map((edu, index) => (
								<li
									key={index}
									className='bg-gray-700 bg-opacity-50 p-4 rounded-lg'>
									<div className='font-bold text-red-400'>{edu.degree}</div>
									<div className='text-sm text-gray-400'>{edu.institution}</div>
									<div className='text-xs text-gray-500'>{edu.period}</div>
								</li>
							))}
						</ul>
					</SectionCard>
				</div>
			</div>
		</div>
	);
};

export default About;
