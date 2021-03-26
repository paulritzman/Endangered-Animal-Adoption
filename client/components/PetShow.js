import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const PetShow = props => {
  const [pet, setPet] = useState({})

  const getPet = async () => {
    try {
      const petId = props.match.params.id
      const animalGroup = props.match.params.type
      const response = await fetch(`/api/v1/pets/${animalGroup}/${petId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const responseBody = await response.json()
      setPet(responseBody.pet)
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getPet()
  }, [])

  return (
    <div id="pet-show" className="container box-shadow">
      <div className="img-wrapper">
        <img src={pet.imageUrl} />
      </div>
      <div className="section-content">
        <h1>{pet.name}</h1>
        <p>
          <strong>Age: </strong>
          {pet.age}
        </p>
        <p>
          <strong>Vaccination Status: </strong>
          {pet.vaccinationStatus ? "Yes" : "No"}
        </p>
        <p>
          <strong>Adoption Story: </strong>
          {pet.adoptionStory}
        </p>
        <Link to="/adopt" className="btn">
          Sponsor Me!
        </Link>
      </div>
    </div>
  )
}

export default PetShow
