import React, { useState, useEffect } from "react"
import RegionTile from "./RegionTile"
import fetchData from "../functions/fetchData.js"

const RegionList = props => {
  const [regions, setRegions] = useState([])
  const [selectedRegion, setSelectedRegion] = useState(null)

  useEffect(() => {
    fetchRegions
  }, [])

  const fetchRegions = async () => {
    const data = await fetchData("/api/v1/regions")
    setRegions(data.regions)
  }

  const changeRegions = id => {
    const currentRegion = id === selectedRegion ? null : id
    setSelectedRegion(currentRegion)
  }

  const regionTiles = regions.map(region => {
    let selected
    if (selectedRegion === region.id) {
      selected = true
    }

    const handleClick = () => {
      changeRegions(region.id)
    }

    return (
      <RegionTile
        key={region.id}
        region={region.region}
        selected={selected}
        handleClick={handleClick}
      />
    )
  })

  return (
    <div className="page">
      <div className="region-list">{regionTiles}</div>
    </div>
  )
}

export default RegionList
