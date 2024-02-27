"use client";
import React, { useState } from 'react'
import { CarProps } from '@/types'
import { calculateCarRent } from '@/utils';
import Image from 'next/image';
import { CardDetails, CustomButton } from '.';
interface CardCarProps{
	car: CarProps
	key: number
}
const CarCard = ({car,key}:CardCarProps) => {
	const {city_mpg, year, make, model, transmission, drive} = car;
	const carRent = calculateCarRent(city_mpg, year);
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div key={key} className='car-card group'>
			<div className='car-card__content'>
				<h2 className='car-card__content-title'>
					{make}-{model}
				</h2>
			</div>

			<p className='flex mt-6 text-[32px] font-extrabold'>
				<span className='self-start text-[14px] font-semibold'>
					$
				</span>
				{carRent}
				<span className=' self-end text-[14px] font-medium'>
					/day
				</span>
			</p>

			<div className=' relative w-full h-40 my-3 object-contain'>
				<Image
					src="/hero.png"
					alt='car model'
					fill
					priority
					className=' object-contain'
				/>
			</div>

			<div className="relative flex mt-2 w-full">
				<div className='flex group-hover:invisible w-full justify-between text-gray'>
					<div className='flex flex-col  justify-center items-center gap-2'>
						<Image
							src="/steering-wheel.svg"
							width={20}
							height={20}
							alt='steering wheel icon'
						/>
						<p className='text-[14px]'>
							{transmission==='a'?'Automatic':'Manual'}
						</p>
					</div>

					<div className='flex flex-col  justify-center items-center gap-2'>
						<Image
							src="/tire.svg"
							width={20}
							height={20}
							alt='tire icon'
						/>
						<p className='text-[14px]'>
							{drive.toUpperCase()}
						</p>
					</div>

					<div className='flex flex-col  justify-center items-center gap-2'>
						<Image
							src="/gas.svg"
							width={20}
							height={20}
							alt='gas icon'
						/>
						<p className='text-[14px]'>
							{city_mpg} MPG
						</p>
					</div>
				</div>

				<div className='car-card__btn-container'>
					<CustomButton
						title='Ver más'
						containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
						textStyles=' text-white text-[14px] leading-[17px] font-bold'
						rightIcon='/right-arrow.svg'
						handleClick={() => setIsOpen(true)}
					/>
				</div>
			</div>

			<CardDetails
				isOpen={isOpen}
				closeModal={() => setIsOpen(false)}
				car={car}
			/>
		</div>
	)
}

export default CarCard