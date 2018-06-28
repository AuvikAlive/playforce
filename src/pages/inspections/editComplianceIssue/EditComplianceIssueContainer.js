import { connect } from 'react-redux'
import { compose } from 'redux'
import { withDeleteDialog } from '../../../hocs/withDeleteDialog/withDeleteDialog'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import {
  updateComplianceIssue,
  deleteComplianceIssue,
} from '../../../store/actions/actionCreators/inspectionActions/'
import { EditComplianceIssue } from './EditComplianceIssue'

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
    },
    inspection: { id, complianceIssues },
  },
  { match }
) => ({
  userId: uid,
  inspectionId: id,
  complianceIssueId: match.params.id,
  complianceIssue: complianceIssues.find(item => item.id === match.params.id),
})

const mapDispatchToProps = { updateComplianceIssue, deleteComplianceIssue }

export const EditComplianceIssueContainer = compose(
  withFeedback,
  withDeleteDialog,
  connect(mapStateToProps, mapDispatchToProps)
)(EditComplianceIssue)
