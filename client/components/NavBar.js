import React from "react"
import { Switch, Route, Link } from "react-router-dom"
import PetList from "./PetList"
import TypeList from "./TypeList"
import RegionList from "./RegionList"
import AnimalSurrenderForm from "./AnimalSurrenderForm"

const NavBar = () => {
  return (
    <div id="navbar-section">
      <div className="container">
        <div className="logo-wrapper">
          <img src="/images/Logo.png" alt="Endangered Animal Adoptions" />
        </div>
        <div className="navbar-wrapper">
          <nav id="navbar">
            <Link to="/pets" className="link">
              HOME
            </Link>
            <Link to="/pets" className="link">
              OUR ANIMALS
            </Link>
            <Link to="/types" className="link">
              TYPES
            </Link>
            <Link to="/regions" className="link">
              REGIONS
            </Link>
          </nav>
          <Link to="/surrender" className="btn">
            List Pet for Adoption
          </Link>
        </div>
      </div>
      <Switch>
        <Route exact path="/pets" component={PetList} />
        <Route exact path="/types" component={TypeList} />
        <Route exact path="/regions" component={RegionList} />
        <Route exact path="/surrender" component={AnimalSurrenderForm} />
      </Switch>
    </div>
  )
}

export default NavBar
