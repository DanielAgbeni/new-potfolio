/** @format */

import React, { useState } from 'react'
import { MdContacts } from 'react-icons/md'
import {
	FaDiscord,
	FaGithub,
	FaInstagram,
	FaTwitter,
	FaWhatsapp,
	FaYoutube,
} from 'react-icons/fa'

const Social = () => {
	const [menu, setMenu] = useState(false)
	const socialMediaData = [
		{ i: 1, clr: '#1877f2', icon: 'logo-twitter', fa: FaTwitter },
		{ i: 2, clr: '#25d366', icon: 'logo-whatsapp', fa: FaWhatsapp },
		{ i: 3, clr: '#c32aa3', icon: 'logo-instagram', fa: FaInstagram },
		{ i: 4, clr: '#1b1e21', icon: 'logo-github', fa: FaGithub },
		{ i: 5, clr: '#ff0000', icon: 'logo-youtube', fa: FaYoutube },
		{ i: 6, clr: '#ff0000', icon: 'logo-discord', fa: FaDiscord },
	]

	return (
		<div className='flex items-center justify-center'>
			<ul className='flex'>
				{socialMediaData.map((item) => (
					<li
						key={item.i}
						style={{ '--i': item.i, '--clr': item.clr }}
						className='text-4xl text-white'>
						{item.fa}
					</li>
				))}
			</ul>
		</div>
	)
}
{
	// <div className='flex items-center justify-center'>
	// 	<div className='relative flex items-center justify-center'>
	// 		<div
	// 			onClick={() => setMenu(!menu)}
	// 			className='relative bg-white h-14 w-14 rounded-full shadow-md flex items-center justify-center text-gray-700 text-4xl cursor-pointer z-10 duration-1000 active:rotate-360 active:transform '>
	// 			<MdContacts />
	// 		</div>
	// 		{menu && (
	// 			<div>
	// 				<li className='absolute left-0 list-none duration-500 transform rotate-[calc(360deg/6 * var(1))]'>
	// 					<FaWhatsapp className=' text-white text-4xl hover:scale-110 hover:text-green-400 cursor-pointer' />
	// 				</li>
	// 				<li className='absolute left-0 list-none duration-500 transform rotate-[calc(360deg/6 * var(2))]'>
	// 					<FaYoutube className=' text-white text-4xl hover:scale-110 hover:text-red-700 cursor-pointer' />
	// 				</li>
	// 				<li className='absolute left-0 list-none duration-500 transform rotate-[calc(360deg/6 * var(3))]'>
	// 					<FaInstagram className='text-white hover:text-purple-500 hover:scale-110 text-4xl cursor-pointer' />
	// 				</li>
	// 				<li className='absolute left-0 list-none duration-500 transform rotate-[calc(360deg/6 * var(4))]'>
	// 					<FaGithub className=' text-white text-4xl hover:text-black hover:bg-white rounded-full hover:scale-110 cursor-pointer' />
	// 				</li>
	// 				<li className='absolute left-0 list-none duration-500 transform rotate-[calc(360deg/6 * var(5))]'>
	// 					<FaTwitter className='text-white text-4xl hover:text-sky-600 hover:scale-110 cursor-pointer' />
	// 				</li>
	// 				<li className='absolute left-0 list-none duration-500 transform rotate-[calc(360deg/6 * var(6))]'>
	// 					<FaDiscord className='text-white text-4xl hover:text-sky-600 hover:scale-110 cursor-pointer' />
	// 				</li>
	// 			</div>
	// 		)}
	// 	</div>
	// </div>
	/* <ion-icon name="share-social"></ion-icon>
    </div>
  
      <li style="--i:0;--clr:#1877f2">
      <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
    </li>
    <li style="--i:1;--clr:#25d366">
      <a href="#"><ion-icon name="logo-whatsapp"></ion-icon></a>
    </li>
    <li style="--i:2;--clr:#1da1f2">
      <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
    </li>
     <li style="--i:3;--clr:#FF5733">
      <a href="#"><ion-icon name="logo-reddit"></ion-icon></a>
    </li>
    <li style="--i:4;--clr:#0a66c2">
      <a href="#"><ion-icon name="logo-linkedin"></ion-icon></a>
    </li>
    <li style="--i:5;--clr:#c32aa3">
      <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
    </li>
    <li style="--i:6;--clr:#1b1e21">
      <a href="#"><ion-icon name="logo-github"></ion-icon></a>
    </li>
    <li style="--i:7;--clr:#ff0000">
      <a href="#"><ion-icon name="logo-youtube"></ion-icon></a>
    <</li>
</div> */
}

export default Social
