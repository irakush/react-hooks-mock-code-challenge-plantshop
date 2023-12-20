import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantArray, handleDelete }) {

  return (
    <ul className="cards">{/* render PlantCards components in here */}
      { plantArray.map(plant => <PlantCard plant={plant} handleDelete={handleDelete} key={plant.id}/>) }
    </ul>
  );
}

export default PlantList;
