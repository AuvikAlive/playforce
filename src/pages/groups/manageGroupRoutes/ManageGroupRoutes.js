import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import GroupUserList from '../groupUserList/'

const AddMembers = Loadable({
  loader: () => import('../addMembers'),
})

AddMembers.preload()

export const ManageGroupRoutes = ({ match }) => {
  return (
    <Switch>
      <Route
        path={`${match.url}/addMember`}
        component={() => <AddMembers id={match.params.id} />}
      />
      <Route
        path={match.url}
        component={() => <GroupUserList id={match.params.id} />}
      />
    </Switch>
  )
}
