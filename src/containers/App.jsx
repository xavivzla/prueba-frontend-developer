import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Home'
import Cataloge from './Cataloge';
import ErrorPage from './ErrorPage'

import '../assets/scss/App.scss'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/catalogo' component={Cataloge} />
      <Route component={ErrorPage} />
    </Switch>
  </BrowserRouter>
)

export default App
