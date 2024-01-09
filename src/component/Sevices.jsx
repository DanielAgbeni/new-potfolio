/** @format */

import React, { useEffect } from 'react';
import {
	FaChrome,
	FaCode,
	FaCss3,
	FaEdge,
	FaFigma,
	FaFirefoxBrowser,
	FaGit,
	FaGitAlt,
	FaHtml5,
	FaJsSquare,
	FaLaptopCode,
	FaOpera,
	FaReact,
	FaTerminal,
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const Sevices = () => {
	useEffect(() => {
		document.title = 'Daniel Agbeni || Services';
	}, []);
	return (
		<div className=' text-white flex flex-col items-center justify-center gap-6 py-5 pb-10'>
			<div className=' font-extrabold md:text-5xl text-3xl'>
				Services I Offer
			</div>
			<div className=' md:w-1/2 text-lg text-center'>
				Enhance your online presence with my front-end web development
				expertise. I specialize in creating visually stunning and user-friendly
				websites, offering services such as responsive design, custom
				interfaces, cross-browser compatibility, performance optimization,
				interactive elements, accessibility compliance, and code optimization.
				Collaborating closely with clients, I ensure tailored solutions that
				align seamlessly with brand identity and business goals. Let's create a
				standout web experience that leaves a lasting impression—contact me to
				discuss how my services can elevate your online presence.
			</div>
			<div className=' md:flex grid items-start justify-center w-[80%] gap-5 mt-10'>
				<div className=' flex items-center justify-between border-4 p-6 gap-10 md:w-1/2 w-full shadow-2xl bg-white bg-opacity-5 rounded-lg'>
					<div className=' bg-gray-200 rounded-full h-20 w-20 flex items-center justify-center bg-opacity-10 p-4 hover:animate-pulse'>
						<FaLaptopCode className=' text-5xl' />
					</div>
					<div className='gap-2 flex flex-col'>
						<h1 className=' font-extrabold'>Web Development</h1>
						<p className=''>
							Creation and launching of web apps. This process involves the
							client side (Frontend) to the server side (Backend)
						</p>
					</div>
				</div>
				<div className=' flex-col flex bg-opacity-10 w-fit bg-white px-10 py-5 shadow-2xl rounded-xl cursor-default'>
					<h1 className=' font-bold text-xl'>Web Development</h1>
					<h2 className=' font-semibold text-lg mt-4'>Skills</h2>
					<div className=' flex flex-col gap-2 py-2'>
						<li className=' flex items-center gap-3'>
							HTML <FaHtml5 />
						</li>
						<li className=' flex items-center gap-3'>
							CSS <FaCss3 />
						</li>
						<li className=' flex items-center gap-3'>
							Javascript <FaJsSquare />
						</li>
						<li className=' flex items-center gap-3'>
							Tailwind <SiTailwindcss />
						</li>
						<li className=' flex items-center gap-3'>
							React.Js <FaReact />
						</li>
						<li className=' flex items-center gap-3'>
							Git <FaGit />
						</li>
					</div>

					<h2 className=' font-semibold text-lg mt-8'>Tools</h2>
					<div className=' flex flex-col gap-2 py-2'>
						<li className=' flex items-center gap-3'>
							VS Code <FaCode />
						</li>
						<li className=' flex items-center gap-3'>
							Git Bash <FaGitAlt />
						</li>
						<li className=' flex items-center gap-3'>
							CLI <FaTerminal />
						</li>
						<li className=' flex items-center gap-3'>
							Figma <FaFigma />
						</li>

						<li className=' flex items-center gap-3'>
							Chrome Browser <FaChrome />
						</li>
						<li className=' flex items-center gap-3'>
							Microsoft Edge Browser <FaEdge />
						</li>
						<li className=' flex items-center gap-3'>
							Firefox Browser <FaFirefoxBrowser />
						</li>
						<li className=' flex items-center gap-3'>
							Opera Mini Browser <FaOpera />
						</li>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sevices;
