import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { CommonIssuesList } from './CommonIssuesList'

const mapStateToProps = ({
  firebase: { auth: { uid } },
  firestore: { ordered: { users = [] } },
}) => ({
  userId: uid,
  commonIssues: users,
})

export const CommonIssuesListContainer = compose(
  withFirestore,
  connect(mapStateToProps),
)(CommonIssuesList)
