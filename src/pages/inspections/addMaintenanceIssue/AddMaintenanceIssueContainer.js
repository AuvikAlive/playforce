import { connect } from 'react-redux'
import { compose } from 'redux'
import { AddMaintenanceIssue } from './AddMaintenanceIssue'
import { addMaintenanceIssue } from '../../../store/actions/actionCreators/inspectionActions'
import { withErrorLoadingSubmit } from '../../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'

const mapDispatchToProps = { addMaintenanceIssue }

export const AddMaintenanceIssueContainer = compose(
  withErrorLoadingSubmit,
  connect(null, mapDispatchToProps),
)(AddMaintenanceIssue)
