import React, { useState } from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Form from './Form';
import FormSignup from './FormSignup';

import FormSignIn from './FormSignIn';

function App() {


  return (
    <>

      <Router>
        <Switch>
          <Route exact path="/" component={FormSignIn} />

          <Route exact path="/Signup" component={ Form} />
        </Switch>
      </Router>





    </>)
}

export default App;
