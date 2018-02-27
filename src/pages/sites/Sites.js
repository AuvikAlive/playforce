import React from 'react'
import { Route, Switch } from 'react-router-dom'
import SiteList from './siteList'
import Site from './site'

export const Sites = ({ setRightNavComponent, removeRightNavComponent }) => {
  return (
    <Switch>
      <Route
        path="/sites/:id"
        render={() => (
          <Site
            setRightNavComponent={setRightNavComponent}
            removeRightNavComponent={removeRightNavComponent}
          />
        )}
      />
      <Route
        path="/sites"
        render={() => (
          <SiteList
            setRightNavComponent={setRightNavComponent}
            removeRightNavComponent={removeRightNavComponent}
          />
        )}
      />
    </Switch>
  )
}
