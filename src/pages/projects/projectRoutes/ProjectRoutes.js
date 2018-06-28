import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ProjectList from '../projectList/'

export const ProjectRoutes = ({ match }) => {
  return (
    <Switch>
      <Route path={match.url} component={ProjectList} />
    </Switch>
  )
}
