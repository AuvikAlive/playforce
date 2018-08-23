import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  fetchInspectionRealTime,
  fetchMaintenanceIssuesRealTime,
  fetchMaintenanceIssues,
  addMaintenanceIssue,
  updateMaintenanceIssue,
  deleteMaintenanceIssue,
} from '../../../store/actions/actionCreators/inspectionActions/'
import { MaintenanceIssueRoutes } from './MaintenanceIssueRoutes'

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
    },
    inspection: {
      inspectionLoaded,
      maintenanceIssuesLoaded,
      maintenanceIssues,
    },
  },
  {
    match: {
      params: { id },
    },
  }
) => ({
  userId: uid,
  inspectionId: id,
  inspectionLoaded,
  maintenanceIssuesLoaded,
  maintenanceIssues,
})

const mapDispatchToProps = {
  fetchInspectionRealTime,
  fetchMaintenanceIssuesRealTime,
  fetchMaintenanceIssues,
  addMaintenanceIssue,
  updateMaintenanceIssue,
  deleteMaintenanceIssue,
}

export const MaintenanceIssueRoutesContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(MaintenanceIssueRoutes)
