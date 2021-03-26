import React from "react"
import { Link } from "react-router-dom"

const FeaturedPet = props => {
  const { id, name, age, vaccinationStatus, adoptionStory, imageUrl, animalGroup } = props.pet
  return (
    <div id="featured-pet" className="container box-shadow">
      <div className="img-wrapper">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="section-content">
        <h3>{name}</h3>
        <p className="animal-group">
          <strong>{animalGroup}</strong>
        </p>
        <p>
          <strong>Age: </strong>
          {age}
        </p>
        <p>
          <strong>Vaccinated: </strong>
          {vaccinationStatus ? "Yes" : "No"}
        </p>
        <p>
          <strong>Story: </strong>
          {adoptionStory}
        </p>
        <Link to={`/pets/${animalGroup}/${id}`} className="btn">
          ADOPT ME
        </Link>
      </div>
    </div>
  )
}

export default FeaturedPet
