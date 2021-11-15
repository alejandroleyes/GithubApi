import "./App.css"
import { BrowserRouter, Switch, Route } from "react-router-dom"

//views

import Home from "./Pages/Home/Home"
import Followers from "./Pages/Followers/Followers"
import NotFound from "./Pages/NotFound/NotFound"
import Repos from "./Pages/Repos/Repos"
import { MainLayout } from "./Layouts/MainLayout"

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/followers/:user" exact>
            <Followers />
          </Route>
          <Route path="/404" exact>
            <NotFound />
          </Route>
          <Route path="/repos/:user" exact>
            <Repos></Repos>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
