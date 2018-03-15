import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import CommonIssuesList from '../commonIssuesList'

export const CommonIssues = ({ match }) => {
  return (
    <Switch>
      <Route path={match.url} component={CommonIssuesList} />
    </Switch>
  )
}
