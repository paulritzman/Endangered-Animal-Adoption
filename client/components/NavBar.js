import React from "react"
import { Switch, Route, Link } from "react-router-dom"
import PetList from "./PetList"
import TypeList from "./TypeList"
import AnimalSurrenderForm from "./AnimalSurrenderForm"
import NewAdoptionForm from "./NewAdoptionForm"


import PetShow from "./PetShow"

const NavBar = () => {
  console.log("In NavBar")
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
            <Link to="/pets/bird" className="link">
              BIRDS
            </Link>
            <Link to="/pets/mammal" className="link">
              MAMMALS
            </Link>
            <Link to="/pets/reptile" className="link">
              REPTILES
            </Link>
            <Link to="/pets/marsupial" className="link">
              MARSUPIALS
            </Link>
          </nav>
          <Link to="/surrender" className="btn">
            List Pet for Adoption
          </Link>
        </div>
      </div>
      <Switch>
        <Route exact path="/pets" component={PetList} />
        <Route exact path="/pets/:type" component={TypeList} />
        <Route exact path="/pets/:type/:id" component={PetShow} />
        <Route exact path="/surrender" component={AnimalSurrenderForm} />
        <Route exact path="/adopt" component={NewAdoptionForm} />
      </Switch>
    </div>
  )
}

export default NavBar
