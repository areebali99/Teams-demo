import React, { useState } from 'react'
import { Route } from 'react-router'
import { Switch, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Form from './Form'

import TeamForm from './TeamForm'
const App = () => {
  const addInfo = (tname, tcategory, tdesc) => {
    const teamInfo = {
      tname,
      tcategory,
      tdesc
    }
    setTeams([...teams, teamInfo])
    console.log(teamInfo)
  }

  const [teams, setTeams] = useState([{
    tname: 'Team A',
    tcategory: 'category A',
    tdesc: 'this is development team'
  }
  ])

  return (
    <>

      <Router>
        <Switch>
          <Route exact path="/" component={Form} />

          <Route exact path="/teamform" component={TeamForm} >
            <TeamForm addInfo={addInfo} />
          </Route>
        </Switch>
      </Router>

    </>)
}

export default App
