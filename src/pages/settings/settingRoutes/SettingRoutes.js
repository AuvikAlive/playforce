import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { SettingsList } from '../settingsList/SettingsList'
import Loadable from '../../../components/loadable/LoadableLinear'

const Profile = Loadable({
  loader: () => import('../profile'),
})

const Standards = Loadable({
  loader: () => import('../standards'),
})

const Clients = Loadable({
  loader: () => import('../clients'),
})

const Manufacturers = Loadable({
  loader: () => import('../manufacturers'),
})

const Operators = Loadable({
  loader: () => import('../operators'),
})

const CommonIssues = Loadable({
  loader: () => import('../commonIssues'),
})

const Company = Loadable({
  loader: () => import('../company'),
})

Profile.preload()
Standards.preload()
Clients.preload()
Manufacturers.preload()
Operators.preload()
CommonIssues.preload()
Company.preload()

export const SettingRoutes = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.url}/profile`} component={Profile} />
      <Route path={`${match.url}/standards`} component={Standards} />
      <Route path={`${match.url}/clients`} component={Clients} />
      <Route path={`${match.url}/manufacturers`} component={Manufacturers} />
      <Route path={`${match.url}/operators`} component={Operators} />
      <Route path={`${match.url}/commonIssues`} component={CommonIssues} />
      <Route path={`${match.url}/companyInformation`} component={Company} />
      <Route path={match.url} component={SettingsList} />
    </Switch>
  )
}
