import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import CommonIssuesList from '../commonIssuesList'

const AddCommonIssue = Loadable({
  loader: () => import('../addCommonIssue'),
})

AddCommonIssue.preload()

export const CommonIssues = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.url}/add`} component={AddCommonIssue} />
      <Route path={match.url} component={CommonIssuesList} />
    </Switch>
  )
}
