import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Loadable from '../loadable/Loadable'
import Home from '../../pages/home/Home'

const SignIn = Loadable({
  loader: () => import('../../pages/signIn/SignIn')
})
const Dashboard = Loadable({
  loader: () => import('../../pages/dashboard/Dashboard')
})
const Settings = Loadable({
  loader: () => import('../../pages/settings/Settings')
})
const Terms = Loadable({
  loader: () => import('../../pages/terms/Terms')
})

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/SignIn" component={SignIn} />
    <Route path="/Dashboard" component={Dashboard} />
    <Route path="/Settings" component={Settings} />
    <Route path="/Terms" component={Terms} />
    <Redirect to="/" />
  </Switch>
)
