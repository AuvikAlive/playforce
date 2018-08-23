import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
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

export const AddMaintenanceIssueContainer = compose(
  withFeedback,
  connect(mapStateToProps)
)(AddMaintenanceIssue)
