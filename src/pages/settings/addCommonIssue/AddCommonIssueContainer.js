import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { addCommonIssue } from '../../../store/actions/actionCreators/commonIssueActions/'
import { AddCommonIssue } from './AddCommonIssue'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
}) => ({
  userId: uid,
})

const mapDispatchToProps = { addCommonIssue }

export const AddCommonIssueContainer = compose(
  withFeedback,
  connect(mapStateToProps, mapDispatchToProps)
)(AddCommonIssue)
