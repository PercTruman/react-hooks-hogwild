import React, {useState} from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import AddForm from "./AddForm";
import Sort from "./Sort";
import Filter from "./Filter";
import PigTiles from "./PigTiles";
import PigTilesList from "./PigTilesList";

function App() {
	const [sort, setSort]=useState("None")
	function handleSort(e){
		setSort(sort =>e.target.value)
	}
	const [showGreased, setShowGreased]=useState(false)
	function handleShowGreased(e){
		setShowGreased(showGreased=>!showGreased)
	}

	return (
		<div className="App">
			<Nav />
			<Sort hogs={hogs}sort={sort} handleSort={handleSort}/>
			<AddForm hogs={hogs} />
			<Filter hogs={hogs} showGreased={showGreased} handleShowGreased={handleShowGreased}/>
			<PigTilesList  hogs={hogs} sort={sort} showGreased={showGreased}/>
			<PigTiles hogs={hogs} sort={sort} handleShowGreased={handleShowGreased}/>
		</div>
	);
}


export default App;
