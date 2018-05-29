import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import CommonIssuesList from '../commonIssuesList'

const EditCommonIssue = Loadable({
  loader: () => import('../editCommonIssue'),
})

const AddCommonIssue = Loadable({
  loader: () => import('../addCommonIssue'),
})

EditCommonIssue.preload()
AddCommonIssue.preload()

export const CommonIssueRoutes = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.url}/edit/:id`} component={EditCommonIssue} />
      <Route path={`${match.url}/add`} component={AddCommonIssue} />
      <Route path={match.url} component={CommonIssuesList} />
    </Switch>
  )
}
