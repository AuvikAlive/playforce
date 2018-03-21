import { connect } from 'react-redux'
import { compose } from 'redux'
import { AddMaintenanceIssue } from './AddMaintenanceIssue'
import { addMaintenanceIssue } from '../../../store/actions/actionCreators/inspectionActions'
import { withErrorLoadingSubmit } from '../../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'
import { withImageCapture } from '../../../hocs/withImageCapture/withImageCapture'

const mapStateToProps = ({ inspection: { equipments } }) => ({
  equipments,
})

const mapDispatchToProps = { addMaintenanceIssue }

export const AddMaintenanceIssueContainer = compose(
  withImageCapture,
  withErrorLoadingSubmit,
  connect(mapStateToProps, mapDispatchToProps),
)(AddMaintenanceIssue)
