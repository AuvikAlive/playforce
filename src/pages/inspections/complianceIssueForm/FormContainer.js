import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { withFirestore } from 'react-redux-firebase'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { withImageCapture } from '../../../hocs/withImageCapture/withImageCapture'
import { Form } from './Form'
import { fetchCommonIssuesRealTime } from '../../../store/actions/actionCreators/commonIssueActions'

const mapStateToProps = ({
  firestore: {
    data: { users },
  },
  firebase: {
    auth: { uid },
  },
  inspection: { equipments },
  commonIssue: { commonIssuesLoaded, commonIssues },
}) => ({
  userId: uid,
  equipments,
  commonIssuesLoaded,
  commonIssues,
})

const mapDispatchToProps = { fetchCommonIssuesRealTime }

export const FormContainer = compose(
  withImageCapture,
  withFeedback,
  withFirestore,
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Form)
