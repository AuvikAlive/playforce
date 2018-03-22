import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { withDeleteModal } from '../../../hocs/withDeleteModal/withDeleteModal'
import { EditCommonIssue } from './EditCommonIssue'

const mapStateToProps = (
  { firebase: { auth: { uid } }, firestore: { ordered: { users } } },
  { match: { params: { id } } },
) => ({
  userId: uid,
  commonIssueId: id,
  commonIssue: users && users[0],
})

export const EditCommonIssueContainer = compose(
  withDeleteModal,
  withFirestore,
  connect(mapStateToProps),
)(EditCommonIssue)
