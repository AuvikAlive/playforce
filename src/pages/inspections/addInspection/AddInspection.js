import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import InspectionItems from '../inspectionItems'

const Cover = Loadable({
  loader: () => import('../cover'),
})

Cover.preload()

export const AddInspection = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.url}/cover`} component={Cover} />
      <Route path={match.url} component={InspectionItems} />
    </Switch>
  )
}
