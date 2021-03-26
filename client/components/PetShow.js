import React, { useState, useEffect } from "react"
import {Link} from "react-router-dom"

const PetShow = (props) => {
  console.log("In PetShow")
  
  const [pet, setPet] = useState({})

  const getPet = async () => {
    try {
      console.log("PetShow")
      console.log("PetShow Props:", props.match.params.type)
      const petId = props.match.params.id
      const animalGroup = props.match.params.type
      console.log("PetShow:", petId)
      console.log("PetShow:", animalGroup)
      const response = await fetch(`/api/v1/pets/${animalGroup}/${petId}`)
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
    <div id="petShow-section">
      <div className="show-container">
        <div className="image-wrapper">
          <img src={pet.imageUrl} />
        </div>
        <div className="pet-info-wrapper">
          <h4>Name: {pet.name}</h4>
          <p>Age: {pet.age}</p>
          <p>Vaccination Status: {pet.vaccinationStatus}</p>
          <p>Adoption Story: {pet.adoptionStory}</p>
        </div>
        <div className="button-group">
          <Link to="/adopt" className="button">Sponsor Me!</Link>
        </div>
      </div>
    </div>
  )
}

export default PetShow
