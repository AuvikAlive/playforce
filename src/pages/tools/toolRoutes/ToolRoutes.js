import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import { ToolList } from '../toolList/ToolList'

const impactAreaExtentCalculator = Loadable({
  loader: () => import('../impactAreaExtentCalculator'),
})

impactAreaExtentCalculator.preload()

export const ToolRoutes = ({ match }) => (
  <Switch>
    <Route
      path={`${match.url}/impactAreaExtent`}
      component={impactAreaExtentCalculator}
    />

    <Route path={match.url} component={ToolList} />
  </Switch>
)
