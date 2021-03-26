import React from "react"
import { Link } from "react-router-dom"

const PetTile = props => {
  const { id, name, age, vaccinationStatus, imageUrl, animalGroup } = props.pet

  return (
    <>
      <div className="card box-shadow">
        <img src={imageUrl} alt={name} />
        <div className="card-contents">
          <h3>{name}</h3>
          <p>{animalGroup}</p>
          <p>Age: {age}</p>
          <p>Vaccinated: {vaccinationStatus ? "Yes" : "No"}</p>
        </div>
        <Link to={`/pets/${animalGroup}/${id}`} className="btn">
          ADOPT ME
        </Link>
      </div>
    </>
  )
}

export default PetTile
