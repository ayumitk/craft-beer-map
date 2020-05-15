import React, { useState } from 'react'
import { ThemeProvider, CssBaseline, makeStyles } from '@material-ui/core'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import darkTheme from './styles/theme'
import Header from './components/Header'
import BreweryMap from './components/BreweryMap'
import BreweryDetails from './components/BreweryDetails'
import CreateBrewery from './components/CreateBrewery'
import BreweryList from './components/BreweryList'

const useStyles = makeStyles((theme) => ({
  root: {},
}))

const data = [
  {
    id: 1,
    name: '33 Acres Brewing',
    lat: 49.2639299,
    lng: -123.1075275,
    url: 'https://33acresbrewing.com/',
  },
  {
    id: 2,
    name: 'Mainstreet Brewing',
    lat: 49.2647272,
    lng: -123.1014935,
    url: 'http://mainstreetbeer.ca/',
  },
]

const App = () => {
  const classes = useStyles()

  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header />
        <Switch>
          <Route exact path="/" render={(props) => <BreweryMap {...props} data={data} />} />
          <Route path="/list" render={(props) => <BreweryList {...props} data={data} />} />
          <Route path="/brewery/:id" component={BreweryDetails} />
          <Route path="/create" component={CreateBrewery} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
