'use client';
import React, { useState } from "react"
import { SearchBarManufacturer } from "./";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
	const router = useRouter();
	// console.log(manufacturer);
	
	const updateParams = (model:string, manufacturer:string) => {
		// console.log('====================================');
		// console.log(window.location.search);
		// console.log('====================================');
		const searchParams = new URLSearchParams(window.location.search);
		if(model) searchParams.set("model", model);
		else searchParams.delete("model");
		if(manufacturer) searchParams.set("manufacturer", manufacturer);
		else searchParams.delete("manufacturer");
		const newPathName = `${window.location.pathname}?${searchParams.toString()}`;
		// console.log('====================================');
		// console.log(newPathName);
		// console.log('====================================');
		router.push(newPathName);
	}

	const handleSearch = (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if(manufacturer === "" && model === ""){
			return alert("por favor llenar the search bar");
		}
		updateParams(model.toLowerCase(), manufacturer.toLowerCase());
		// alert(`manufacturer: ${manufacturer} y modelo: ${model}`);


	}
	return (
		<form className="searchbar" onSubmit={handleSearch}>
			<div className="searchbar__item">
				<SearchBarManufacturer
					manufacturer={manufacturer}
					setManufacturer={setManufacturer}
				/>
				{/* bg-red-600 */}
				<SearchButton otherClases="sm:hidden"/>
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
				{/* bg-orange-600 */}
				<SearchButton otherClases="sm:hidden"/>
			</div>
			{/* bg-green-600 */}
			<SearchButton otherClases="max-sm:hidden"/>

		</form>
	)
}

export default SearchBar