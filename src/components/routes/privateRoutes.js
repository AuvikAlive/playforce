import Loadable from '../loadable/LoadableLinear'
import Home from '../../pages/home/Home'

const Dashboard = Loadable({
  loader: () => import('../../pages/dashboard/Dashboard'),
})

const InspectionRoutes = Loadable({
  loader: () => import('../../pages/inspections/inspectionRoutes'),
})

const SiteRoutes = Loadable({
  loader: () => import('../../pages/sites/siteRoutes'),
})

const GroupRoutes = Loadable({
  loader: () => import('../../pages/groups/groupRoutes'),
})

const SettingRoutes = Loadable({
  loader: () => import('../../pages/settings/settingRoutes'),
})

Dashboard.preload()
InspectionRoutes.preload()
SiteRoutes.preload()
GroupRoutes.preload()
SettingRoutes.preload()

export const privateRoutes = [
  {
    Component: Home,
    pathname: '/',
    name: 'Home',
    exact: true,
  },
  {
    Component: Dashboard,
    pathname: '/Dashboard',
    name: 'Dashboard',
    exact: false,
  },
  {
    Component: InspectionRoutes,
    pathname: '/Inspections',
    name: 'Inspections',
    exact: false,
  },
  {
    Component: SiteRoutes,
    pathname: '/Sites',
    name: 'Sites',
    exact: false,
  },
  {
    Component: GroupRoutes,
    pathname: '/groups',
    name: 'Groups',
    exact: false,
  },
  {
    Component: SettingRoutes,
    pathname: '/Settings',
    name: 'Settings',
    exact: false,
  },
]
