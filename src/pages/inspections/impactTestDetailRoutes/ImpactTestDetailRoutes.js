import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import { ImpactTestDetailItems } from '../impactTestDetailItems/ImpactTestDetailItems'

const ImpactSurfaceDetails = Loadable({
  loader: () => import('../impactSurfaceDetails'),
})

const AddDropTest = Loadable({
  loader: () => import('../addDropTest'),
})

const EditDropTest = Loadable({
  loader: () => import('../editDropTest'),
})

ImpactSurfaceDetails.preload()
AddDropTest.preload()
EditDropTest.preload()

const ImpactTestDetailRoutesWithout = ({ match, mode }) => {
  return (
    <Switch>
      <Route path={`${match.url}/surface`} component={ImpactSurfaceDetails} />
      <Route path={`${match.url}/addDrop`} component={AddDropTest} />
      <Route path={`${match.url}/editDrop/:id`} component={EditDropTest} />
      <Route
        path={match.url}
        component={() => <ImpactTestDetailItems mode={mode} />}
      />
    </Switch>
  )
}

export const ImpactTestDetailRoutes = withRouter(ImpactTestDetailRoutesWithout)
