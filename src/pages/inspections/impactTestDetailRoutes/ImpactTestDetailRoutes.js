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
        render={props => (
          <EditImpactSurface impactTestId={impactTestId} {...props} />
        )}
      />
      <Route
        path={`${match.url}/addDrop`}
        render={props => <AddDropTest impactTestId={impactTestId} {...props} />}
      />
      <Route
        path={`${match.url}/editDrop/:id`}
        render={props => (
          <EditDropTest impactTestId={impactTestId} {...props} />
        )}
      />
      <Route
        path={match.url}
        render={props => (
          <ImpactTestDetailItemsContainer
            impactTestId={impactTestId}
            {...props}
          />
        )}
      />
    </Switch>
  )
}
