import React, { useState, useEffect } from "react"
import fetchData from "../functions/fetchData.js"

// show all types
const TypeList = (props) => {
  const [types, setTypes] = useState([])
  const [selectedType, setSelectedType] = useState(null)

  useEffect(() => {
    fetchTypes
  }, [])

  const fetchTypes = async () => {
    const data = await fetchData("/api/v1/pets/types")
    setTypes(data.types)
  }

  const changeTypes = (id) => {
    const currentType = id === selectedType ? null : id
    setSelectedType(currentType)
  }

  const typeListItems = types.map((type) => {
    let selected
    if (selectedType === type.id) {
      selected = true
    }

    const handleClick = () => {
      changeTypes(type.id)
    }

    return (
      <TypeTile
        key={type.id}
        groupTitle={type.group_title}
        selected={selected}
        handleClick={handleClick}
      />
    )
  })

  return (
    <div className="page">
      <div className="type-list">
        <input className="button" type="submit" value={typeListItems}/>
        </div>
    </div>
  )
}

export default TypeList
