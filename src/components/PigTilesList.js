import React, {useState} from 'react'
import PigTiles from './PigTiles'

function PigTilesList({hogsList, showGreased}) {
  
  const greasedPigsList = hogsList.filter(hog=>hog.greased===true)
  const pigTiles = (showGreased ? greasedPigsList : hogsList)
  
 const visiblePigTiles = pigTiles.map((hog)=>
   <PigTiles 
        key={hog.name}
        name= {hog.name}
        image ={hog.image}
        specialty={hog.specialty}
        greased={hog.greased}
        weight={hog.weight}
        achievement={hog["highest medal achieved"]}
   /> 
  )
  
  return (
    <div className="ui grid container">{visiblePigTiles}</div>
  )
}

export default PigTilesList