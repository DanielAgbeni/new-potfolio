/** @format */

import React from 'react';
import {
	FaDiscord,
	FaGithub,
	FaInstagram,
	FaTwitter,
	FaWhatsapp,
	FaYoutube,
} from 'react-icons/fa';
import { MdClose, MdEmail, MdLocationCity, MdSend } from 'react-icons/md';
import { motion } from 'framer-motion';

const Contact = ({ click }) => {
	return (
		<div className='absolute w-[90%] max-w-[800px] flex flex-col gap-3 p-10 -translate-x-1/2 backdrop-blur-xl bg-gradient-to-br from-gray-600 to-sky-600 bg-opacity-90  shadow-white top-20 rounded-md left-1/2'>
			<div className='flex justify-end'>
				<button onClick={() => click(false)}>
					<MdClose className='text-red-500 text-xl' />
				</button>
			</div>
			<div className='flex flex-wrap justify-between gap-10'>
				<div className='w-full sm:w-[40%] flex flex-col gap-4 '>
					<h1 className='font-bold text-gray-200 text-sm'>Message me</h1>
					<form className='flex flex-col gap-2'>
						<div className='w-full relative flex flex-col'>
							<div className='w-full order-2 relative h-auto'>
								<input
									type='text'
									placeholder='Your Name'
									className='w-full py-3  drop-shadow-none border  bg-sky-800  px-3 pr-3 pl-3 outline-none rounded-md shadow-none '
								/>
							</div>
						</div>
						<div className='w-full relative flex flex-col'>
							<div className='w-full order-2 relative h-auto'>
								<input
									id=''
									type='text'
									placeholder='Your email'
									class='w-full py-3  drop-shadow-none border bg-sky-800  px-3 pr-3 pl-3 outline-none rounded-md shadow-none '
								/>
							</div>
						</div>
						<div className='w-full relative flex flex-col'>
							<div class='w-full order-2 relative h-auto  '>
								<input
									id=''
									type='text'
									placeholder='Reason for message'
									class='w-full py-3  drop-shadow-none border bg-sky-800   px-3 pr-3 pl-3 outline-none rounded-md shadow-none '
								/>
							</div>
						</div>
						<div className='w-full relative flex flex-col'>
							<div class='w-full order-2 relative h-auto  '>
								<textarea
									id=''
									placeholder='Message...'
									class='w-full drop-shadow-none border bg-sky-800  py-3 px-3 outline-none rounded-md shadow-none h-[100px]'></textarea>
							</div>
						</div>
						<button className='button-hover inline-flex py-2 px-5 rounded-full font-medium bg-blue-700 text-white items-center justify-center gap-2 text-center'>
							<span>Send</span>
							<MdSend className='text-lg hover:scale-110' />
						</button>
					</form>
				</div>
				<div class='relative md:flex hidden items-center justify-center w-full overflow-hidden sm:w-auto'>
					<p class='font-bold text-gray-400 after:absolute before:absolute after:bg-gray-800  before:bg-gray-800  after:h-[2px] after:w-full before:h-[2px] before:w-full after:top-1/2 after:-translate-y-1/2 before:bottom-1/2 before:-translate-y-1/2 after:-left-[60%] before:-right-[60%] sm:after:translate-y-[unset] sm:before:translate-y-[unset] sm:after:h-full sm:after:-top-[55%] sm:after:left-1/2 sm:after:-translate-x-1/2 sm:after:w-[2px] sm:before:h-full sm:before:-bottom-[55%] sm:before:left-1/2 sm:before:-translate-x-1/2 sm:before:w-[2px] '>
						OR
					</p>
				</div>
				<div class='w-full sm:w-[40%] md:flex hidden flex-col gap-10'>
					<h1 class='font-bold text-gray-200 text-sm'>Contact Me</h1>
					<ul class='flex flex-col gap-4 text-gray-400'>
						<li>
							<a
								href='mailto:danielagbeni12@gmail.com'
								target='_blank'
								rel='noreferrer'
								class='flex items-center gap-2 duration-300 hover:pl-2'>
								<span class='text-primary'>
									<MdEmail className=' w-6 h-6' />
								</span>
								<span className='text-white'>danielagbeni12@gmail.com</span>
							</a>
						</li>
						<li>
							<a
								href=''
								target='_blank'
								rel='noreferrer'
								class='flex items-center gap-2 duration-300 hover:pl-2'>
								<span class='text-primary'>
									<MdLocationCity className=' w-6 h-6' />
								</span>
								<span className='text-white'>Lagos State Nigeria</span>
							</a>
						</li>
					</ul>
					<ul class='flex flex-wrap items-center gap-6 text-primary-700 gap-x-4 text-gray-400'>
						<li class='text-lg md:text-xl'>
							<a
								title='Follow me on X'
								href='https://twitter.com/Agbeni_Daniel'
								aria-label='Follow me on X'
								target='_blank'
								rel='norefferer'
								class='inline-flex hover:scale-110 duration-300 hover:text-white'>
								<FaTwitter className=' w-7 h-7' />
							</a>
						</li>
						<li class='text-lg md:text-xl'>
							<a
								title='Subscribe to my channel'
								href='https://youtube.com/@danielagbeni'
								aria-label='Subscribe to my channel'
								target='_blank'
								rel='norefferer'
								class='inline-flex hover:scale-110duration-300 hover:text-white'>
								<FaYoutube className='w-7 h-7' />
							</a>
						</li>
						<li class='text-lg md:text-xl'>
							<a
								title='Follow me on Instagram'
								href='https://instagram.com/daniel_agbeni'
								aria-label='Follow me on Instagram'
								target='_blank'
								rel='norefferer'
								class='inline-flex hover:scale-110 duration-300 hover:text-white'>
								<FaInstagram className='w-7 h-7 ' />
							</a>
						</li>
						<li class='text-lg md:text-xl'>
							<a
								title='Follow me on Github'
								href='https://github.com/DanielAgbeni'
								aria-label='Follow me on Github'
								target='_blank'
								rel='norefferer'
								class='inline-flex hover:scale-110 duration-300 hover:text-white'>
								<FaGithub className='w-7 h-7' />
							</a>
						</li>
						<li class='text-lg md:text-xl'>
							<a
								title='Follow me on Discord'
								href='https://discordapp.com/users/daniel_agbeni'
								aria-label='Follow me on Discord'
								target='_blank'
								rel='norefferer'
								class='inline-flex hover:scale-110 duration-300 hover:text-white'>
								<FaDiscord className='w-7 h-7' />
							</a>
						</li>
						<li class='text-lg md:text-xl'>
							<a
								title='Message me on Whatsapp'
								href='https://wa.me/+2349041995875'
								aria-label='Message me on Whatsapp'
								target='_blank'
								rel='norefferer'
								class='inline-flex hover:scale-110 duration-300 hover:text-white'>
								<FaWhatsapp className='w-7 h-7' />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Contact;
