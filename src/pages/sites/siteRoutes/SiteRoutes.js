import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import SiteList from '../siteList'

const SiteEditRoutes = Loadable({
  loader: () => import('../siteEditRoutes'),
})

const AddSite = Loadable({
  loader: () => import('../addSite'),
})

SiteEditRoutes.preload()
AddSite.preload()

export const SiteRoutes = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.url}/add`} component={AddSite} />
      <Route path={`${match.url}/:id`} component={SiteEditRoutes} />
      <Route path={match.url} component={SiteList} />
    </Switch>
  )
}
