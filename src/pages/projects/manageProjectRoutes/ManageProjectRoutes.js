import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import Dashboard from '../dashboard/'

const AddInspections = Loadable({
  loader: () => import('../addInspections'),
})

const DeleteInspections = Loadable({
  loader: () => import('../deleteInspections'),
})

AddInspections.preload()
DeleteInspections.preload()

export const ManageProjectRoutes = ({ match }) => {
  return (
    <Switch>
      <Route
        path={`${match.url}/add`}
        component={props => <AddInspections id={match.params.id} {...props} />}
      />
      <Route
        path={`${match.url}/remove`}
        component={props => (
          <DeleteInspections id={match.params.id} {...props} />
        )}
      />
      <Route
        path={match.url}
        render={props => <Dashboard id={match.params.id} {...props} />}
      />
    </Switch>
  )
}
