import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import InspectionList from '../inspectionList'

const AddInspection = Loadable({
  loader: () => import('../addInspection'),
})

const EditInspectionRoutes = Loadable({
  loader: () => import('../editInspectionRoutes'),
})

const StandaloneImpactTestRoutes = Loadable({
  loader: () => import('../standaloneImpactTestRoutes'),
})

// AddInspection.preload()
// EditInspectionRoutes.preload()

export const InspectionRoutes = ({ match }) => {
  return (
    <Switch>
      <Route
        path={`${match.url}/comprehensiveInspection/add`}
        component={AddInspection}
      />

      <Route
        path={`${match.url}/comprehensiveInspection/edit/:id`}
        component={EditInspectionRoutes}
      />

      <Route
        path={`${match.url}/impactAttenuationTest/`}
        component={StandaloneImpactTestRoutes}
      />

      <Route path={match.url} component={InspectionList} />
    </Switch>
  )
}
