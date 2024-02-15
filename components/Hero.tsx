'use client';
import Image from "next/image";
import { CustomButton } from "."

const Hero = () => {
	const handleScroll = () => {
		console.log('click');
	}
	return (
		<div className="hero">
			<div className="flex-1 pt-36 padding-x">
				<h1 className="hero__title">
					Busca, reserva o renta un carro  -  rápido y fácil
				</h1>
				<p className="hero__subtitle">
					Optimice su experiencia de alquiler de vehículos con nuestro
					sencillo proceso de reserva
				</p>
				<CustomButton
					title="Explora Carros"
					containerStyles="bg-primary-blue text-white rounded-full mt-10"
					handleClick={handleScroll}
				/>
			</div>

			<div className="hero__image-container">
				<div className="hero__image">
					<Image
						src="/hero.png"
						alt="hero image"
						fill
						className="object-contain "
					/>
					<div className="hero__image-overlay"></div>
				</div>
			</div>
		</div>
		
	)
}

export default Hero