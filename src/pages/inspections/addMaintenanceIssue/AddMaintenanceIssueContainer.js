import { connect } from 'react-redux'
import { compose } from 'redux'
import { AddMaintenanceIssue } from './AddMaintenanceIssue'
import { addMaintenanceIssue } from '../../../store/actions/actionCreators/inspectionActions'

const mapDispatchToProps = { addMaintenanceIssue }

export const AddMaintenanceIssueContainer = compose(
  connect(null, mapDispatchToProps),
)(AddMaintenanceIssue)
