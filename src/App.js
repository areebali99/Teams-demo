import React from 'react'
import { Route } from 'react-router'
import { Switch, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Form from './Form'
import AddTeamForm from './AddTeamForm'
import TeamPageEmployee from './TeamPageEmployee'
const App = () => {
  return (
    <>

      <Router>
        <Switch>
          <Route exact path="/" component={Form} />

          <Route exact path="/addteamform" component={AddTeamForm} />
          <Route exact path="/teampageemployee" component={TeamPageEmployee} />
        </Switch>
      </Router>

    </>)
}

export default App
