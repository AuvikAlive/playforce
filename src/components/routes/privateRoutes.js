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

const ProjectRoutes = Loadable({
  loader: () => import('../../pages/projects/projectRoutes'),
})

Dashboard.preload()
InspectionRoutes.preload()
SiteRoutes.preload()
GroupRoutes.preload()
SettingRoutes.preload()
ProjectRoutes.preload()

export const privateRoutes = [
  {
    Component: Home,
    pathname: '/',
    name: 'home',
    exact: true,
  },
  {
    Component: Dashboard,
    pathname: '/dashboard',
    name: 'Dashboard',
    exact: false,
  },
  {
    Component: InspectionRoutes,
    pathname: '/inspections',
    name: 'Inspections',
    exact: false,
  },
  {
    Component: SiteRoutes,
    pathname: '/sites',
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
    pathname: '/settings',
    name: 'Settings',
    exact: false,
  },
  {
    Component: ProjectRoutes,
    pathname: '/projects',
    name: 'Projects',
    exact: false,
  },
]
