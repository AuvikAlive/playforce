import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { SettingsList } from './settingsList/SettingsList'
import Loadable from '../../components/loadable/LoadableLinear'

const GeneralSettings = Loadable({
  loader: () => import('./generalSettings'),
})

export const Settings = () => {
  return (
    <Switch>
      <Route path="/settings/general" component={GeneralSettings} />
      <Route path="/settings" component={SettingsList} />
    </Switch>
  )
}
