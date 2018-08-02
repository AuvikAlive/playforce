import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { isEmpty } from 'react-redux-firebase'
import { publicRoutes } from './publicRoutes'
import { privateRoutes } from './privateRoutes'

export const Routes = ({ auth, profile }) =>
  isEmpty(auth) && isEmpty(profile) ? (
    <Switch>
      {publicRoutes.map(({ Component, pathname, name, exact }) => (
        <Route key={name} exact={exact} path={pathname} component={Component} />
      ))}
      <Redirect to="/signIn" />
    </Switch>
  ) : (
    <Switch>
      {privateRoutes.map(({ Component, pathname, name, exact }) => (
        <Route key={name} exact={exact} path={pathname} component={Component} />
      ))}
      <Redirect to="/dashboard" />
    </Switch>
  )
