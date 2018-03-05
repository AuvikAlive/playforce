import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../components/loadable/LoadableLinear'
import SiteList from './siteList'

const Site = Loadable({
  loader: () => import('./site'),
})

Site.preload()

export const Sites = () => {
  return (
    <Switch>
      <Route path="/sites/:id" component={Site} />
      <Route path="/sites" component={SiteList} />
    </Switch>
  )
}
