import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import Clients from '../clients/'

const AddClient = Loadable({
  loader: () => import('../addClient'),
})

const EditClient = Loadable({
  loader: () => import('../editClient'),
})

AddClient.preload()
EditClient.preload()

export const ClientRoutes = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.url}/edit/:id`} component={EditClient} />
      <Route path={`${match.url}/add`} component={AddClient} />
      <Route path={match.url} component={Clients} />
    </Switch>
  )
}
