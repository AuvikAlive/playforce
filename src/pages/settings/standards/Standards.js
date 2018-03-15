import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import StandardsList from '../standardsList'

export const Standards = ({ match }) => {
  return (
    <Switch>
      <Route path={match.url} component={StandardsList} />
    </Switch>
  )
}
