import React, { useState, useEffect } from "react"
import PetTile from "./PetTile"
import FeaturedPet from "./FeaturedPet"

const PetList = props => {
  console.log("In PetList")

  const [pets, setPets] = useState([])

  const getPets = async () => {
    try {
      const response = await fetch("/api/v1/pets")
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

  const featuredPet = pets.map(pet => {
    if (pet.id === 1) {
      return <FeaturedPet key={pet.id} pet={pet} />
    }
  })

  console.log("Featured", featuredPet)
  const petTiles = pets.map(pet => {
    if (pet.id !== 1) {
      return <PetTile key={pet.id} pet={pet} />
    }
  })

  return (
    <>
      <div id="hero-section"></div>
      <div id="pet-list-section">
        <div className="container">
          <h1>Adoptable Animals</h1>
          {featuredPet}
          <ul className="pets">{petTiles}</ul>
        </div>
      </div>
    </>
  )
}

export default PetList
