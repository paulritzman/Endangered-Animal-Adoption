import React from "react"
import { Switch, Route, Link } from "react-router-dom"
import PetList from "./PetList"
import PetShow from "./PetShow"
import TypeList from "./TypeList"
import RegionList from "./RegionList"
import NewAdoptionForm from "./NewAdoptionForm"
import AnimalSurrenderForm from "./AnimalSurrenderForm"

const NavBar = props => {
  return (
    <div className="row column">
      <div className="navbar">
        <Link to="/pets">Home</Link>
      </div>
      <div className="navbar">
        <Link to="/pets">Animal</Link>
      </div>
      <div className="navbar">
        <Link to="/types">Types</Link>
      </div>
      <div className="navbar">
        <Link to="/regions">Regions</Link>
      </div>
      <div className="navbar">
        <Link to="/surrender">List Pet for Adoption</Link>
      </div>
      <Switch>
        <Route exact path="/pets" component={PetList} />
        <Route exact path="/pets/:id" component={PetShow} />
        <Route exact path="/types" component={TypeList} />
        <Route exact path="/regions" component={RegionList} />
        <Route exact path="/adopt" component={NewAdoptionForm} />
        <Route exact path="/surrender" component={AnimalSurrenderForm} />
      </Switch>
    </div>
  )
}

export default NavBar