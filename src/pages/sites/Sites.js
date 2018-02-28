import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../components/loadable/LoadableLinear'
import SiteList from './siteList'

const Site = Loadable({
  loader: () => import('./site'),
})

Site.preload()

export const Sites = props => {
  return (
    <Switch>
      <Route path="/sites/:id" render={() => <Site {...props} />} />
      <Route path="/sites" render={() => <SiteList {...props} />} />
    </Switch>
  )
}
