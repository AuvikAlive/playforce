import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MemberList from '../memberList/'

export const ManageProjectRoutes = ({ match }) => {
  return (
    <Switch>
      <Route
        path={match.url}
        component={() => <MemberList id={match.params.id} />}
      />
    </Switch>
  )
}
