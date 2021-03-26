import React, { useState, useEffect } from "react"
import fetchData from "../functions/fetchData.js"
import PetTile from './PetTile'

const TypeList = (props) => {
  const [pets, setPets] = useState([])
  const [selectedPets, setSelectedPets] = useState(null)

  useEffect(() => {
    fetchTypes
  }, [])

  const fetchTypes = async () => {
    const data = await fetchData(`/api/v1/pets/${type}`)
    setPets(data.pets)
  }

  // const changeTypes = (id) => {
  //   const currentType = id === selectedPets ? null : id
  //   setSelectedPets(currentType)
  // }

  const petListItems = pets.map((pet) => {
    let selected
    if (selectedPets === type.id) {
      selected = true
    }

    //const handleClick = () => {
    //  changeTypes(type.id)
    //}

    return (
      <PetTile
        key={pet.id}
        pet={pet}
      />
    )
  })

  return (
    <div className="page">
      <div className="type-list">
        <h1>Pets</h1>
        {petTiles}
      </div>
    </div>
  )
}

export default TypeList

  /*
  const typeListItems = pets.map((type) => {
    let selected
    if (selectedType === type.id) {
      selected = true
    }

    const handleClick = () => {
      changeTypes(type.id)
    }

    return (
      <TypeTile
        key={type.id}
        groupTitle={type.group_title}
        selected={selected}
        handleClick={handleClick}
      />
    )
  })

  return (
    <div className="page">
      <div className="type-list">
        <input className="button" type="submit" value={typeListItems}/>
        </div>
    </div>
  )
}

export default TypeList
*/