import React from 'react'
import { withRouter } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import EquipmentList from '../equipmentList/'

const AddEquipment = Loadable({
  loader: () => import('../addEquipment'),
})

AddEquipment.preload()

const EquipmentsTabWithoutRouter = ({ match }) => {
  return (
    <Switch>
      <Route
        path={match.url + '/addEquipment'}
        render={() => <AddEquipment siteId={match.params.id} />}
      />

      <Route
        path={match.url}
        render={() => <EquipmentList siteId={match.params.id} />}
      />
    </Switch>
  )
}

export const EquipmentsTab = withRouter(EquipmentsTabWithoutRouter)
