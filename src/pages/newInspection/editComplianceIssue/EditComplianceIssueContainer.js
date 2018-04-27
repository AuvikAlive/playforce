import { connect } from 'react-redux'
import { compose } from 'redux'
import { withDeleteModal } from '../../../hocs/withDeleteDialog/withDeleteDialog'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import {
  saveComplianceIssue,
  deleteComplianceIssue,
} from '../../../store/actions/actionCreators/newInspectionActions/'
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

const mapDispatchToProps = { saveComplianceIssue, deleteComplianceIssue }

export const EditComplianceIssueContainer = compose(
  withFeedback,
  withDeleteModal,
  connect(mapStateToProps, mapDispatchToProps)
)(EditComplianceIssue)
