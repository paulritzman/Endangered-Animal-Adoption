import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const AdoptionShow = (props) => {
  const [adoption, setAdoption] = useState({})

  const getAdoption = async () => {
    try {
      const adoptionId = props.match.params.id
      const response = await fetch(`/api/v1/pets/${adoptionId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const responseBody = await response.json()
      setAdoption(responseBody.adoption)
    } catch(error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getAdoption()
  }, [])

  return (
    <>
      <h3><Link to="/pets">Back to All Animals</Link></h3>
      <h1>Name: {adoption.name}</h1>

    </>
  )
}

export default AdoptionShow