import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { SettingsList } from './settingsList/SettingsList'
import Loadable from '../../components/loadable/LoadableLinear'

const ProfileSettings = Loadable({
  loader: () => import('./profileSettings'),
})

export const Settings = () => {
  return (
    <Switch>
      <Route path="/settings/profile" component={ProfileSettings} />
      <Route path="/settings" component={SettingsList} />
    </Switch>
  )
}
