import { connect } from 'react-redux'
import { compose } from 'redux'
import { withDialog } from '../../../hocs/withDialog/withDialog'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { EditComplianceIssue } from './EditComplianceIssue'

const mapStateToProps = (
  { firebase, inspection },
  { match, complianceIssues }
) => {
  const complianceIssueId = match.params.id

  return {
    userId: firebase.auth.uid,
    inspectionId: inspection.id,
    complianceIssueId,
    complianceIssue: complianceIssues.find(
      item => item.id === complianceIssueId
    ),
  }
}

const enhance = compose(
  withFeedback,
  withDialog,
  connect(mapStateToProps)
)

export const EditComplianceIssueContainer = enhance(EditComplianceIssue)
