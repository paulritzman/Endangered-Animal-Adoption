import React, { useState, useEffect } from "react"
import PetTile from "./PetTile"

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

  const petTiles = pets.map(pet => {
    return <PetTile key={pet.id} pet={pet} />
  })

  return (
    <div>
      <h1>My Pets List</h1>
      <ul className="pets">{petTiles}</ul>
    </div>
  )
}
export default PetList
