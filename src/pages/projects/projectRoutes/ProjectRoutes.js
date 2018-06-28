import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import ProjectList from '../projectList/'

const AddProject = Loadable({
  loader: () => import('../addProject'),
})

export const ProjectRoutes = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.url}/addProject`} component={AddProject} />
      <Route path={match.url} component={ProjectList} />
    </Switch>
  )
}
