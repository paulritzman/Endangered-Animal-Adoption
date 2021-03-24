import React from "react"
import { hot } from "react-hot-loader/root"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import 'regenerator-runtime/runtime'

import TestComponentList from "./TestComponentList"
import NewAdoptionForm from "./NewAdoptionForm"
import AnimalSurrenderForm from "./AnimalSurrenderForm"

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/pets" component={TestComponentList} />
        <Route exact path="/adoptions" component={NewAdoptionForm} />
        <Route exact path="/surrender" component={AnimalSurrenderForm} />
      </Switch>
    </BrowserRouter>
  )
}

export default hot(App)
