import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { CommonIssuesList } from './CommonIssuesList'
import { fetchCommonIssuesRealTime } from '../../../store/actions/actionCreators/commonIssueActions/'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
  firestore: {
    data: { users },
  },
  commonIssue: { commonIssuesLoaded, commonIssues },
}) => ({
  userId: uid,
  commonIssuesLoaded,
  commonIssues,
})

const mapDispatchToProps = { fetchCommonIssuesRealTime }

export const CommonIssuesListContainer = compose(
  withFirestore,
  connect(mapStateToProps, mapDispatchToProps)
)(CommonIssuesList)
