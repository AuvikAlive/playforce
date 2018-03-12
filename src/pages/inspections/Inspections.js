import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../components/loadable/LoadableLinear'
import InspectionList from './inspectionList'

export const Inspections = () => {
  return (
    <Switch>
      <Route path="/inspections/add" render={() => <div>Add</div>} />
      <Route path="/inspections" component={InspectionList} />
    </Switch>
  )
}
