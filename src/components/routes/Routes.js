import React from 'react'
import { Route } from 'react-router-dom'
import Loadable from '../loadable/Loadable'
import Home from '../../pages/home/Home'

const SignIn = Loadable({
  loader: () => import('../../pages/signIn/SignIn')
})
const SignUp = Loadable({
  loader: () => import('../../pages/signUp/SignUp')
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
SignUp.preload()
Dashboard.preload()
Settings.preload()
Terms.preload()

export const Routes = ({ auth }) => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/SignIn" component={SignIn} />
    <Route path="/SignUp" component={SignUp} />
    <Route path="/Dashboard" component={Dashboard} />
    <Route path="/Settings" component={Settings} />
    <Route path="/Terms" component={Terms} />
  </div>
)
