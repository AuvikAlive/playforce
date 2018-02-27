import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../loadable/LoadableLinear'
import Home from '../../pages/home/Home'

const SignIn = Loadable({
  loader: () => import('../../pages/signIn'),
})
const SignUp = Loadable({
  loader: () => import('../../pages/signUp'),
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
  loader: () => import('../../pages/settings/Settings'),
})
const Terms = Loadable({
  loader: () => import('../../pages/terms/Terms'),
})

SignIn.preload()
SignUp.preload()
Dashboard.preload()
Inspections.preload()
Sites.preload()
Settings.preload()
Terms.preload()

const routes = [
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
  {
    Component: Terms,
    pathname: '/Terms',
    name: 'Terms',
    exact: false,
  },
]

export const Routes = ({
  auth,
  setLeftNavComponent,
  setRightNavComponent,
  removeLefNavComponent,
  removeRightNavComponent,
}) => (
  <Switch>
    {routes.map(({ Component, pathname, name, exact }) => (
      <Route
        key={name}
        exact={exact}
        path={pathname}
        render={({ location }) => {
          location.state = { name }
          return (
            <Component
              setLeftNavComponent={setLeftNavComponent}
              setRightNavComponent={setRightNavComponent}
              removeLefNavComponent={removeLefNavComponent}
              removeRightNavComponent={removeRightNavComponent}
            />
          )
        }}
      />
    ))}
  </Switch>
)
