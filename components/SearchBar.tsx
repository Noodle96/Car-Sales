'use client';
import { useState } from "react"
import { SearchBarManufacturer } from "./";
import Image from "next/image";

const SearchButton = ({otherClases}:{otherClases:string}) => (
	<button
		type="submit"
		className={` -ml-3 z-10 ${otherClases}`}
	>
		<Image
			src="/magnifying-glass.svg"
			alt="search"
			width={40}
			height={40}
			className="object-contain"
		/>
	</button>
)

const SearchBar = () => {
	const [manufacturer, setManufacturer] = useState("");
	const [model, setModel] = useState("");
	// console.log(manufacturer);
	
	const handleSearch = () => {}
	return (
		<form className="searchbar" onSubmit={handleSearch}>
			<div className="searchbar__item">
				<SearchBarManufacturer
					manufacturer={manufacturer}
					setManufacturer={setManufacturer}
				/>
				<SearchButton otherClases="sm:hidden bg-red-600"/>
			</div>
			<div className="searchbar__item ml-3">
				<Image
					src="/model-icon.png"
					alt="model icon"
					width={25}
					height={25}
					className=" absolute w-[20px]  h-[20px] ml-4"
				/>
				<input
					type="text"
					name="model"
					value={model}
					onChange={(e) => setModel(e.target.value)}
					placeholder="Modelo"
					className="searchbar__input"
				/>
				<SearchButton otherClases="sm:hidden bg-orange-600"/>
			</div>
			<SearchButton otherClases="max-sm:hidden bg-green-600"/>

		</form>
	)
}

export default SearchBar