import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { EditComplianceIssue } from './EditComplianceIssue'
import {
  editComplianceIssue,
  deleteComplianceIssue,
} from '../../../store/actions/actionCreators/inspectionActions'
import { withDeleteModal } from '../../../hocs/withDeleteModal/withDeleteModal'

const mapStateToProps = (
  {
    firestore: { data: { users } },
    firebase: { auth: { uid } },
    inspection: { complianceIssues, equipments },
  },
  { match: { params: { id } } },
) => ({
  complianceIssueIndex: id,
  complianceIssue: complianceIssues[id],
  equipments,
  userId: uid,
  data: users && users[uid],
})

const mapDispatchToProps = { editComplianceIssue, deleteComplianceIssue }

export const EditComplianceIssueContainer = compose(
  withDeleteModal,
  withFirestore,
  connect(mapStateToProps, mapDispatchToProps),
)(EditComplianceIssue)
