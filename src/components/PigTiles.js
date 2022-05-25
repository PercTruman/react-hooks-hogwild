import React from 'react'

function PigTiles({name, image}) {

  return (
    <div className="ui eight wide column">
        <h3>{name}</h3>
        <img src= {image} alt="pretty piggy"/>
    </div>
  )
}

export default PigTiles