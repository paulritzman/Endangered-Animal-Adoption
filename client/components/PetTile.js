import React from "react"
import { Link } from "react-router-dom"

const PetTile = props => {
  console.log("In PetTile")

  const { id, name, description, imageUrl } = props.pet
  const { animalGroup } = props

  return (
    <>
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <img src={imageUrl} />
      </div>
      <Link to={`/pets/${animalGroup}/${id}`}>
        <input className="button" type="submit" value={name} />
      </Link>
    </>
  )
}

export default PetTile
