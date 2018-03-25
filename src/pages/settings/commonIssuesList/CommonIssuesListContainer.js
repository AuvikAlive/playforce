import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { CommonIssuesList } from './CommonIssuesList'
import { objectToArrayWithId } from '../../../utilities/objectToArrayWithId'

const mapStateToProps = ({
  firebase: { auth: { uid } },
  firestore: { data: { users } },
}) => ({
  userId: uid,
  commonIssues:
    users &&
    users[uid].commonIssues &&
    objectToArrayWithId(users[uid].commonIssues),
})

export const CommonIssuesListContainer = compose(
  withFirestore,
  connect(mapStateToProps),
)(CommonIssuesList)
