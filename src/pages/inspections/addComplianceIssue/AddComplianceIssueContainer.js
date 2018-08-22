import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { AddComplianceIssue } from './AddComplianceIssue'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
  inspection: { id },
}) => ({
  userId: uid,
  inspectionId: id,
})

export const AddComplianceIssueContainer = compose(
  withFeedback,
  connect(mapStateToProps)
)(AddComplianceIssue)
