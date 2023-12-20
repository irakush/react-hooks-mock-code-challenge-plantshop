import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantArray }) {

  return (
    <ul className="cards">{/* render PlantCards components in here */}
      { plantArray.map(plant => <PlantCard plant={plant} key={plant.id}/>) }
    </ul>
  );
}

export default PlantList;
