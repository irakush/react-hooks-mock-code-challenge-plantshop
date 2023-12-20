import React, { useState } from "react";

function NewPlantForm({ plantArray, setPlantArray }) {

  const plantObj = {
    "name": "",
    "image": "",
    "price": 0.00
  }

  const [newPlant, setNewPlant] = useState(plantObj)

  const handleChanges = (e) => {
    let {name, value} = e.target
    name === "price" ? value = Number(value) : value = value

    setNewPlant({...newPlant, [name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(newPlant)

    const URL = "http://localhost:6001/plants"

    fetch(URL, {
      method: "POST",
      headers: {
        "content-type":"application/json"
      },
      body: JSON.stringify(newPlant)
    })
      .then(response => response.json())
      .then(data => setPlantArray([...plantArray, data]))

      setNewPlant(plantObj)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Plant name" 
          onChange={handleChanges} 
          value={newPlant.name} />
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          onChange={handleChanges} 
          value={newPlant.image} />
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price"
          onChange={handleChanges} 
          value={newPlant.price} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
