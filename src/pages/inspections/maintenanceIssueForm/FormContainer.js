import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { withFirestore } from 'react-redux-firebase'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { withImageCapture } from '../../../hocs/withImageCapture/withImageCapture'
import { Form } from './Form'

const mapStateToProps = ({
  firestore: {
    data: { users },
  },
  firebase: {
    auth: { uid },
  },
  inspection: { equipments },
}) => ({
  userId: uid,
  equipments,
})

export const FormContainer = compose(
  withImageCapture,
  withFeedback,
  withFirestore,
  withRouter,
  connect(mapStateToProps)
)(Form)
