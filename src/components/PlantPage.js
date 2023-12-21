import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const URL = "http://localhost:6001/plants"
  const [plantArray, setPlantArray] = useState([])
  const [searchStr, setSerchStr] = useState("")

  console.log(plantArray)

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(setPlantArray)
  }, [])

  const handleSearch = (e) => {
    setSerchStr(e.target.value)
  }

  const filteredArray = plantArray.filter(plant => {
      return plant.name.toLowerCase().includes(searchStr.toLowerCase())
  })

  const handleDelete = (e) => {
    const { id } = e.target

    fetch(URL + `/${id}`, {
      method:"DELETE"
    })
      .then(deletePlantFromArray(id))
  }

  function deletePlantFromArray (id) {
    const delPlantsArr = plantArray.filter(plant => {
        return plant.id !== id
    })

    setPlantArray(delPlantsArr)
  }

  return (
    <main>
      <NewPlantForm plantArray={filteredArray} setPlantArray={setPlantArray} />
      <Search handleSearch={handleSearch} />
      <PlantList plantArray={filteredArray} handleDelete={handleDelete} />
    </main>
  );
}

export default PlantPage;
