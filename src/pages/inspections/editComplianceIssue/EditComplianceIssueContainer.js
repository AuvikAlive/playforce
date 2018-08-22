import { connect } from 'react-redux'
import { compose } from 'redux'
import { withDeleteDialog } from '../../../hocs/withDeleteDialog/withDeleteDialog'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { EditComplianceIssue } from './EditComplianceIssue'

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
    },
    inspection: { id },
  },
  { match, complianceIssues }
) => ({
  userId: uid,
  inspectionId: id,
  complianceIssueId: match.params.id,
  complianceIssue: complianceIssues.find(item => item.id === match.params.id),
})

export const EditComplianceIssueContainer = compose(
  withFeedback,
  withDeleteDialog,
  connect(mapStateToProps)
)(EditComplianceIssue)
