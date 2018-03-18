import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { EditCommonIssue } from './EditCommonIssue'

const mapStateToProps = (
  { firestore: { data: { users } }, firebase: { auth: { uid } } },
  { match: { params: { id } } },
) => ({
  userId: uid,
  commonIssueId: id,
  data: users && users[uid],
})

export const EditCommonIssueContainer = compose(
  withFirestore,
  connect(mapStateToProps),
)(EditCommonIssue)
