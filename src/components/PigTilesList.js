import React from 'react'
import PigTiles from './PigTiles'

function PigTilesList({hogs, sort, showGreased}) {
    const pigTiles = hogs.map((hog)=>(
       <PigTiles
        key={hog.name}
        name= {hog.name}
        image ={hog.image}
        />
    ))
  return (
    <div className="ui grid container">{pigTiles}</div>
  )
}

export default PigTilesList