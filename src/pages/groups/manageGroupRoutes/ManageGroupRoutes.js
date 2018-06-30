import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import MemberList from '../memberList/'

const AddMembers = Loadable({
  loader: () => import('../addMembers'),
})

AddMembers.preload()

export const ManageGroupRoutes = ({ match }) => {
  return (
    <Switch>
      <Route
        path={`${match.url}/addMember`}
        render={props => <AddMembers id={match.params.id} {...props} />}
      />
      <Route
        path={match.url}
        render={props => <MemberList id={match.params.id} {...props} />}
      />
    </Switch>
  )
}
