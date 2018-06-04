import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import { ImpactTestDetailItemsContainer } from '../impactTestDetailItems/ImpactTestDetailItemsContainer'

const EditImpactSurface = Loadable({
  loader: () => import('../editImpactSurface'),
})

const AddDropTest = Loadable({
  loader: () => import('../addDropTest'),
})

const EditDropTest = Loadable({
  loader: () => import('../editDropTest'),
})

EditImpactSurface.preload()
AddDropTest.preload()
EditDropTest.preload()

export const ImpactTestDetailRoutes = ({ match }) => {
  const impactTestId = match.params.id

  return (
    <Switch>
      <Route
        path={`${match.url}/surface`}
        component={() => <EditImpactSurface impactTestId={impactTestId} />}
      />
      <Route
        path={`${match.url}/addDrop`}
        component={() => <AddDropTest impactTestId={impactTestId} />}
      />
      <Route
        path={`${match.url}/editDrop/:id`}
        component={() => <EditDropTest impactTestId={impactTestId} />}
      />
      <Route
        path={match.url}
        component={() => (
          <ImpactTestDetailItemsContainer impactTestId={impactTestId} />
        )}
      />
    </Switch>
  )
}
