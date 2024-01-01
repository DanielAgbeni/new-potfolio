/** @format */

import React, { useState } from 'react'
import { MdClose, MdMenu } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'
import Contact from './Contact'

const Header = () => {
	const [isMenu, setIsMenu] = useState(false)
	const [contact, setContact] = useState(false)
	const location = useLocation()
	const current = location.pathname === location

	return (
		<header className='fixed z-50 w-screen h-20 p-3 px-4 md:p-4 md:px-16 bg-gradient-to-br from-red-800 via-gray-700 to-sky-400 drop-shadow-xl'>
			{/* Desktop */}
			<div className='hidden md:flex w-full h-full items-center justify-between  shadow-white'>
				<p className='logo'>Daniel Agbeni</p>
				<div className='flex items-center gap-8'>
					<ul className='flex item-center gap-8 ml-auto'>
						<Link to={'/'}>
							<li
								className={`cursor-pointer  hover:text-white text-${
									location.pathname === '/' ? 'white' : 'gray-400'
								} duration-100 transition-all ease-in-out text-xl font-semibold`}
								onClick={() => setContact(false)}>
								{' '}
								Home
							</li>
						</Link>
						<Link to={'/about'}>
							<li
								className={`cursor-pointer  hover:text-white text-${
									location.pathname === '/about' ? 'white' : 'gray-400'
								}  duration-100 transition-all ease-in-out text-xl font-semibold`}
								onClick={() => setContact(false)}>
								{' '}
								About
							</li>
						</Link>
						<Link to={'/service'}>
							<li
								className={`cursor-pointer  hover:text-white text-${
									location.pathname === '/service' ? 'white' : 'gray-400'
								}  duration-100 transition-all ease-in-out text-xl font-semibold`}
								onClick={() => setContact(false)}>
								{' '}
								Service
							</li>
						</Link>
						<Link to={'/potfolio'}>
							<li
								className={`cursor-pointer  hover:text-white text-${
									location.pathname === '/potfolio' ? 'white' : 'gray-400'
								}  duration-100 transition-all ease-in-out text-xl font-semibold`}
								onClick={() => setContact(false)}>
								{' '}
								Potfolio
							</li>
						</Link>

						<li
							className={`cursor-pointer  hover:text-white text-gray-400  duration-100 transition-all ease-in-out text-xl font-semibold`}
							onClick={() => setContact(!contact)}>
							{' '}
							Contact
						</li>
					</ul>
				</div>
				{contact ? <Contact click={setContact} /> : ''}
			</div>
			{/* Mobile */}
			<div className='flex items-center justify-between md:hidden w-full h-full'>
				<p className='logo'>Daniel Agbeni</p>
				<div className='relative' onClick={() => setIsMenu(!isMenu)}>
					{isMenu ? (
						<MdClose className='text-3xl font-extrabold text-red-600 duration-500' />
					) : (
						<MdMenu className='text-3xl font-bold text-gray-400 duration-500' />
					)}

					{isMenu && (
						<div className='w-40 bg-sky-800 shadow-xl rounded-lg flex flex-col absolute top-8 -right-1 py-3 px-3'>
							<ul className='flex flex-col gap-1'>
								<Link to={'/'}>
									<li
										className='cursor-pointer font-extrabold hover:text-white text-black duration-500 bg-blue-300 
										current:text-blue-500 rounded-lg transition-all ease-in-out px-4 py-2 '
										onClick={() => setIsMenu(false)}>
										Home
									</li>
								</Link>
								<hr />
								<Link to={'/about'}>
									<li
										className='cursor-pointer font-extrabold hover:text-white text-black duration-500 bg-blue-300 rounded-lg transition-all ease-in-out px-4 py-2 '
										onClick={() => setIsMenu(false)}>
										About
									</li>
								</Link>
								<hr />
								<Link to={'/service'}>
									<li
										className='cursor-pointer font-extrabold hover:text-white text-black duration-500 bg-blue-300 rounded-lg transition-all ease-in-out px-4 py-2 '
										onClick={() => setIsMenu(false)}>
										Service
									</li>
								</Link>
								<hr />
								<Link to={'/potfolio'}>
									<li
										className='cursor-pointer font-extrabold hover:text-white text-black duration-500 bg-blue-300 rounded-lg transition-all ease-in-out px-4 py-2 '
										onClick={() => setIsMenu(false)}>
										Potfolio
									</li>
								</Link>
								<hr />

								<li
									className='cursor-pointer font-extrabold hover:text-white text-black duration-500 bg-blue-300 rounded-lg transition-all ease-in-out px-4 py-2 '
									onClick={() => {
										setIsMenu(false)
										setContact(!contact)
									}}>
									Contact
								</li>
							</ul>
						</div>
					)}
				</div>
				{}
				{contact ? <Contact click={setContact} /> : ''}
			</div>
		</header>
	)
}

export default Header
