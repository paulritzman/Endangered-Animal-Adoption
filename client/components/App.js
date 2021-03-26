import React from "react"
import { hot } from "react-hot-loader/root"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import "regenerator-runtime/runtime"
import NavBar from "./NavBar"
import PetShow from "./PetShow"
import NewAdoptionForm from "./NewAdoptionForm"
import AnimalSurrenderForm from "./AnimalSurrenderForm"

const App = () => {
  console.log("In App")
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/pets" component={NavBar} />
        <Route exact path="/pets/mammal/:id" component={PetShow} />
        <Route exact path="/adopt" component={NewAdoptionForm} />
        <Route exact path="/surrender" component={AnimalSurrenderForm} />
      </Switch>
    </BrowserRouter>
  )
}

export default hot(App)
