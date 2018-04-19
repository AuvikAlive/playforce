import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { saveCommonIssue } from '../../../store/actions/actionCreators/commonIssueActions/'
import { AddCommonIssue } from './AddCommonIssue'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
}) => ({
  userId: uid,
})

const mapDispatchToProps = { saveCommonIssue }

export const AddCommonIssueContainer = compose(
  withFeedback,
  withFirestore,
  connect(mapStateToProps, mapDispatchToProps)
)(AddCommonIssue)
