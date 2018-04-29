import { connect } from 'react-redux'
import { compose } from 'redux'
import { fetchMaintenanceIssuesRealTime } from '../../../store/actions/actionCreators/inspectionActions/'
import { MaintenanceIssuesList } from './MaintenanceIssuesList'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
  inspection: { id, maintenanceIssuesLoaded, maintenanceIssues },
}) => ({
  userId: uid,
  inspectionId: id,
  maintenanceIssuesLoaded,
  maintenanceIssues,
})

const mapDispatchToProps = {
  fetchMaintenanceIssuesRealTime,
}

export const MaintenanceIssuesListContainer = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(MaintenanceIssuesList)
