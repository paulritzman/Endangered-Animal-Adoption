import React, { useState, useEffect } from "react"
import PetTile from "./PetTile"

const TypeList = props => {
  const [pets, setPets] = useState([])

  const getPets = async () => {
    try {
      const animalGroup = props.match.params.type
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
    <>
      <div id="hero-section"></div>
      <div id="pet-list-section">
        <div className="container">
          <h1>
            Adoptable <span>{props.match.params.type}s</span>
          </h1>
          <ul className="pets">{petTiles}</ul>
        </div>
      </div>
    </>
  )
}

export default TypeList
