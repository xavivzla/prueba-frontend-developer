import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// import { StoreProvider } from '../utils/api.conext'

import Home from './Home'
import Cataloge from './Cataloge'
import Tour from './Tour'
import ErrorPage from './ErrorPage'

import '../assets/scss/App.scss'
import { AppContextProvider } from '../utils/api.conext';

const App = () => (
  <BrowserRouter>
    <AppContextProvider>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/cataloge/:region?'  component={Cataloge} />
        <Route path='/tours/:tour' component={Tour} />
        <Route component={ErrorPage} />
      </Switch>
    </AppContextProvider>
  </BrowserRouter>
)

export default App
