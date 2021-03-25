import React from "react"
import { Link } from "react-router-dom"

const TestComponent = (props) => {
  const {id } = props.pet
  return (
    <li><Link to={`/pets/${id}`}>{props.pet.name}</Link></li>
  )
}

export default TestComponent