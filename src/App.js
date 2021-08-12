import React from 'react'
import { Route } from 'react-router'
import { Switch, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Form from './Form'

function App () {
  return (
    <>

      <Router>
        <Switch>
          <Route exact path="/" component={Form} />
        </Switch>
      </Router>

    </>)
}

export default App
