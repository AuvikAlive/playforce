import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  fetchInspectionRealTime,
  fetchMaintenanceIssuesRealTime,
  fetchMaintenanceIssues,
} from '../../../store/actions/actionCreators/inspectionActions/'
import { MaintenanceIssueRoutes } from './MaintenanceIssueRoutes'

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
    },
    inspection: { inspectionLoaded, maintenanceIssuesLoaded },
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
})

const mapDispatchToProps = {
  fetchInspectionRealTime,
  fetchMaintenanceIssuesRealTime,
  fetchMaintenanceIssues,
}

export const MaintenanceIssueRoutesContainer = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(MaintenanceIssueRoutes)
