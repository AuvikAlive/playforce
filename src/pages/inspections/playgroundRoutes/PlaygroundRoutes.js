import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import PlaygroundList from '../playgroundList/'

const AddPlayground = Loadable({
  loader: () => import('../addPlayground'),
})

const EditPlaygroundRoutes = Loadable({
  loader: () => import('../editPlaygroundRoutes'),
})

// AddPlayground.preload()
// EditPlaygroundRoutes.preload()

export const PlaygroundRoutes = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.url}/edit/:id`} component={EditPlaygroundRoutes} />
      <Route path={`${match.url}/add`} component={AddPlayground} />
      <Route path={match.url} component={PlaygroundList} />
    </Switch>
  )
}
