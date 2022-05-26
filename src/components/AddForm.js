import React, {useState} from 'react'

function AddForm({hogsList, setHogsList}) {

    
    const [formData, setFormData]=useState({
        pigName: "",
        pigPic: "",
        pigSpecialty: "",
        pigWeight: "",
        isGreased: "",
        achievement:""
    })

    function handleSubmit(e){
        e.preventDefault();
    }
   

    function handleChange(e){
        const key = e.target.id
        setFormData({
            ...formData,
            [key]:e.target.value
        })
    }

  return (
    <div>
        <label>
            <div>
                <h4>Add New Pig:</h4>
                <form onSubmit={handleSubmit} style={{margin: "0 auto", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", width:"100%" }}>
                    <input style={{marginTop:".5rem"}}id="pigName" onChange={handleChange} value={formData.pigName}placeholder="Name"></input>
                    <input style={{marginTop:".5rem"}}id="pigPic"onChange={handleChange} value={formData.pigPic}placeholder="Image Url..."></input>
                    <input style={{marginTop:".5rem"}}id="pigSpecialty"onChange={handleChange} value={formData.pigSpecialty}placeholder="Specialty"></input>
                    <input style={{marginTop:".5rem"}}id="pigWeight"onChange={handleChange} value={formData.pigWeight}placeholder="Weight"></input>
                    <input style={{marginTop:".5rem"}}id="isGreased"onChange={handleChange} value={formData.isGreased}placeholder="Greased? Yes or No"></input>
                    <input style={{marginTop:".5rem"}}id="achievement"onChange={handleChange} value={formData.achievement}placeholder="Highest Medal Achieved"></input>
                    <input type="submit"></input>
                </form>
            </div>
        </label>
    </div>
  )
}

export default AddForm