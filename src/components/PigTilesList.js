import React from 'react'
import PigTiles from './PigTiles'

function PigTilesList({hogsList, showGreased, showDetails, setShowDetails}) {
 const greasedPigsList = hogsList.filter(hog=>hog.greased===true)
 const pigTiles = (showGreased ? greasedPigsList : hogsList)
 function handleShowDetails(){
  setShowDetails(!showDetails)
 }
  const visiblePigTiles = pigTiles.map((hog)=>
   <PigTiles 
        key={hog.name}
        name= {hog.name}
        image ={hog.image}
        specialty={hog.specialty}
        greased={hog.greased}
        weight={hog.weight}
        handleShowDetails={handleShowDetails}
        showDetails={showDetails}
        achievement={hog["highest medal achieved"]}
   /> 
  )
  return (
    <div className="ui grid container">{visiblePigTiles}</div>
  )
}

export default PigTilesList