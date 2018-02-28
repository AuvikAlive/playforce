import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../components/loadable/LoadableLinear'
import SiteList from './siteList'

const Site = Loadable({
  loader: () => import('./site'),
})

Site.preload()

export const Sites = ({
  setNavTitle,
  removeNavTitle,
  setLeftNavComponent,
  removeLefNavComponent,
  setRightNavComponent,
  removeRightNavComponent,
}) => {
  return (
    <Switch>
      <Route
        path="/sites/:id"
        render={() => (
          <Site
            setNavTitle={setNavTitle}
            removeNavTitle={removeNavTitle}
            setLeftNavComponent={setLeftNavComponent}
            removeLefNavComponent={removeLefNavComponent}
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
