import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import Loadable from '../../../components/loadable/LoadableLinear'
import GroupUserList from '../groupUserList/'

// const AddGroup = Loadable({
//   loader: () => import('../addGroup'),
// })

// AddGroup.preload()

export const ManageGroupRoutes = ({ match }) => {
  return (
    <Switch>
      {/* <Route path={`${match.url}/addGroup`} component={AddGroup} /> */}
      <Route
        path={match.url}
        component={() => <GroupUserList id={match.params.id} />}
      />
    </Switch>
  )
}
