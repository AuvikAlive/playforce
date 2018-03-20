import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { EditComplianceIssue } from './EditComplianceIssue'
import {
  editComplianceIssue,
  deleteComplianceIssue,
} from '../../../store/actions/actionCreators/inspectionActions'
import { withErrorLoadingSubmit } from '../../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'
import { withDeleteModal } from '../../../hocs/withDeleteModal/withDeleteModal'
import { withImageCapture } from '../../../hocs/withImageCapture/withImageCapture'

const mapStateToProps = (
  {
    firestore: { data: { users } },
    firebase: { auth: { uid } },
    inspection: { complianceIssues },
  },
  { match: { params: { id } } },
) => ({
  complianceIssueIndex: id,
  complianceIssue: complianceIssues[id],
  userId: uid,
  data: users && users[uid],
})

const mapDispatchToProps = { editComplianceIssue, deleteComplianceIssue }

export const EditComplianceIssueContainer = compose(
  withImageCapture,
  withDeleteModal,
  withErrorLoadingSubmit,
  withFirestore,
  connect(mapStateToProps, mapDispatchToProps),
)(EditComplianceIssue)
