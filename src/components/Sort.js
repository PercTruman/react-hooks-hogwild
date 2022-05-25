import React from 'react'

function Sort({hogs, sort, handleSort}) {
 

  return (
    <div>
        <label>
            <h5>Sort Pigs by:</h5>
            <select style={{marginLeft:"10px", marginBottom:"2rem"}} onChange={handleSort}>
                <option>None</option>
                <option>Name</option>
                <option>Weight</option>
            </select>
        </label>
    </div>
  )
}

export default Sort