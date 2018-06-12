import React from 'react'
import { Route, Switch } from 'react-router-dom'
import GroupList from '../groupList/'

export const GroupRoutes = ({ match }) => {
  return (
    <Switch>
      <Route path={match.url} component={GroupList} />
    </Switch>
  )
}
