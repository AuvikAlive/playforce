import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../components/loadable/LoadableLinear'
import InspectionList from './inspectionList'

const AddInspection = Loadable({
  loader: () => import('./addInspection'),
})

AddInspection.preload()

export const Inspections = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.url}/add`} component={AddInspection} />
      <Route path={match.url} component={InspectionList} />
    </Switch>
  )
}
