import React from 'react'
import { Link } from "react-router-dom"

const PetTile = ({ imageUrl, name, description }) => {
  return (
    <div>
      <h3> {name} </h3>
      <p> {description} </p>
      <p> {imageUrl} </p>
    </div>
    <Link to={`/pets/${id}`}> {name}} <input className="button" type="submit" value="More Info"/> </Link>
  )
}

export default PetTile
