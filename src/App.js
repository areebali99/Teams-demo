import React from 'react'
import { Route } from 'react-router'
import { Switch, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Form from './Form'

import TeamForm from './TeamForm'

function App () {
  return (
    <>

      <Router>
        <Switch>
          <Route exact path="/" component={Form} />

          <Route exact path="/teamform" component={TeamForm} />
        </Switch>
      </Router>

    </>)
}

export default App
