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

const mapStateToProps = ({ firebase, inspection }, { match }) => {
  const {
    inspectionLoaded,
    maintenanceIssuesLoaded,
    maintenanceIssues,
  } = inspection

  return {
    userId: firebase.auth.uid,
    inspectionId: match.params.id,
    inspectionLoaded,
    maintenanceIssuesLoaded,
    maintenanceIssues,
  }
}

const mapDispatchToProps = {
  fetchInspectionRealTime,
  fetchMaintenanceIssuesRealTime,
  fetchMaintenanceIssues,
  addMaintenanceIssue,
  updateMaintenanceIssue,
  deleteMaintenanceIssue,
}

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const MaintenanceIssueRoutesContainer = enhance(MaintenanceIssueRoutes)
