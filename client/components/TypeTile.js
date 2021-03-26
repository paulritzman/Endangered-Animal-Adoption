import React from 'react'
import { Link } from "react-router-dom"

const TypeTile = (props) => {
  const {type} = props.groupTitle

  return (
    <div>
      <h1>{type}</h1>
      <Link to={`/pets/${type}`}><input className="button" type="submit" value={type}/></Link>
    </div>
  )
}

export default TypeTile
