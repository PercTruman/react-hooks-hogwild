import React, {useState} from 'react'

function PigTiles({name, image, weight, specialty, greased, achievement, handlePigClick}) {
  const [isSelectedPig, setIsSelectedPig] = useState('')

    function handlePigClick(){
      setIsSelectedPig(!isSelectedPig)
    }
  

  return isSelectedPig ?   
  <div className="ui eight wide column">
      <h3>{name}</h3>
      <h5>{weight} lbs.</h5>
      <h5>Specialty: {specialty}</h5>
      <h5>{{greased}? "This pig is greased" : "Ungreased"}</h5>
      <h5>Highest achievement: {achievement}</h5>
      <img src= {image} alt="pretty piggy" onClick={(e)=>handlePigClick()}/>

  </div>
  : (
    <div className="ui eight wide column">
        <h3>{name}</h3>
        <img src= {image} alt="pretty piggy" onClick = {(e)=> handlePigClick(e)}/>
    </div>
  )
}

export default PigTiles