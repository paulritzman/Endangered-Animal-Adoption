import React from 'react'
import { Link } from "react-router-dom"

const FeaturedPet = (props) => {
  const {id, name, description, imageUrl} = props.featured
  
  return (
    <div id="featured-section">
      <div className="featured-container">
        <h3>{name}</h3>
        <p>{description}</p>
        <img src={imageUrl} />
      </div>
      <div className="featured-wrapper">
        <Link to={`/pets/${type}/${id}`} className="link"><input className="button" type="submit" value={name}/></Link>
      </div>
    </div>
  )
}

export default FeaturedPet