import React from 'react'
import { withRouter } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import EquipmentList from '../equipmentList/'

const AddEquipment = Loadable({
  loader: () => import('../addEquipment'),
})
const EditEquipment = Loadable({
  loader: () => import('../editEquipment'),
})

AddEquipment.preload()
EditEquipment.preload()

const EquipmentTabWithout = ({ match }) => {
  return (
    <Switch>
      <Route
        path={match.url + '/edit/:id'}
        render={routerProps => (
          <EditEquipment siteId={match.params.id} {...routerProps} />
        )}
      />

      <Route
        path={match.url + '/add'}
        render={routerProps => (
          <AddEquipment siteId={match.params.id} {...routerProps} />
        )}
      />

      <Route
        path={match.url}
        render={routerProps => (
          <EquipmentList siteId={match.params.id} {...routerProps} />
        )}
      />
    </Switch>
  )
}

export const EquipmentTabRoutes = withRouter(EquipmentTabWithout)
