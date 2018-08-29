import { connect } from 'react-redux'
import { compose } from 'redux'
import { withDeleteDialog } from '../../../hocs/withDeleteDialog/withDeleteDialog'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import {
  fetchCommonIssue,
  updateCommonIssue,
  deleteCommonIssue,
} from '../../../store/actions/actionCreators/commonIssueActions/'
import { EditCommonIssue } from './EditCommonIssue'

const mapStateToProps = ({ firebase, commonIssue }, { match }) => {
  const { commonIssuesLoaded, commonIssues } = commonIssue
  const commonIssueId = match.params.id

  return {
    userId: firebase.auth.uid,
    commonIssueId,
    commonIssues,
    commonIssue:
      (commonIssuesLoaded &&
        commonIssues.find(item => item.id === commonIssueId)) ||
      commonIssue.commonIssue,
  }
}

const mapDispatchToProps = {
  fetchCommonIssue,
  updateCommonIssue,
  deleteCommonIssue,
}

const enhance = compose(
  withFeedback,
  withDeleteDialog,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const EditCommonIssueContainer = enhance(EditCommonIssue)
