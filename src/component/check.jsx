import React from 'react'

const check = () => {
  return (
		<div className='w-[1512px] h-[982px] bg-stone-900 flex-col justify-start items-center inline-flex'>
			<div className='w-[1735px] h-[828px] bg-black bg-opacity-30 rounded-bl-[500px] rounded-br-[500px]' />
			<div className='self-stretch grow shrink basis-0 px-32 bg-gradient-to-r from-sky-700 via-slate-950 to-red-400 flex-col justify-center items-end gap-2.5 flex'>
				<div className='flex-col justify-center items-start gap-12 flex'>
					<div className='flex-col justify-center items-start gap-2 flex'>
						<div className='w-[393px] h-[74px] justify-center items-center inline-flex'>
							<div className='text-white text-[56px] font-bold'>
								Samuel Freitas
							</div>
						</div>
						<div className='w-[314px] text-red-400 text-2xl font-bold'>
							Full-stack developer
						</div>
						<div className='w-[638px] text-white text-2xl font-medium'>
							Tenho a paixão de transformar ideias em soluções.
						</div>
					</div>
					<div className='justify-start items-center gap-4 inline-flex'>
						<div className='flex-col justify-center items-start gap-2.5 inline-flex'>
							<div className='text-white text-2xl font-medium'>Home</div>
							<div className='w-[55.08px] h-[0px] border-2 border-red-400'></div>
						</div>
						<div className='flex-col justify-center items-start gap-2.5 inline-flex'>
							<div className='text-stone-300 text-2xl font-medium'>Sobre</div>
						</div>
						<div className='flex-col justify-center items-start gap-2.5 inline-flex'>
							<div className='text-stone-300 text-2xl font-medium'>
								Currículo
							</div>
						</div>
						<div className='flex-col justify-center items-start gap-2.5 inline-flex'>
							<div className='text-stone-300 text-2xl font-medium'>
								Portfolio
							</div>
						</div>
						<div className='flex-col justify-center items-start gap-2.5 inline-flex'>
							<div className='text-stone-300 text-2xl font-medium'>
								Contacto
							</div>
						</div>
					</div>
					<div className='justify-start items-center gap-3 inline-flex'>
						<div className='p-3 rounded-[500px] border border-sky-700 flex-col justify-center items-center inline-flex' />
						<div className='p-3 rounded-[500px] border border-sky-700 flex-col justify-center items-center inline-flex' />
						<div className='p-3 rounded-[500px] border border-sky-700 flex-col justify-center items-center inline-flex' />
						<div className='p-3 rounded-[500px] border border-sky-700 flex-col justify-center items-center inline-flex' />
					</div>
				</div>
			</div>
			<img
				className='w-[1745px] h-[982px]'
				src='https://via.placeholder.com/1745x982'
			/>
			<img
				className='w-[726px] h-[904px] shadow'
				src='https://via.placeholder.com/726x904'
			/>
		</div>
	)
}

export default check