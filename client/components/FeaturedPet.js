import React from 'react'

const FeaturedPet = (props) => {
  const {id, name, description, imageUrl} = props.featured
  return (
    <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <img src={imageUrl} />
      <Link to={`/pets`}><input className="button" type="submit" value="More Info"/></Link>
    </div>
  )
}

export default FeaturedPet