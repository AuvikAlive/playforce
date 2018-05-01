import { connect } from 'react-redux'
import { compose } from 'redux'
import { withDeleteModal } from '../../../hocs/withDeleteDialog/withDeleteDialog'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import {
  fetchCommonIssue,
  updateCommonIssue,
  deleteCommonIssue,
} from '../../../store/actions/actionCreators/commonIssueActions/'
import { EditCommonIssue } from './EditCommonIssue'

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
    },
    commonIssue: { commonIssuesLoaded, commonIssues, commonIssue },
  },
  {
    match: {
      params: { id },
    },
  }
) => ({
  userId: uid,
  commonIssueId: id,
  commonIssues,
  commonIssue:
    (commonIssuesLoaded && commonIssues.find(item => item.id === id)) ||
    commonIssue,
})

const mapDispatchToProps = {
  fetchCommonIssue,
  updateCommonIssue,
  deleteCommonIssue,
}

export const EditCommonIssueContainer = compose(
  withFeedback,
  withDeleteModal,
  connect(mapStateToProps, mapDispatchToProps)
)(EditCommonIssue)
