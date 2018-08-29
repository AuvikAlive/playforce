import { connect } from 'react-redux'
import { compose } from 'redux'
import { CommonIssuesList } from './CommonIssuesList'
import { fetchCommonIssuesRealTime } from '../../../store/actions/actionCreators/commonIssueActions/'

const mapStateToProps = ({ firebase, commonIssue }) => {
  const { commonIssuesLoaded, commonIssues } = commonIssue

  return {
    userId: firebase.auth.uid,
    commonIssuesLoaded,
    commonIssues,
  }
}

const mapDispatchToProps = { fetchCommonIssuesRealTime }

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const CommonIssuesListContainer = enhance(CommonIssuesList)
