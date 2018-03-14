import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import { LinearProgress } from 'material-ui/Progress'
import Loadable from '../loadable/LoadableLinear'
import Home from '../../pages/home/Home'

const SignIn = Loadable({
  loader: () => import('../../pages/signIn'),
})
const SignUp = Loadable({
  loader: () => import('../../pages/signUp'),
})
const ResetPassword = Loadable({
  loader: () => import('../../pages/resetPassword'),
})
const ConfirmPasswordReset = Loadable({
  loader: () => import('../../pages/confirmPasswordReset'),
})
const Dashboard = Loadable({
  loader: () => import('../../pages/dashboard/Dashboard'),
})
const Inspections = Loadable({
  loader: () => import('../../pages/inspections'),
})
const Sites = Loadable({
  loader: () => import('../../pages/sites'),
})
const Settings = Loadable({
  loader: () => import('../../pages/settings'),
})
const Terms = Loadable({
  loader: () => import('../../pages/terms/Terms'),
})

SignIn.preload()
SignUp.preload()
ResetPassword.preload()
ConfirmPasswordReset.preload()
Dashboard.preload()
Inspections.preload()
Sites.preload()
Settings.preload()
Terms.preload()

const publicRoutes = [
  {
    Component: Home,
    pathname: '/',
    name: 'Home',
    exact: true,
  },
  {
    Component: SignIn,
    pathname: '/SignIn',
    name: 'SignIn',
    exact: false,
  },
  {
    Component: SignUp,
    pathname: '/SignUp',
    name: 'SignUp',
    exact: false,
  },
  {
    Component: ResetPassword,
    pathname: '/ResetPassword',
    name: 'ResetPassword',
    exact: false,
  },
  {
    Component: ConfirmPasswordReset,
    pathname: '/ConfirmPasswordReset',
    name: 'ConfirmPasswordReset',
    exact: false,
  },
  {
    Component: Terms,
    pathname: '/Terms',
    name: 'Terms',
    exact: false,
  },
]

const privateRoutes = [
  {
    Component: Home,
    pathname: '/',
    name: 'Home',
    exact: true,
  },
  {
    Component: Dashboard,
    pathname: '/Dashboard',
    name: 'Dashboard',
    exact: false,
  },
  {
    Component: Inspections,
    pathname: '/Inspections',
    name: 'Inspections',
    exact: false,
  },
  {
    Component: Sites,
    pathname: '/Sites',
    name: 'Sites',
    exact: false,
  },
  {
    Component: Settings,
    pathname: '/Settings',
    name: 'Settings',
    exact: false,
  },
]

export const Routes = ({ auth, profile }) => {
  return isLoaded(auth) && isLoaded(profile) ? (
    isEmpty(auth) && isEmpty(profile) ? (
      <Switch>
        {publicRoutes.map(({ Component, pathname, name, exact }) => (
          <Route
            key={name}
            exact={exact}
            path={pathname}
            component={Component}
          />
        ))}
        <Redirect to="/" />
      </Switch>
    ) : (
      <Switch>
        {privateRoutes.map(({ Component, pathname, name, exact }) => (
          <Route
            key={name}
            exact={exact}
            path={pathname}
            component={Component}
          />
        ))}
        <Redirect to="/" />
      </Switch>
    )
  ) : (
    <LinearProgress />
  )
}
