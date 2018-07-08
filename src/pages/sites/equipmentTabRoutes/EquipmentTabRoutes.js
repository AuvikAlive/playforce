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
        render={props => <EditEquipment siteId={match.params.id} {...props} />}
      />

      <Route
        path={match.url + '/add'}
        render={props => <AddEquipment siteId={match.params.id} {...props} />}
      />

      <Route
        path={match.url}
        render={props => <EquipmentList siteId={match.params.id} {...props} />}
      />
    </Switch>
  )
}

export const EquipmentTabRoutes = withRouter(EquipmentTabWithout)
