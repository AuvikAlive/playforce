import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../components/loadable/LoadableLinear'
import InspectionList from './inspectionList'

const AddInspection = Loadable({
  loader: () => import('./addInspection'),
})
const EditInspection = Loadable({
  loader: () => import('./editInspection'),
})

AddInspection.preload()
EditInspection.preload()

export const Inspections = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.url}/add`} component={AddInspection} />
      <Route path={`${match.url}/edit`} component={EditInspection} />
      <Route path={match.url} component={InspectionList} />
    </Switch>
  )
}
