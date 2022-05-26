import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import AddForm from "./AddForm";
import Sort from "./Sort";
import Filter from "./Filter";
import PigTilesList from "./PigTilesList";

function App() {
  const [hogsList, setHogsList] = useState(hogs);
  const [sortValue, setSortValue] = useState("None");


  function handleSortValue(e) {
    setSortValue(e.target.value);
  }
  hogsList.sort((a, b) => {
    if (sortValue === "Name") {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      return nameA < nameB ? -1 : 1;
    } else if (sortValue === "Weight") {
      return a.weight - b.weight;
    }
});

  const [showGreased, setShowGreased] = useState(false);
  function handleShowGreased() {
    setShowGreased(!showGreased);
  }


  return (
    <div className="App">
      <Nav />
      <Sort
        hogsList={hogsList}
        setHogsList={setHogsList}
        setSortValue={setSortValue}
        handleSortValue={handleSortValue}
      />
      <Filter handleShowGreased={handleShowGreased} />
      <AddForm hogsList={hogsList} setHogsList={setHogsList}/>
      <PigTilesList
        hogsList={hogsList}
        sortValue={sortValue}
        showGreased={showGreased}
      />
    </div>
  );
}

export default App;
