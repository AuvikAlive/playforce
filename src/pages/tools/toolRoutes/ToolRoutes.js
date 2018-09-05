import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ToolList } from '../toolList/ToolList'

export const ToolRoutes = ({ match }) => {
  return (
    <Switch>
      <Route path={match.url} component={ToolList} />
    </Switch>
  )
}
