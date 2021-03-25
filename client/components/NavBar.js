import React from "react"
import { Switch, Route, Link } from "react-router-dom"
import TestComponentList from "./TestComponentList"
// import PetList from "./PetList"
// import AnimalIndexPage from "./AnimalIndexPage"
// import NewAdoptionForm from "./NewAdoptionForm"
import AnimalSurrenderForm from "./AnimalSurrenderForm"

const NavBar = props => {
  return (
    <div className="row column">
      <div className="navbar">
        <Link to="/">Home</Link>
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
      <div className="navbar">
        <Link to="/adopt">Adopt A Pet</Link>
      </div>
      <Switch>
        {/* <Route exact path="/" component={TestComponentList} /> */}
        {/* <Route exact path="/pets" component={PetList} /> */}
        {/* <Route exact path="/types" component={TypeList} /> */}
        {/* <Route exact path="/regions" component={RegionList} /> */}
        {/* <Route exact path="/pets/:id" component={AnimalIndexPage}> */}
        <Route exact path="/adopt" component={NewAdoptionForm} />
        <Route exact path="/surrender" component={AnimalSurrenderForm} />
      </Switch>
      <div className="navbar">
        <p>Hello Footer</p>
      </div>
    </div>
  )
}

export default NavBar