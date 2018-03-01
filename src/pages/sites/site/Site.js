import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import { SiteDetail } from './siteDetail/SiteDetail'

const SiteEdit = Loadable({
  loader: () => import('./siteEdit'),
})

SiteEdit.preload()

export const Site = props => {
  return (
    <Switch>
      <Route
        path={'/sites/:id/edit/:tabstate'}
        render={() => <SiteEdit {...props} />}
      />
      <Route path="/sites/:id" render={() => <SiteDetail {...props} />} />
    </Switch>
  )
}
