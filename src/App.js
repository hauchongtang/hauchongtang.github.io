import React from 'react';
import { Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import HomePage from './components/HomePage'
import Projects from './components/Projects'
import Blogs from './components/Blogs'

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + "/blog"} component={Blogs} />
        <Route exact path={process.env.PUBLIC_URL + "/"} component={HomePage} />
        <Route path={process.env.PUBLIC_URL + "/:id"} component={Projects} />
      </Switch>
    </>
  )
}