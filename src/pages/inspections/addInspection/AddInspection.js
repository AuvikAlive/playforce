import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import InspectionItems from '../inspectionItems'

export const AddInspection = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.url}/cover`} render={() => <div>cover</div>} />
      <Route
        path={`${match.url}/auditSummary`}
        render={() => <div>audit summary</div>}
      />
      <Route path={match.url} component={InspectionItems} />
    </Switch>
  )
}
