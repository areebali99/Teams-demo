import React from 'react'
import { Route } from 'react-router'
import { Switch, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Form from './Form'
import AddTeamForm from './AddTeamForm'

const App = () => {
  return (
    <>

      <Router>
        <Switch>
          <Route exact path="/" component={Form} />

          <Route exact path="/addteamform" component={AddTeamForm} />
        </Switch>
      </Router>

    </>)
}

export default App
