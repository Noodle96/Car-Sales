'use client';
import { useState } from "react"
import { SearchBarManufacturer } from "./";

const SearchBar = () => {
	const [manufacturer, setManufacturer] = useState("");
	console.log(manufacturer);
	
	const handleSearch = () => {}
	return (
		<form className="searchbar" onSubmit={handleSearch}>
			<div className="searchbar__item">
				<SearchBarManufacturer
					manufacturer={manufacturer}
					setManufacturer={setManufacturer}
				/>
			</div>
		</form>
	)
}

export default SearchBar