import React from 'react'
import { Link } from "react-router-dom"

const PetTile = (props) => {
  const { id, name, description, imageUrl } = props.pet

  return (
    <div>
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <img src={imageUrl} />
      </div>
      <Link to={`/pets/${id}`}><input className="button" type="submit" value={name}/></Link>
    </div>
  )
}

export default PetTile
