import { compose } from 'redux'
import { connect } from 'react-redux'
import { withFirebase } from 'react-redux-firebase'
import { withFeedback } from '../../hocs/withFeedback/withFeedback'
import { sendPasswordResetEmail } from '../../store/actions/actionCreators/authActions/'
import { ResetPassword } from './ResetPassword'

const mapDispatchToProps = { sendPasswordResetEmail }

const enhance = compose(
  withFeedback,
  withFirebase,
  connect(
    null,
    mapDispatchToProps
  )
)

export const ResetPasswordContainer = enhance(ResetPassword)
