import React, { useState, useEffect } from "react"

const PetShow = (props) => {
  console.log("In PetShow")
  
  const [pet, setPet] = useState({})

  const getPet = async () => {
    try {
      console.log("PetShow")
      const petId = props.match.params.id
      const animalGroup = props.match.params.animalGroup
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
    <>
      <img src={pet.imageUrl} />
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