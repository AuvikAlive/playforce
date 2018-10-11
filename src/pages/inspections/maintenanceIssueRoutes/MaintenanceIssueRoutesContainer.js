import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  addMaintenanceIssue,
  updateMaintenanceIssue,
  deleteMaintenanceIssue,
} from '../../../store/actions/actionCreators/inspectionActions/'
import { MaintenanceIssueRoutes } from './MaintenanceIssueRoutes'

const mapStateToProps = ({ firebase, inspection }, { match }) => {
  const { id, maintenanceIssues } = inspection

  return {
    userId: firebase.auth.uid,
    inspectionId: id,
    maintenanceIssues,
  }
}

const mapDispatchToProps = {
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
