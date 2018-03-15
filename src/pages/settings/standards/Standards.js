import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import StandardsList from '../standardsList'

const AddStandard = Loadable({
  loader: () => import('../addStandard'),
})

AddStandard.preload()

export const Standards = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.url}/add`} component={AddStandard} />
      <Route path={match.url} component={StandardsList} />
    </Switch>
  )
}
