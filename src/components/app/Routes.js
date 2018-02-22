import React from 'react'
import { Route } from 'react-router-dom'
import Loadable from '../loadable/Loadable'
import { Shell } from '../shell/Shell'
import Home from '../../pages/home/Home'

const SignIn = Loadable({
  loader: () => import('../../pages/signIn/SignInContainer')
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

SignIn.preload()
Dashboard.preload()
Settings.preload()
Terms.preload()

export const Routes = () => (
  <div>
    <Route path="/" component={Shell} />
    <Route exact path="/" component={Home} />
    <Route path="/SignIn" component={SignIn} />
    <Route path="/Dashboard" component={Dashboard} />
    <Route path="/Settings" component={Settings} />
    <Route path="/Terms" component={Terms} />
  </div>
)
