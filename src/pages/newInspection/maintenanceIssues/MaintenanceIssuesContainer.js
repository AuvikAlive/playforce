import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  fetchInspectionRealTime,
  fetchMaintenanceIssuesRealTime,
} from '../../../store/actions/actionCreators/newInspectionActions/'
import { MaintenanceIssues } from './MaintenanceIssues'

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
}

export const MaintenanceIssuesContainer = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(MaintenanceIssues)
