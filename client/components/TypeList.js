import React, { useState, useEffect } from "react"
import PetTile from "./PetTile"

const TypeList = props => {
  console.log("In TypeList")

  const [pets, setPets] = useState([])

  const getPets = async () => {
    try {
      console.log("TypeList Props:", props.match.params.type)
      const animalGroup = props.match.params.type
      console.log("AnimalGroup:", animalGroup)
      const response = await fetch(`/api/v1/pets/${animalGroup}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const responseBody = await response.json()
      setPets(responseBody.pets)
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getPets()
  }, [])

  const petTiles = pets.map(pet => {
    return <PetTile key={pet.id} pet={pet} />
  })

  return (
    <div>
      <h1>{props.match.params.type}</h1>
      <ul className="pets">{petTiles}</ul>
    </div>
  )
}

export default TypeList
