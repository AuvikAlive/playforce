import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { isEmpty } from 'react-redux-firebase'
import { publicRoutes } from './publicRoutes'
import { privateRoutes } from './privateRoutes'
import { showContentWhenLoaded } from '../../functions/'

export class Routes extends Component {
  componentDidMount() {
    const { rootLoaded, fetchDatabaseRootRealTime } = this.props

    !rootLoaded && fetchDatabaseRootRealTime()
  }

  render() {
    const { rootLoaded, profile } = this.props

    return isEmpty(profile) ? (
      <Switch>
        {publicRoutes.map(({ Component, pathname, name, exact }) => (
          <Route
            key={name}
            exact={exact}
            path={pathname}
            component={Component}
          />
        ))}
        <Redirect to="/signIn" />
      </Switch>
    ) : (
      showContentWhenLoaded(
        rootLoaded,
        <Switch>
          {privateRoutes.map(({ Component, pathname, name, exact }) => (
            <Route
              key={name}
              exact={exact}
              path={pathname}
              component={Component}
            />
          ))}
          <Redirect to="/dashboard" />
        </Switch>
      )
    )
  }
}
