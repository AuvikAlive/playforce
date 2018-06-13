import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import GroupList from '../groupList/'

const AddGroup = Loadable({
  loader: () => import('../addGroup'),
})

const ManageGroupRoutes = Loadable({
  loader: () => import('../manageGroupRoutes'),
})

AddGroup.preload()
ManageGroupRoutes.preload()

export const GroupRoutes = ({ match }) => {
  return (
    <Switch>
      <Route
        path={`${match.url}/manageGroup/:id`}
        component={ManageGroupRoutes}
      />
      <Route path={`${match.url}/addGroup`} component={AddGroup} />
      <Route path={match.url} component={GroupList} />
    </Switch>
  )
}
