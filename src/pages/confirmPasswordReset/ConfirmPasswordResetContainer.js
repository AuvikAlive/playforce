import { compose } from 'redux'
import { connect } from 'react-redux'
import { withFirebase } from 'react-redux-firebase'
import { withFeedback } from '../../hocs/withFeedback/withFeedback'
import { confirmPasswordReset } from '../../store/actions/actionCreators/authActions/'
import { ConfirmPasswordReset } from './ConfirmPasswordReset'

const mapDispatchToProps = { confirmPasswordReset }

const enhance = compose(
  withFeedback,
  withFirebase,
  connect(
    null,
    mapDispatchToProps
  )
)

export const ConfirmPasswordResetContainer = enhance(ConfirmPasswordReset)
