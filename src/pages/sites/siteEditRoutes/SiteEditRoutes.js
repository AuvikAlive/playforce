import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import SiteDetail from '../siteDetail'

const SiteEdit = Loadable({
  loader: () => import('../siteEdit'),
})

SiteEdit.preload()

export const SiteEditRoutes = () => {
  return (
    <Switch>
      <Route path={'/sites/:id/edit/:tabstate'} component={SiteEdit} />
      <Route path="/sites/:id" component={SiteDetail} />
    </Switch>
  )
}
