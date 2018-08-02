import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { SettingsList } from '../settingsList/SettingsList'
import Loadable from '../../../components/loadable/LoadableLinear'

const Profile = Loadable({
  loader: () => import('../profile'),
})

const StandardRoutes = Loadable({
  loader: () => import('../standardRoutes'),
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

const CommonIssueRoutes = Loadable({
  loader: () => import('../commonIssueRoutes'),
})

const Company = Loadable({
  loader: () => import('../company'),
})

const SidenavBackground = Loadable({
  loader: () => import('../sidenavBackground'),
})

const StandardAuditSummary = Loadable({
  loader: () => import('../standardAuditSummary'),
})

const PreimplementationRecommendation = Loadable({
  loader: () => import('../preimplementationRecommendation'),
})

const InspectionTypes = Loadable({
  loader: () => import('../inspectionTypes'),
})

const DefaultCertificateText = Loadable({
  loader: () => import('../defaultCertificateText'),
})

Profile.preload()
StandardRoutes.preload()
Clients.preload()
Manufacturers.preload()
Operators.preload()
CommonIssueRoutes.preload()
Company.preload()
SidenavBackground.preload()
StandardAuditSummary.preload()
PreimplementationRecommendation.preload()
InspectionTypes.preload()
DefaultCertificateText.preload()

export const SettingRoutes = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.url}/profile`} component={Profile} />
      <Route path={`${match.url}/standards`} component={StandardRoutes} />
      <Route path={`${match.url}/clients`} component={Clients} />
      <Route path={`${match.url}/manufacturers`} component={Manufacturers} />
      <Route path={`${match.url}/operators`} component={Operators} />
      <Route path={`${match.url}/commonIssues`} component={CommonIssueRoutes} />
      <Route path={`${match.url}/companyInformation`} component={Company} />
      <Route
        path={`${match.url}/sidenavBackground`}
        component={SidenavBackground}
      />
      <Route
        path={`${match.url}/auditSummary`}
        component={StandardAuditSummary}
      />
      <Route
        path={`${match.url}/preimplementationRecommendation`}
        component={PreimplementationRecommendation}
      />
      <Route
        path={`${match.url}/inspectionTypes`}
        component={InspectionTypes}
      />
      <Route
        path={`${match.url}/defaultCertificateText`}
        component={DefaultCertificateText}
      />
      <Route path={match.url} component={SettingsList} />
    </Switch>
  )
}
