import React from 'react'

function PigTiles({name, image, weight, specialty, greased, achievement, showDetails, handleShowDetails}) {
 return showDetails ?   
  <div className="ui eight wide column">
      <h3>{name}</h3>
      <h5>{weight} lbs.</h5>
      <h5>Specialty: {specialty}</h5>
      <h5>Greased? {greased}</h5>
      <h5>Highest achievement: {achievement}</h5>
      <img src= {image} alt="pretty piggy" onClick={handleShowDetails}/>

  </div>
  : (
    <div className="ui eight wide column">
        <h3>{name}</h3>
        <img src= {image} alt="pretty piggy" onClick = {handleShowDetails}/>
    </div>
  )
}

export default PigTiles