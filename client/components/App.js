import React from "react"
import { hot } from "react-hot-loader/root"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import 'regenerator-runtime/runtime'

import TestComponentList from "./TestComponentList"
import AdoptionShow from "./AdoptionShow"

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/pets" component={TestComponentList} />
        <Route exact path="/pets/:id" component={AdoptionShow} />
      </Switch>
    </BrowserRouter>
  )
}

export default hot(App)
