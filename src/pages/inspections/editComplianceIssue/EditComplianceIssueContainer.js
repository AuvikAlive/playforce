import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { EditComplianceIssue } from './EditComplianceIssue'
import {
  editComplianceIssue,
  deleteComplianceIssue,
} from '../../../store/actions/actionCreators/inspectionActions'

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
  withFirestore,
  connect(mapStateToProps, mapDispatchToProps),
)(EditComplianceIssue)
