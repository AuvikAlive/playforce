import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { addMaintenanceIssue } from '../../../store/actions/actionCreators/newInspectionActions/'
import { AddMaintenanceIssue } from './AddMaintenanceIssue'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
  inspection: { id },
}) => ({
  userId: uid,
  inspectionId: id,
})

const mapDispatchToProps = { addMaintenanceIssue }

export const AddMaintenanceIssueContainer = compose(
  withFeedback,
  connect(mapStateToProps, mapDispatchToProps)
)(AddMaintenanceIssue)
