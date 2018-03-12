import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import InspectionItems from '../inspectionItems'

const Cover = Loadable({
  loader: () => import('../cover'),
})
const AuditSummary = Loadable({
  loader: () => import('../auditSummary'),
})

Cover.preload()
AuditSummary.preload()

export const AddInspection = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.url}/cover`} component={Cover} />
      <Route path={`${match.url}/auditSummary`} component={AuditSummary} />
      <Route path={match.url} component={InspectionItems} />
    </Switch>
  )
}
