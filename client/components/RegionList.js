import React, { useState, useEffect } from "react"
import fetchData from "../scripts/fetchData.js"

const RegionList = (props) => {
  const [regions, setRegions] = useState([])
  const [selectedRegion, setSelectedRegion] = useState(null)

  useEffect(() => {
    fetchRegions
  }, [])

  const fetchRegions = async (id) => {
    const data = await fetchData("/api/v1/pets")
    setRegions(id)
  }

  const changeRegions = (id) => {
    const currentRegion = id === selectedRegion ? null : id
    setSelectedRegion(currentRegion)
  }

  const regionListItems = regions.map((region) => {
    let selected
    if (selectedRegion === region.id) {
      selected = true
    }

    const handleClick = () => {
      changeRegions(region.id)
    }

    return (
      <Question
        key={region.id}
        region={region.region}
        selected={selected}
        handleClick={handleClick}
      />
    )
  })

  return (
    <div className="page">
      <div className="region-list">
        <input className="button" type="submit" value={regionListItems}/>
        </div>
    </div>
  )
}

export default RegionList
