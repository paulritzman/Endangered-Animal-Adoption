import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
//this is complete
const PetShow = (props) => {
  const [pet, setPet] = useState({})

  const getPet = async () => {
    try {
      const pet = props.match.params.id
      const response = await fetch(`/api/v1/pet/${pet}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const responseBody = await response.json()
      setPet(responseBody.pet)
    } catch(error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getPet()
  }, [])

  return (
    <>
      <h1>{pet.imageUrl}</h1>
      <h1>Name: {pet.name}</h1>
      <h1>Age: {pet.age}</h1>
      <h1>Vaccination Status: {pet.vaccinationStatus}</h1>
      <h1>Adoption Story: {pet.adoptionStory}</h1>
      <div className="button-group">
          <input className="button" type="submit" value="Adopt Me!" />
      </div>
    </>
    
  )
}

export default PetShow