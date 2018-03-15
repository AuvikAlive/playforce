import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { SettingsList } from './settingsList/SettingsList'
import Loadable from '../../components/loadable/LoadableLinear'

const ProfileSettings = Loadable({
  loader: () => import('./profileSettings'),
})

const Standards = Loadable({
  loader: () => import('./standards'),
})

const Clients = Loadable({
  loader: () => import('./clients'),
})

ProfileSettings.preload()
Standards.preload()
Clients.preload()

export const Settings = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.url}/profile`} component={ProfileSettings} />
      <Route path={`${match.url}/standards`} component={Standards} />
      <Route path={`${match.url}/clients`} component={Clients} />
      <Route path={match.url} component={SettingsList} />
    </Switch>
  )
}
