import React, { useState } from "react";

function PlantCard({ plant, handleDelete }) {
  const [isInStock, setIsInStock] = useState(true)

  const handleInStock = () => {
    setIsInStock(!isInStock)
  }

  // handleDelete

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isInStock ? (
        <button className="primary" onClick={handleInStock} >In Stock</button>
      ) : (
        <button onClick={handleInStock} >Out of Stock</button>
      )}
      <br></br>
      <button className="edit" id={plant.id} >Edit</button>
      <button className="delete" id={plant.id} onClick={handleDelete} >Delete</button>
    </li>
  );
}

export default PlantCard;
