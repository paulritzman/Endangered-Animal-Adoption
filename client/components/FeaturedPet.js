import React from "react"

const FeaturedPet = props => {
  console.log(props)
  const { name, age, vaccinationStatus, adoptionStory, imageUrl, animalGroup } = props.pet
  return (
    <div id="featured-pet">
      <img src={imageUrl} alt={name} />
      <div className="section-content">
        <h3>{name}</h3>
        <p>{animalGroup}</p>
        <p>Age: {age}</p>
        <p>Vaccinated: {vaccinationStatus ? "Yes" : "No"}</p>
        <p>Story: {adoptionStory}</p>
      </div>
    </div>
  )
}

export default FeaturedPet
