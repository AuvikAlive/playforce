import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { EditCommonIssue } from './EditCommonIssue'
import { withErrorLoadingSubmit } from '../../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'

const mapStateToProps = (
  { firestore: { data: { users } }, firebase: { auth: { uid } } },
  { match: { params: { id } } },
) => ({
  userId: uid,
  commonIssueId: id,
  data: users && users[uid],
})

export const EditCommonIssueContainer = compose(
  withErrorLoadingSubmit,
  withFirestore,
  connect(mapStateToProps),
)(EditCommonIssue)
