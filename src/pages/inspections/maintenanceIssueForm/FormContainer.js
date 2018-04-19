import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { withFirestore } from 'react-redux-firebase'
import { withErrorLoadingSubmit } from '../../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'
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
  withErrorLoadingSubmit,
  withFirestore,
  withRouter,
  connect(mapStateToProps)
)(Form)
